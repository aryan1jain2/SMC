const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        trim : true,
        maxlength : 50
    },
    email : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type: String,
        required: true,
    },
    fullname : {
        type: String,
        required: true,
        trim : true,
        maxlength : 50
    },
    avatar : {
        data: Buffer, 
        contentType: String
    },
    gender: {
        type: String,
        default: "male",
    },
    followers : [
        {
            user : Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    following : [
        {
            user : Schema.Types.ObjectId,
            ref : "User"
        }
    ],
}, 
{
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
