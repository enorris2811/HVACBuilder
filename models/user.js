var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName:{type:String},
    password:{type:String},
    emial:{type:String},
    projects:[{type:Schema.Types.ObjectId}]
});

var userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;