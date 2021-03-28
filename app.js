const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/api/azure-oauth2-callback", (req, res) => {
	console.info(`Receive oauth2 callback from azure: %j`, req.query);
	res.end("ok");
});

app.get("/api/health",(req,res)=>{
	res.end("I'am fine.")
})

app.use("/",(req,res,next)=>{
	res.send("404: api not exist")
})

app.listen(process.env.PORT, (err) => {
	console.info(`Server running on port `, process.env.PORT);
});
