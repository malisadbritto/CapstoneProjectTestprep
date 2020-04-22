const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://malisa:malisa123@cluster0-csmt6.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');
require('./course.model');
require('./contact.model');