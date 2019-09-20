const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;
const bycrypt = require('bcryptjs');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['Admin', 'User', 'Producer'],
        default: 'User'
    },
})

userSchema.methods = {
    hashPassword: plainText => {
        return bycrypt.hashSync(plainText, 10)
    },
    checkPassword: function (inputPassword) {
        return bycrypt.compareSync(inputPassword, this.password);
    }
}

userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('========= NO PASSWORD PROVIDED =========');
        next();
    }
    else {
        this.password = this.hashPassword(this.password);
        next();
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;