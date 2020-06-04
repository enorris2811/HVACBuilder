var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ahu = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true,
        enum: ['small', 'medium', 'large', 'ExtraLarge'],
        default: 'Small'
    },
    controller: {
        type: String,
        required: true,
        enum: ['siemens', 'carrier', 'distech', 'trane'],
        default: 'Siemens'
    },
    points: [{
        type: String,
        default: undefined
    }],
    sequence: [{
        type: String,
        default: undefined
    }],
    model: {
        type: String,
        default: undefined
    },

    project: {
        type: Schema.Types.ObjectId,
        ref: 'projectModel'
    }
});



var ahuModel = mongoose.model('ahuModel', ahu)

module.exports = ahuModel;