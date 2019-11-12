const express = require ('express');
const app = express();
const libraryGames = require ('./routes');

const port = 3002;

const connectDb = require ('./database');

connectDb();

app.use(express.urlencoded({extend: true}));
app.use(express.json());

app.use('/', libraryGames);

app.listen(port, () => console.log(`listen port ${port}`));