const connection = require('connection.js');

selectAll();
insertOne();

const orm = {
    getAll: function(table, cb){
        const query = 'SELECT * FROM ' +  table + ';'
        connection.query(query, function(err,result) {
            if(err) throw err;
            cb(result)
        })
        
    }
}
