import MongoDb from 'mongodb'

export async function connectDB(){
    return MongoDb.MongoClient.connect();
}