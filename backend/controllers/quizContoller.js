"use strict";
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('Quiz');

        //get all Quiz
        router.get('/quizinfo', (req, res) => {
            Quiz.find(req.params.body, (err, doc) => {
                if (!err) {
                    res.json(doc);
                } else {
                    console.log('Error in Quiz info fetching :' + err);
                }
            });
        });

    

        //get quiz by id
        router.get('/:id', (req, res) => {
            Quiz.findById(req.params.id, (err, doc) => {
                if (!err) {
                    res.json(doc);
                }
            });
        });

        //add new quiz
        router.post('/quiz', (req, res) => {
            insertRecord(req, res);
        });

        //delete quiz by id
        router.get('/delete/:id', (req, res) => {
            Quiz.findByIdAndRemove(req.params.id, (err, doc) => {
                if (!err) {
                    res.redirect('/Quiz/list');
                } else {
                    console.log('Error in Quiz delete :' + err);
                }
            });
        });

        //function to add new quiz
        function insertRecord(req, res) {
            var quiz = new Quiz();
            quiz.question = req.body.question;
            quiz.option1 = req.body.option1;
            quiz.option2 = req.body.option2;
            quiz.option3 = req.body.option3;
            quiz.option4 = req.body.option4;
            quiz.answer = req.body.answer;
            quiz.save((doc, err) => {
                if (!err)
                    res.json(doc);
            });
        }



        module.exports = router;
