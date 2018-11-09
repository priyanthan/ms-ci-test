var app = require('express')();
var http = require('http').Server(app);
var request = require('request');


app.get('/', function(req, res){
  var options = {
    url: "https://api.millionspaces.com/api/payment/paycrop",
	//url: "http://localhost:8081/api/payment/paycrop",
    method: 'POST',
    json:{'id':'409'}
	//409,5390,41
  };


  var req=request(options, function(error, response, body) {
    console.log(response)
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
        res.send('<iframe width=600 height=1000 src="'+body.url+'"></iframe>') 
        
    }
})
});

app.get('/home', function(req, res){
  var responseText=req.query.msg;
  return res.send('<h1>you have successfully paid</h1> : '+responseText) 
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
