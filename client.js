const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
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
  
  conn.on('connect', () => {
    conn.write('Say: Yum!');
  });
  
  
  return conn;
}

module.exports = connect;

// const start = Date.now();

// //
// // a doAction function which console logs the acts taken by the robot
// // by scheduling messages to appear when the action is finished
// //
// const doAction = function(name,time,next){
//   console.log((Date.now() - start) + ': Starting :' + name + ':: This will take ' + time + ' seconds.');
//   setTimeout(()=>{
//     if (next !== null){
//       next();
//     }
//     console.log('End : ' + name + ':: This took ' + time + ' seconds');
//   },time*1000);
// }

// //
// // Look
// //
// const look = ()=>{
//   doAction("look",1,null);
// };