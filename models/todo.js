const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Edit this
const PersonSchema = new Schema({
    task: String
});

module.exports = mongoose.model('Person', PersonSchema);