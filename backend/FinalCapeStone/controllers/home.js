const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const course = mongoose.model('course');
const Course = require('../models/course.model');
const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    course.find((err, doc) => {
        if (!err) {
           res.json(doc);
        }
    });
});


router.post('/', (req, res) => {
    
    console.log(req.body);
    if(!req.body.courseName) {
        return res.status(400).send({
            message: "courseName can not be empty"
        });
    }
    else if(!req.body.startDate){
        return res.status(400).send({
            message: "startDate can not be empty"
        });
    }
    else if(!req.body.endDate){
        return res.status(400).send({
            message: "endDate can not be empty"
        });
    }
    else if(!req.body.professor){
        return res.status(400).send({
            message: "professor can not be empty"
        });
    }
    else if(!req.body.level){
        return res.status(400).send({
            message: "level can not be empty"
        });
    }

    const course = new Course({
        courseName : req.body.courseName,
        startDate : req.body.startDate,
        endDate : req.body.endDate,
        professor : req.body.professor,
        level : req.body.level,
    });

    course.insert()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });

});


//get user on home page

router.get('/user', (req, res) => {
    console.log(req.params);
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
           res.json(doc);
        }
    });
});


module.exports = router;