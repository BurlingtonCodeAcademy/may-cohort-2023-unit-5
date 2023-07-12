const router = require('express').Router(); // create a variable -> import Router Engine from express

router.get('/hello-world', (request, response) => {
    /* 
        - The pathway noted as a string
        - a callback function to handle the request and response
            - req, res
    */

    response.send("Hello World") // Browser always does a GET method as a default
})

router.post('/greeting', (req, res) => {
    res.send('Good Afternoon!');
})


module.exports = router; // don't forget to export the defined route.