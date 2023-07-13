import React, { useState, useEffect } from 'react';
import './shop.css';
import backgroundImg from '../Videos/lavander2.jpg';
import {GATHER_PRODUCTS, QUERY_ME} from '../../utils/queries'
import {ADD_TO_CART} from '../../utils/mutations'
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import axios from 'axios'

const Shop = ()=>{
    const [form, setForm] = useState('')
    const [checkingOut, toggleCheckout] = useState(false)

    const [AddToCart, {error}] = useMutation(ADD_TO_CART)
    const productQuery = useQuery(GATHER_PRODUCTS)
    const meQuery = useQuery(QUERY_ME)

    const products = productQuery.data?.getProducts || []
    const me = meQuery.data?.me || []
    console.log(meQuery.data)
    console.log(meQuery.error)
    //console.log(loading)
    //console.log(data)

    const updateCount = ()=>{
        setForm('')
    }

    const addItems = async (e)=>{
        e.preventDefault()
        console.log(e.target)
        const name = e.target.getElementsByClassName('name')[0].value
        const priceInCents = parseInt(e.target.getElementsByClassName('priceInCents')[0].value)
        const count = parseInt(e.target.getElementsByClassName('count')[0].value)
        const product = {name, priceInCents}
        console.log(typeof priceInCents)
        console.log(product, count)
        console.log(JSON.stringify(error))
        try{
            let test = await AddToCart({variables:{product:{...product}, count:count}})
            console.log("test: "+test)
        }catch(err){
            console.log(err)
        }
        
    }
    const goToCheckout = async()=>{
        console.log(me.cart)
        //setCurrentCart(me.cart)
        //console.log(currentCart)
        console.log(Auth.getToken())
        try{
            // const response = await fetch("http://localhost:3001/api/payment",{
            //     method:"POST",
            //     mode:"no-cors",
            //     credentials: "same-origin",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Authorization": `Bearer ${Auth.getToken()}`
            //       },
            //     body: JSON.stringify({cart:me.cart})
            // })
            // console.log(await response.method)
            axios.post(
                'http://localhost:3001/api/payment',
                {
                    cart:[...me.cart]
                }
            ).then(res=>{
                console.log(res.data.url)
                window.location.replace(res.data.url)
            })

        }catch(err){
            console.log(JSON.stringify(err))
        }
        
        //document.location.replace(response.url)
    }

    useEffect(()=>{
        if(checkingOut){
            goToCheckout()
            toggleCheckout(false)
        } 
    })

    const setUpCheckout = () => {
        toggleCheckout(true)
    }

    return(
        <div style={{ backgroundImage: `url(${backgroundImg})`}}>
            <div className="flex-box flex-align-center flex-justify-center no-wrap flex-cols">
                <h3>Our Products</h3>
                <div className='flex-box flex-align-center wrap shop-box'>
                    {products?.map(val=>{
                        const {name, priceInCents} = val
                        return(
                            <div className="flex-item">
                                <form onSubmit={addItems}>
                                    <h4>{name}</h4>
                                    <img src="" alt="product photo" />
                                    <h4>{priceInCents}</h4>
                                    <input type="hidden" name="name" class="name" value={name} />
                                    <input type="hidden" name="priceInCents" class="priceInCents" value={priceInCents} />
                                    <input type="submit" name="addToCart" value="Add to Cart" />
                                    <input type="number" name="count" class="count" onChange={updateCount} />
                                </form>    
                            </div>
                        )
                    })}
                    <input type="button" id="checkout" value="Checkout" onClick={setUpCheckout}/>
                </div>
            </div>
        </div>
    )
}

export default Shop