const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: String,
    username: String,
    userData: Object,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
