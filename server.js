import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config(); 

const uri = process.env.MONGODB_URI; 
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Connection failed:', error);
    } finally {
        await client.close();
    }
}

run().catch(console.error);
