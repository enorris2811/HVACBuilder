const mongoose = require('mongoose');


//const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_URL;
 mongoose.connect(uri, { useNewUrlParser: true ,useUnifiedTopology: true });

 