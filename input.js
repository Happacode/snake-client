/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput = function() {
    stdin.on('data', (key) => {
    // process.stdout.write('.');

      if (key === '\u0003') {
      process.exit();
      }

      if (key === 'w') {
      conn.write('Move: up');
      }

      if (key === 'a') {
      conn.write('Move: left');
      }

      if (key === 's') {
      conn.write('Move: down');
      }

      if (key === 'd') {
      conn.write('Move: right');
      }

    });
  };
  handleUserInput();
  
  return stdin;
    
};

module.exports = setupInput;