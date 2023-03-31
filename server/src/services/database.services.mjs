import mongoDB  from 'mongodb';

export const collections = {}

const url =  "mongodb://0.0.0.0:27017/"

export async function connectToDatabase () {
    
 
    const client = new mongoDB.MongoClient(url);
            
    await client.connect();
        
    const db = client.db('contactFormDB');
   
    const userCollection = db.collection('contactForm');
 
  collections.contact = userCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${userCollection.collectionName}`);
 }