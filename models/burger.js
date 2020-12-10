const orm = require('../config/orm.js')
const express = require('express')
//model

var burger = {
    all: function(table, cb) {
        orm.getAll()
    } 
}