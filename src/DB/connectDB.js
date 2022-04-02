// MongoDB Atlas : MongoDB Atlas is a multi-cloud database service by the same people that build MongoDB.
// https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/

import {MongoClient, ServerApiVersion} from 'mongodb'
// Replace <password> with the password for the <username> user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.
const uri = "mongodb+srv://<username>:<password>@sample0.fawpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {userNewUrlParser : true, useUnifiedTopology: true, serverApi: ServerApiVersion.vl});

client.connect(err => {
    const collection = client.db("test").collection("devices");
    client.close();
})


// const dbName = "test";

// async function run() {
//     try{ 
//         await client.connect();
//         console.log("Connected correctly to server");
//         const db = client.db(dbName);

//         // Use the collection "people"
//         const col = db.collection("people");

//         // Construct a document
//         let personDocument = {
//             "name": {"first":"Alan", "second": "Turing"},
//             "birth": new Date(1912, 5, 23),
//             "death": new Date(1954, 5, 7),
//             "contribs": ["Turing machine", "Turing test", "Turingery"],
//             "views": 1250000
//         }

//         // Insert a single document, wait for promise so we can read it back
//         const p = await col.insertOne(personDocument);
//         // Find one document
//         const myDoc = await col.findOne();
//         // Print to the console
//         console.log(myDoc);

//     }catch(err){
//         console.log(err.stack);
//     }finally{
//         await client.close();
//     }
// }

// run().catch(console.dir);