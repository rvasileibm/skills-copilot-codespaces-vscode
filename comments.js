// Create web server
// Create a web server that listens on port 3000 and serves a JSON object with the following structure:
// {
//   "comments": [
//     {
//       "username": "alice",
//       "comment": "I love your blog!",
//       "timestamp": 1479700090935
//     }
//   ]
// }
// The timestamp should be the current time in milliseconds since the Unix epoch.

var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "application/json"});
  var obj = {
    comments: [
      {
        username: 'alice',
        comment: 'I love your blog!',
        timestamp: new Date().getTime()
      }
    ]
  };
  res.end(JSON.stringify(obj));
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');
// When you visit http://localhost:3000/ in your browser, you should see the JSON object above.

