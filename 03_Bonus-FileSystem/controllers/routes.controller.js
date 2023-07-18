const router = require('express').Router();
const db = require('../db.json');
const fs = require('fs');
const dbRoute = './db.json'; // storing our string connection for file system.

//* GET ALL ITEMS
router.get('/', (req,res) => {
    try {
        
        res.status(200).json({
            results: db
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

//* ADD ITEM
router.post('/', (req, res) => {

    try {
        const toDoItem = req.body;
    
        // fs.readFile('./db.json', (err, data) => {
        fs.readFile(dbRoute, (err, data) => {
            if(err) throw err;

            const db = JSON.parse(data);
            const id = db.length + 1;
            toDoItem.id = id;
            db.push(toDoItem);

            // fs.writeFile('./db.json', JSON.stringify(db), err => console.log(err))
            fs.writeFile(dbRoute, JSON.stringify(db), err => console.log(err))

        })

        res.send(200);
        
    } catch (err) {
        res.status(500).json({error: err.message});
    }

});

//* UPDATED ITEM by ID
router.put('/:id', (req, res) => {

    try {
        
        const id = Number(req.params.id);
        const todo = req.body;

        fs.readFile(dbRoute, (err, data) => {
            if(err) throw err;

            const db = JSON.parse(data);
            let result; // used for response back

            db.forEach((item, i) => {
                if(item.id === id) {
                    todo.id = id;
                    db[i] = todo; // updates the db array
                    result = db[i]; // used for the response
                }
            })

            fs.writeFile(dbRoute, JSON.stringify(db), err => console.log(err));

            // Response to User
            result ? 
                res.status(200).json({
                    status: `Updated!`,
                    item: result
                }) :
                res.status(404).json({ status: 'Item not found...'})
        })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});

//* Delete Item by ID
router.delete('/:id', (req, res) => {
    try {
        
        const id = Number(req.params.id);

        fs.readFile(dbRoute, (err, data) => {
            if(err) throw err;

            const db = JSON.parse(data);
            const filteredDB = db.filter(i => {
                if(i.id !== id) {
                    return i;
                }
            })

            fs.writeFile(dbRoute, JSON.stringify(filteredDB), err => console.log(err));

            res.status(200).json({
                status: 'Item deleted!'
            })

        })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router;