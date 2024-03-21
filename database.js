const mysql = require('mysql');
const fs = require('fs')

 const connection = mysql.createConnection({ 
	 host: 'localhost', 
	 database: 'asignment', 
	 user: 'root', // username of the mysql connection 
	 password: '' // password of the mysql connection
});
connection.connect(function (err) {
   if(err){
       console.log('Error connecting' + err.stack );
	   return;
   }
   else{
       console.log('Connected as id' + connection.threadId);
   }
});

connection.query('SELECT * FROM cases', function(error, results, fields) {
	if(error)
		throw error;
		var data = {}
		data.cases = []
		results.forEach(result => {
			data.cases.push(result)
		})
		
		fs.writeFileSync('db.json', JSON.stringify(data))
		
});

