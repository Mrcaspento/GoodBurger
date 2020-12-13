const mysql = require('mysql');
//heruko error still sorry!
//let connection = mysql.createConnection("mysql://fklzxboqmyrrh6t7:d2x4ia1b2knhksgu@otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/klur6gy0ttnv2f3k")

if(process.env.JAWSDB_URL) {
connection =mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user:"root",
        password: "",
        database: "burgers_db"
    });
}
connection.connect(function(err){
    if(err) throw err;
    console.log("CONNECTED TO THE MATRIX")
})
module.exports = connection;