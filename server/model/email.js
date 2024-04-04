
const mongoose = require("mongoose");



const EmailSchema = new mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    subject: String,
    body:String,
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: String,
    starred: {
        type: Boolean,
        required: true,
        default: false
    },
    bin: {
        type: Boolean,
        required: true,
        default: false
    },
    type: {
        type: String,
        required: true
    }
});


const email = mongoose.model( "gmail" , EmailSchema);

module.exports = email;