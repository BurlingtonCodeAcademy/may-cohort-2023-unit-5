const router = require('express').Router();
const db = require('../db.json');
const fs = require('fs'); // library pulled from Node. Allows us to manipulate files.

// TODO GET All
/* 
! Quick Challenge:
    - Frame a GET route
        - No endpoint is required to access. It will "Get All" based off /routes
            - note: Where is "/routes" coming from?
    
    No need to work through the logic within the code block.
*/
router.get('/', (req,res) => {

    try {
        res.status(200).json({
            results: db
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

})

// TODO Get One
/* 
    syntax:
        URL - /:parameter
            - denotes a parameter value. Endpoint is expecting a reference value.

        example: 
            http://localhost:4000/routes/:id <-- what is built
            http://localhost:4000/routes/1 <-- what is passed into the URL

        - "1" would reference a paramter or flexible string.
            - Could be a name of something (or anything we want)
*/

router.get('/:id', (req,res) => {
    // res.send(req.url) // showing our endpoint
    // console.log(req.url)
    // res.send(req.params.id) // details an objectwith a key of "id" (param name) & the value within the url.
    // console.log(req);   
    // console.log(Object.keys(req)); 
    // console.log(req.method)  
    // console.log(req.baseUrl)  
    // console.log(Object.values(req.params)[0]) // one way to path

    /* 
    *    - used to help us locate one item in our database
    *    - ID typically has a unique value to help us find that ONE item.
    */
    
    try {
        
        let { id } = req.params;
        let results = db.filter(i => i.id == id);
        // let results = db.filter(i => i.id == req.params.id);

        res.status(200).json({
            status: `Found item at id: ${id}`,
            results
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

module.exports = router;