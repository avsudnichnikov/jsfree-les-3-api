const express = require('express');
const router = express.Router();
const characters = require('../models/characters');

router.get('/', ({query}, res) => {
    let dt = [...characters]
    if (query.name) {
        dt = dt.filter(el => {
            return el.name.toLowerCase().indexOf(query.name.trim().toLowerCase()) !== -1
        })
        res.json(dt);
    }
    res.json(characters);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const idx = characters.findIndex(el => el.id === +id);

    if (idx !== -1) {
        res.json(characters[idx]);
    } else {
        res.status(404);
        res.json({code: 404, message: '404 | not found'});
    }
});

module.exports = router;
