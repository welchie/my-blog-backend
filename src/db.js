import { MongoClient } from "mongodb";
let db;

async function connectToDb(cb) {
   const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.jd2si1y.mongodb.net/?retryWrites=true&w=majority`); 
   //const client = new MongoClient(`mongodb+srv://welchie99:IMqj9KIR2S5lg9zw@cluster0.upiopfk.mongodb.net/?retryWrites=true&w=majority`); 
    await client.connect();

    db = client.db('react-blog-db');
    cb();
}

export {
    db,
    connectToDb,
}