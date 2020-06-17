const crypto = require('crypto');
const random = require('random');

const algorithm = 'aes-256-ctr';
const password = process.env.cryptokey || 'secretPassword';
console.log(password);

function encrypt(text) {
    const cipher = crypto.createCipher(algorithm, password);
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text) {
    const decipher = crypto.createDecipher(algorithm, password);
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

function salt(text){

    var temp = getLetters();
    
    return temp+text;

}


function getLetters(){
    
    var table = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVxXyYzZ";
    for(var i = 0; i < 9;i++){
        var temp = random.uniformInt(min =1 , max =52);
        var next = table.charAt(temp);
        var sendBack =+ next;
    }
    return sendBack;
}

exports.encrypt = encrypt;

exports.decrypt = decrypt;