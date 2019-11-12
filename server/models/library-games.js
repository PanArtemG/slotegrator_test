const mongoose = require ('mongoose');
const Shema = mongoose.Schema;

const Game = new Shema ({
    "id": Number,
    "name":String,
    "img": String,
    "link": String,
    "type": String,
    "provider": String
});

module.exports = mongoose.model('game', Game, 'games');