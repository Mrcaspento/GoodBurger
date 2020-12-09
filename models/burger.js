const orm = require('../config/orm.js')
//model

var burger = {
    all: function(table, cb) {
        orm.getAll()
    } 
}