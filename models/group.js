var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var group = new Schema({
    name:{type:String, required:true},
    project:{type:Schema.Types.ObjectId, ref:'projectModel'},
    units:[{type:Schema.Types.ObjectId, ref:'ahuModel',default:undefined}]
});
var groupModel = mongoose.model('groupModel',group);

module.exports = groupModel;