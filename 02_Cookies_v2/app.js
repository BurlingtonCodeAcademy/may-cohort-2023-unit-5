const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const db = require('./db.json')
const PORT = 4000;

app.use(cookieParser());

// Creating a route to set Cookies
// POST - localhost:4000/
app.post('/', async(req, res) => {
    await res.cookie('cart', [
        {'item':'milk', 'price':1.79},
        {'item':'cheese', 'price':2.99},
        {'item':'dog food', 'price':8.98},
    ]);

    await res.cookie('session', [
        {'username':'bombadil1934', 'password':'goldberry'}
    ]);

    res.send(`Cookies have been saved`);
});

// Creating a route to view any offers or set cookies
// GET - localhost:4000/
app.get('/', (req,res) => {
    const check = req.cookies;
    let offer;
    
    if(check.cart) {
        let numCartItems = check.cart.length;
        let noMatches = 0;
        
        check.cart.every(obj => {
            offer = db.filter(i => i.item == obj.item && i.price < obj.price);
            noMatches++;

            return offer.length > 0 || numCartItems === noMatches ? false : true;
        });

    }

    if(offer.length > 0) {
        res.send({
            offer: `Our ${offer[0].item} is ${offer[0].price}!`,
            cookies: check.cart
        })
    } else {
        res.send({
            offer: `No offers are better than what you have`,
            cookies: check.cart
        })
    }
})


app.listen(PORT, () => console.log(`Listening: ${PORT}`));