//const { MongoClient } = require('mongodb');
const { mongoose } = require('mongoose');
const dotenv  = require('dotenv');

dotenv.config();

const connection = async () => {
    try {
        const DB_URL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-0ydqqcg-shard-00-00.tyne60r.mongodb.net:27017,ac-0ydqqcg-shard-00-01.tyne60r.mongodb.net:27017,ac-0ydqqcg-shard-00-02.tyne60r.mongodb.net:27017/?ssl=true&replicaSet=atlas-ow78ff-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
        mongoose.connect(DB_URL);
        // const client = await MongoClient.connect('mongodb://dbadmin:dbImp!14%402@78.38.35.219:27017/');
        // const database = client.db('haniehhosseini');
        // const collection = database.collection('gmail');
        console.log("Connection successful");
        //return collection;
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error}`);
    }
}

module.exports = connection;