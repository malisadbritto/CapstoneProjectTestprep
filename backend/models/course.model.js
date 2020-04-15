const mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    courseName: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    professor: {
        type: String
    },
    level: {
        type: String
    }
});


mongoose.model('course', courseSchema);