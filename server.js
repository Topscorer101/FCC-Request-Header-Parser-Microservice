ar express = require('express');
var app = express();

var cors = require('cors');
const http = require('http');
app.use(cors({optionSuccessStatus: 200})); 

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", function (req, res) {
  console.log(req.ip);
  console.log(req.headers['accept-language']);
  console.log(req.headers['user-agent']);
  res.json({"ipaddress": req.ip,
          "language": req.headers['accept-language'],
          "software": req.headers['user-agent']});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
