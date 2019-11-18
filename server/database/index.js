const mongoose = require ('mongoose');

const mongodb ="mongodb+srv://games_admin:admin@cluster0-fjxgp.mongodb.net/library?retryWrites=true&w=majority";

async function connectDb() {
    try {
        await mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('connect DB');
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = connectDb;