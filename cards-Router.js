let { getCards, addCard } = require('./repository')


const express = require('express');
const router = express.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


router.get('/', async (req, res) => {

    let cards = await getCards();
    if (!!req.query.search) {
        cards = cards.filter(u => u.name.indexOf(req.query.search) > -1)
    }

    res.send(cards)
});


router.get('/:id', async (req, res) => {
    let cardId = req.params.id;

    let cards = await addCard();
    let card = cards.find(u => u.id == cardId);
    if(cards) {
    res.send(card)}
    else {
        res.send(404)
    }
});



router.post('/', async (req, res) => {
    let name = req.body.data;

    let result = await addCards(name);
    res.send({success: true});
});



module.exports = router;

