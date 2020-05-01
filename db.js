const mongoose = require('mongoose');


//const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://eric:hey12george@cluster0-16hbj.azure.mongodb.net/projects?retryWrites=true&w=majority";
 mongoose.connect(uri, { useNewUrlParser: true ,useUnifiedTopology: true });

 