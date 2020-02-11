const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
   
    name: {
        type: String,
        required: true,
        },
    email: {
        type: String,
        required: true,
        },
    title: {
            type: String,
            required: true,
            },
    comment: {
                type: String,
                required: true,
                },

},{
    timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;