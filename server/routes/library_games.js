const express = require ('express');
const router = express.Router();
const Game = require ('../models/library-games');

router.get ('/library-games/games', async (req, res) => {
    const games = await Game.find({});
    await res.json(games)
});

router.post ('/library-games/library-games', async (req, res) => {
    const game = new Game (req.body);
    await post.save((error) => {
        if (error) return console.log(error);
        res.json({created: true, game})
    })
});

module.exports = router;