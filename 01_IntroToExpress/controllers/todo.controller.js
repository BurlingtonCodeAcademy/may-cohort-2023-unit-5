const router = require('express').Router();

router.post('/register', (req, res) => {
    // console.log('in Todo controller: ', req.datePosted);
    // console.log(req.body)
    // console.log(req.headers);

    try {
        const {
            firstName, lastName, email, password
        } = req.body;
        
        console.log(potato)

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

module.exports = router;