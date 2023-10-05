const { Client } = require('ssh2');

const conn = new Client();
conn.on('ready', function() {
  console.log('Client :: ready');
  
  // Shut down any running server
  conn.exec('command_to_shut_down_server', function(err, stream) {
    if (err) throw err;
    
    // Start the selected modpack server
    const runCommand = `path_to_run.bat_of_selected_modpack`;
    conn.exec(runCommand, function(err, stream) {
      // Handle errors and stream responses
    });
  });
}).connect({
  host: 'your_remote_server_ip',
  port: 22,
  username: 'your_username',
  password: 'your_password'
});
