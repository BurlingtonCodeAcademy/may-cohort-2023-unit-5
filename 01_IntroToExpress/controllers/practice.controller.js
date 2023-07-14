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
});

router.post('/json', (req, res) => {
    console.log(req.body);

    const { name } = req.body;
    // const name = req.body.name

    res.status(200).send(`Hello, ${name}`)
})

router.get('*', (req, res) => {
    /* 
        - "*": acounts for a "wild card" or anything that hasn't been defined.
        - Provide a clean response back to the user.
    */

    res.status(404).send(`
    <img src="https://http.cat/404" alt="status code 404"/>
    `)
})

module.exports = router; // don't forget to export the defined route.