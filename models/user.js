var mongoose = require('mongoose');

const config = require('config');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    },
    salt: {
        type: String
    },
    hash: {
        type: String
    },
    email: {
        type: String
    },
    projects: [{
        type: Schema.Types.ObjectId
    }]
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
}

userSchema.methods.toAuthJSON = function () {
    return {
        _id: this._id,
        email: this.email,
        token: this.generateJWT(),
    };
};


var userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;