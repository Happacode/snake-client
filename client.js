const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', function (data) {
    console.log(data);
  });
  
  conn.on('connect', function () {
    console.log("Successfully connected to game server");
  });
  
  conn.on('connect', () => {
    conn.write('Name: HAP');
  });

  return conn;
}

module.exports = connect;


// To accomplish this, inside the connect function, use the .on method on our conn object to register a "connect" handler (a callback function). 
// In the callback, print a message for us (the player) to see - something like "Successfully connected to game server" will suffice.