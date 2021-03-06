const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    //title: String,
    title: {
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', postSchema);