// npm init
// console create package.json
// console create server folder w/ index.js file - server/index.js
// type required modules on index.js
var express = require('express');
var bodyParser = require('body-parser');
var mySql = require('mysql');
// install express
// install body parser
// install my sql
// server set up + app.listen(3000)
var pool = mysql.createPool({
	connectionLimit: 10,
	host: "localhost",
	password: "abc123",
	database: "Chirps"
})

var clientPath = path.join(__dirname, "../client");


app.use(express.static(clientPath));
app.use(bodyParser.json());

app.route("/api/chirps")
.get(function(req, res)
rows('GetAllChirps')
.then(function(chirps) {
res.send(chirps);
})
.catch(function(err) {
console.log(err)
res.sendStatus(500);
});
})
.post(function(req, res)
var newChirp = req.body;
row("InsertChirp", [newChirp.message, newChirp.userid])
.then(function(id) {
res.status(201).send(id);
.catch(function(err) {
console.log(err);
res.sendstatus(500);
});
});

app.route('api/chirps/:id')
.get(function(req, res) {
row('GetSingleChirp', [req.params.id])
.then(function(chirp) {
res.send(chirp);
]);
.catch(function(err) {
console.log(err);
res.sendstatus(500);
});
})
.put(function(req, res) {
empty('UpdateChirp', [req.params.id, req.body.message])
.then(function() {
res.sendstatus(204);
})
.catch(function(err) {
console.log(err);
res.sendstatus(500);
});
})
.delete(function(req, res) {
empty('DeleteChirp', [req.params.id])
.then(function() {
res.sendStatus(204);
})
.catch(function(err) {
console.log(err);
res.sendStatus(500);
});
});

// APP.GET /api/users, function req res
app.route('/api/users').get(function(req, res) {
rows('GetUsers')
.then(function(users) {
res.send(users);
})
.catch(function(err) {
console.log(err);
res.sendstatus(500);
});
});



app.listen(3000, function(){
	console.log('server listening on port 3000...');
});

callProcedure(function(){
	return new Promise(function(resolve, reject){
		pool.getconnection(function(err, connection) {
			if (err) {
				reject(err);
			} else {
				var placeholders =‘’;
				if (args & args.length > 0){
					for (var i=0;i < args.length; i++){
						if {i===args.length-1) {
							placeholders += ‘?’;
						} else {
							placeholders += ‘?,’;
						}
					}
				}
				var callString = "CALL" + procedureName + "(" + placeholders + ");";
				connection.query(callString, args, (function(err, resultSets) {
				connection.release();
				if (err) {
					reject(err);
				} else {
				resolve(resultSets);
				}
			});
		}
	});
});
}

function rows(procedureName, args) {
	return callProcedure(procedureName, args).then(function(resultSets() {
		return resultsets[0];
	});
}

function row(procedureName, args){
	return callProcedure(procedureName, args).then function(resultSets() {
		return resultsets [0][0]
	});
}

// IF NOT RETURNING ANYTHING	
function empty(procedureName, args) {
	return callProcedure(procedureName, args).then function(resultSets(){
		return;
	});
}  







