require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

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
                success_url: `${process.env.SERVER_URL}`,
                cancel_url: `${process.env.SERVER_URL}`
            })
            res.status(201).json(session)
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }
}