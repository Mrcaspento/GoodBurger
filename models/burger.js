const orm = require('../config/orm.js')
const express = require('express');
//IMport the ORM to create functions that will interact with the database.
//model
//had "table in the `all: function(table,cb)`"
var burger = {
    all: function(cb) {
        orm.getAll("burgers", function(res) {
            cb(res);
        });
    } ,
    //variables cols and vals are arrays
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, conditon, cb) {
        orm.update("burgers", objColVals, conditon, cb, function(res){
            cb(res)
        });
    }
};

//export the database functions for the controller (burgers_controller.js)
module.exports = burger;