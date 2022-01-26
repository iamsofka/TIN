const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  var params = url.parse(req.url, true).query;
  var numbers = [];

  for (var p in params) {
    numbers.push(Number.parseFloat(params[p]));
  }

  var pathname = url.parse(req.url).pathname;
  var operation = "";

  res.writeHead(200, {"Content-Type": "text/html"});

  if (pathname == "/add") {
    var result = 0;
    operation = "+";
    for (var i = 0; i < numbers.length; i++){
      result += numbers[i];
    }
  }else if (pathname == "/sub") {
    var result = numbers[0];
    operation = "-";
    for (var i = 1; i < numbers.length; i++){
      result -= numbers[i];
    }
  }else if (pathname == "/div") {
    var result = numbers[0];
    operation = "/";
    for (var i = 1; i < numbers.length; i++){
      result /= numbers[i];
    }
  }else if (pathname == "/mul") {
    var result = 1;
    operation = "*";
    for (var i = 0; i < numbers.length; i++){
      result *= numbers[i];
    }
  }

  var str = "Your problem: \"";
  for (var i = 0; i < numbers.length; i++) {
    str += numbers[i];
    if (i != numbers.length - 1){
      str += operation;
    }
  }

  str += "\", has a result: \"";
  str += result + "\"!";
  var resHTML = '<!DOCTYPE html>\
    <html lang="en">\
      <head>\
        <meta charset="UTF-8">\
        <meta name="viewport" content="width=device-width, initial-scale=1.0">\
        <title>Document</title>\
      </head>\
      <body>\ ' + str + '</body>\
    </html>';
  res.write(resHTML);
  res.end();
});

server.listen(3000, (error) => {
  if (error){
    console.log("Something went wrong: ", error);
  }else{
    console.log("Server is listening on port: 3000");
  }
});
