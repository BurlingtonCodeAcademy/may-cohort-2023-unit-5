const express = require('express');
const PORT = 4003;
const app = express();
const db = require('./db.json');
const cookieParser = require('cookie-parser');

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser()); // provides us access to the middleware so that we can see what cookies are stored.

app.get('/', async (req,res) => {
    // console.log(req.cookies);

    res.cookie('cart', [
        {"item":"milk", "price":1.79},
        {"item":"cheese", "price":2.99},
        {"item":"dog food", "price":8.98},
    ]); // setting some cookie data for our GET request

    res.cookie('session', [
        {"username": "bombadil1934", "password": "goldberry"}
    ])

    const check = req.cookies;
    // console.log(check);

    let offer = [];
    
    if(check.cart) {
        check.cart.every(obj => {
            offer = db.filter(i => i.item == obj.item && i.price < obj.price)
            return offer.length > 0 ? false : true;
        });

    }   

    // res.send(check);
    // console.log('test', offer);

    if(offer) {
        res.send({
            offer: `Our ${offer[0].item} is ${offer[0].price}!`,
            cookie: check.cart
        })
    } else {
        res.send({
            cookies: check.cart
        })
    }
})

app.listen(PORT, () => console.log(`Server is running: ${PORT}`));