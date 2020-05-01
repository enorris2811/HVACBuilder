var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ahu = new Schema({
    name:{type:String,required:true},
    type:{type:String,required:true},
    size:{type:String,required:true, enum:['small','medium','large','ExtraLarge'],default:'Small'},
    controller:{type:String,required:true,enum:['siemens','carrier','distech','trane'],default:'Siemens'},
    points:[{type:String, default:undefined}],
    sequence:{type:String},
    group:{type:Schema.Types.Mixed},
    project:{type:Schema.Types.ObjectId,ref:'projectModel'}
});
/*var ahu = {'name':null,
'type':null,
'size':null,
'controller':null,
'project':null, 
'points':null,
'sequence':null};*/


var ahuModel = mongoose.model('ahuModel',ahu)

module.exports = ahuModel;

