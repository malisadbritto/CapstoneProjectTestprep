"use strict";
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

        //get all contact
        router.get('/contactinfo', (req, res) => {
            Contact.find(req.params.body, (err, doc) => {
                if (!err) {
                    res.json(doc);
                } else {
                    console.log('Error in Contact info fetching :' + err);
                }
            });
        });

    

        //get contact by id
        router.get('/:id', (req, res) => {
            Contact.findById(req.params.id, (err, doc) => {
                if (!err) {
                    res.json(doc);
                }
            });
        });

        //add new contact
        router.post('/contact', (req, res) => {
            insertRecord(req, res);
        });

        //delete contact by id
        router.get('/delete/:id', (req, res) => {
            Contact.findByIdAndRemove(req.params.id, (err, doc) => {
                if (!err) {
                    res.redirect('/Contact/list');
                } else {
                    console.log('Error in Contact delete :' + err);
                }
            });
        });

        //function to add new contact
        function insertRecord(req, res) {
            var contact = new Contact();
            contact.name = req.body.name;
            contact.emailfrom = req.body.emailfrom;
            contact.subject = req.body.subject;
            contact.messagedes = req.body.messagedes;
            contact.save((doc, err) => {
                if (!err)
                    res.json(doc);
            });
        }




        module.exports = router;
