// const { Client } = require('ssh2');

// const conn = new Client();

// conn.on('ready', function() {
//   console.log('Client :: ready');
  
//   // Shut down any running server
//   conn.exec('command_to_shut_down_server', function(err, stream) {
//     if (err) {
//       console.error('Error shutting down server:', err);
//       return;  // Exit early on error
//     }
    
//     // Start the selected modpack server
//     const runCommand = `path_to_run.bat_of_selected_modpack`;
//     conn.exec(runCommand, function(err, stream) {
//       if (err) {
//         console.error('Error starting modpack server:', err);
//         return;  // Exit early on error
//       }
      
//       // Handle stream responses
//       stream.on('close', function() {
//         console.log('Command execution completed.');
//       });
      
//       stream.on('data', function(data) {
//         console.log('STDOUT:', data.toString());
//       });
      
//       stream.stderr.on('data', function(data) {
//         console.error('STDERR:', data.toString());
//       });
//     });
//   });
  
// }).connect({
//   host: '73.247.176.62',
//   port: 22,
//   username: 'your_username',
//   password: 'your_password'
// });

// // Handle connection errors
// conn.on('error', function(err) {
//   console.error('Connection error:', err);
// });
