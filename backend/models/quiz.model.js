const mongoose = require('mongoose');

var QuizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: 'This field is required.'
    },
     option1: {
        type: String,
        required: 'This field is required.'
    },
    option2: {
        type: String,
        required: 'This field is required.'
      
    },
    option3: {
        type: String ,
        required: 'This field is required.'    
    },
    option4: {
        type: String ,
        required: 'This field is required.'  
    },
    answer:{
        type: String,
        required: 'This field is required.'    
    }

});


mongoose.model('Quiz', QuizSchema);