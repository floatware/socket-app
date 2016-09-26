var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/chat', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/chat/about', function(req,res){
  res.sendFile(__dirname + 'README.md');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(8080, function(){
  console.log('listening on *:3000');
});
