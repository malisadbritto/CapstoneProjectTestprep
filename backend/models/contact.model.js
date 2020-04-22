const mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
     subject: {
        type: String,
        required: 'This field is required.'
    },
    emailfrom: {
        type: String
      
    },
    messagedes: {
        type: String
        
    }
});

// Custom validation for email
ContactSchema.path('emailfrom').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Contact', ContactSchema);