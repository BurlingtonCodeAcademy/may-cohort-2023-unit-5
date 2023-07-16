const router = require('express').Router();

router.post('/register', (req, res) => {
    // console.log('in Todo controller: ', req.datePosted);
    // console.log(req.body)
    // console.log(req.headers);

    try {
        const {
            firstName, lastName, email, password
        } = req.body;
        
        // console.log(potato)

        res.status(200).send(`
            <h1>Hello, ${firstName} ${lastName}</h1>
            <h3>${req.datePosted}</h3>
        `)
    } catch (err) {
        res.status(500).send(
            `<img src="https://http.cat/500" alt="status code 500"/>`
        )
    }

})

router.get('/query/', (req, res) => {
    /* 
        - Anything after the endpoint can be extracted from it.
        ex: /todo/query/?first="John"
    */
    // console.log(req.query);
    try {
        
        const { first, last, email } = req.query;

        res.status(200).json({
            status: 'Profile Page',
            results: {
                fullName: `${first} ${last}`,
                email: email
            }
        })

    } catch (err) {
        res.status(500).json({
            results: 'Rejected',
            error: err.message
        })
    }
})

module.exports = router;