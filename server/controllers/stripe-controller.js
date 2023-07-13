require('dotenv').config()
const stripe = require('stripe')("sk_test_51NSq68KJuT8DkAERfjYQftYyzJAnws0OMtluvX9V8GPHtLsgpc2OuNqb4mmbW91uVIjaUn2k6xxeQHMG4wS3jiNE00YtnmKQmU")

module.exports = {
    async createCheckoutSession({body}, res){
        try{
            /*
            req.body structure:

            {
                cart{
                    product{
                        name: String,
                        priceInCents: Int
                    }
                    count: Int 
                }
            }
            */
           console.log("Body: ", body)
           console.log("Cart: ", body.cart)
           console.log(process.env.STRIPE_PRIVATE_KEY)
            const session = await stripe.checkout.sessions.create({
                payment_method_types:['card'],
                mode: 'payment',
                line_items: body.cart.map(item=>{
                    return{
                        price_data:{
                            currency:"usd",
                            product_data:{
                                name: item.product.name
                            },
                            unit_amount: item.product.priceInCents
                        },
                        quantity: item.count
                    }
                }),
                success_url: `http://localhost:3000/`,
                cancel_url: `http://localhost:3000/`
            })
            res.status(201).json(session)
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }
}