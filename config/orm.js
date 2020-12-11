const connection = require('./connection.js');

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
// selectAll(); // done
// insertOne();
// updateOne();// done
 






const orm = {
    getAll: function(table, cb){
        const query = 'SELECT * FROM ' +  table + ';'
        connection.query(query, function(err,result) {
            if(err) throw err;
            cb(result)
        })
        
    },
    //an example of objColVals would be {burger_name: cheesburger, devoured: false}
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
}
module.exports = orm;