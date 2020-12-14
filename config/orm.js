const connection = require('./connection.js');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key]; 
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {
  all: function (table, cb) {
    const query = 'SELECT * FROM ' + table + ';'
    connection.query(query, function (err, result) {
      if (err) throw err;
      cb(result)
    })

  },
  //an example of objColVals would be {burger_name: cheesburger, devoured: false}
  update: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  create: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);
    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
  //dont need a delete function causes a bug
  
  // delete: function (table, conditon, cb) {
  //   var queryString = "DELETE FROM" + table;
  //   queryString += "WHERE";
  //   queryString += condition;
  //   connection.query(queryString, function (err, result) {
  //     if (err) throw err;
  //     cb(result);
  //   })
  // }

}
module.exports = orm;