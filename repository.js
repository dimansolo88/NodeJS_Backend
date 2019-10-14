let {reedFile, writeFile} = require('./fs-utills')


const addCard = async (name) => {
    let cards = await getCards();
    cards.push({ name: name });

    return writeFile ("cards.json", cards)

}


const getCards = async() => {

    
    return reedFile("cards.json")

}


exports.addCard = addCard;
exports.getCards = getCards;






