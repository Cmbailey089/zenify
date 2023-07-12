import React, { useState } from 'react';
import './shop.css';
import backgroundImg from '../Videos/lavander2.jpg';
import {/*GATHER_PRODUCTS,*/} from '../../utils/queries'
import {ADD_TO_CART} from '../../utils/mutations'
import { useQuery, useMutation } from '@apollo/client';

const Shop = ()=>{
    const [form, setForm] = useState('')

    const [addToCart, {error}] = useMutation(ADD_TO_CART)
    //const {loading, data} = useQuery(GATHER_PRODUCTS)

    //const products = data?.products|[]

    const updateCount = ()=>{
        setForm('')
    }

    const addItems = (e)=>{
        e.preventDefault()
        console.log(e.target)
        const name = e.target.getElementsByClassName('name')[0].value
        const priceInCents = parseInt(e.target.getElementsByClassName('priceInCents')[0].value)
        const count = parseInt(e.target.getElementsByClassName('count')[0].value)
        addToCart({name, priceInCents, count})
    }

    return(
        <div style={{ backgroundImage: `url(${backgroundImg})`}}>
            <div className="flex-box flex-align-center flex-justify-center no-wrap flex-cols">
                <h3>Our Products</h3>
                <div className='flex-box flex-align-center wrap shop-box'>
                    {/*This is a test item*/}
                    <div className="flex-item">
                        <form onSubmit={addItems}>
                            <h4>name</h4>
                            <img src="" alt="product photo" />
                            <h4>{1000}</h4>
                            <input type="hidden" name="name" className="name" value={"test product"} />
                            <input type="hidden" name="priceInCents" className="priceInCents" value={1000} />
                            <input type="submit" name="addToCart" value="Add to Cart" />
                            <input type="number" name="count" className="count" onChange={updateCount} step="1" />
                        </form>    
                    </div>
                    <div className="flex-item">
                        <form onSubmit={addItems}>
                            <h4>name</h4>
                            <img src="" alt="product photo" />
                            <h4>{1000}</h4>
                            <input type="hidden" name="name" className="name" value={"test product"} />
                            <input type="hidden" name="priceInCents" className="priceInCents" value={1000} />
                            <input type="submit" name="addToCart" value="Add to Cart" />
                            <input type="number" name="count" className="count" onChange={updateCount} step="1" />
                        </form>    
                    </div>
                    <div className="flex-item">
                        <form onSubmit={addItems}>
                            <h4>name</h4>
                            <img src="" alt="product photo" />
                            <h4>{1000}</h4>
                            <input type="hidden" name="name" className="name" value={"test product"} />
                            <input type="hidden" name="priceInCents" className="priceInCents" value={1000} />
                            <input type="submit" name="addToCart" value="Add to Cart" />
                            <input type="number" name="count" className="count" onChange={updateCount} step="1" />
                        </form>    
                    </div>
                    <div className="flex-item">
                        <form onSubmit={addItems}>
                            <h4>name</h4>
                            <img src="" alt="product photo" />
                            <h4>{1000}</h4>
                            <input type="hidden" name="name" className="name" value={"test product"} />
                            <input type="hidden" name="priceInCents" className="priceInCents" value={1000} />
                            <input type="submit" name="addToCart" value="Add to Cart" />
                            <input type="number" name="count" className="count" onChange={updateCount} step="1" />
                        </form>    
                    </div>
                    {/*products?.map(val=>{
                        const {name, priceInCents, imageURL} = val
                        return(
                            <div>
                                <form onSubmit={addItems}>
                                    <h4>name</h4>
                                    <img src={imageURL} alt="product photo" />
                                    <h4>{priceInCents}</h4>
                                    <input type="hidden" name="name" class="name" value={name} />
                                    <input type="hidden" name="priceInCents" class="priceInCents" value={priceInCents} />
                                    <input type="submit" name="addToCart" value="Add to Cart" />
                                    <input type="number" name="count" class="count" value="0" />
                                </form>    
                            </div>
                        )
                    })*/}
                </div>
            </div>
        </div>
    )
}

export default Shop