const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ProjectWeb'
})

connection.connect(
    (err) => {
        if (!err){
            console.log("Connection Stablished");
        }else{
            console.log("Connection Failed");
        }
    }
)

module.exports = connection;

// connection.query("SELECT * FROM vehiculos", function(err,results){
//     console.log(results);
// })

// connection.end()