const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.get('/home', (req, res)=>{
    res.status(200);
    res.send("Welcome Home Page Mr");
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("ServerRunning, and listening port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
