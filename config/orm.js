const connection = require('./connection.js');

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
// selectAll();
// insertOne();
// updateOne();

const orm = {
    getAll: function(table, cb){
        const query = 'SELECT * FROM ' +  table + ';'
        connection.query(query, function(err,result) {
            if(err) throw err;
            cb(result)
        })
        
    }
}
module.exports = orm;