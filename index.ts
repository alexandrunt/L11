import { MongoClient } from 'mongodb';


const uri = "mongodb+srv://alex:fxtcHvRlnJD3E7Yg@cluster0.n3reure.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


client.connect(async (error) => {

    if (error) {
        console.error(error);
        return;
    }

    console.log('got connected');
    const collection = client.db("L11").collection("shifts");

    // const results = await collection.find({}).toArray();
    // const results = await collection.find({ name: { $nin: ["shiftx", "shifty"] } }).toArray();
    // const results = await collection.find({ startTime: { $lt: new Date("2022-08-03T17:52:26.092Z") } }).toArray();

    const results = await collection.find({
        startTime: { $gte: new Date("2022-08-03T17:55:16.473Z") },
        endTime: { $lte: new Date("2022-08-03T19:50:01.000Z") }
    }).toArray();

    console.log(results);

    client.close();

})

