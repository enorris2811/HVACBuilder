var mongoose = require('mongoose');
//var ahu = require('ahu.js');

var Schema = mongoose.Schema;



var projectSchema = new Schema(
            {name:{type:String},
             groups:[{type:Schema.Types.ObjectId, ref:'groupModel',default:undefined}],
             user:{type:Schema.Types.ObjectId}
});


/*var project = {

    'name': null,
    units,
    groups,
    group:{'name':null,'units':undefined},
    ahu:{'name':null,'type':null,'size':null, 'points':null,'sequence':null}
}*/



var projectModel = mongoose.model('projectModel', projectSchema);

module.exports = projectModel;