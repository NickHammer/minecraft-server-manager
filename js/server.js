const express = require('express');
const cors = require('cors');
const { Client } = require('ssh2');

const app = express();
app.use(cors());
app.use(express.json());

const modPackPaths = {
    modpack1: `C:\Users\Nick\Desktop\atm8\Server-Files-1.0.27\run.bat`,
    modpack2: `C:\Users\Nick\Desktop\atm9\Server-Files-0.1.12\run.bat`,
    modpack3: `C:\Users\Nick\Desktop\vh_server\run.bat`,
    modpack4: `C:\Users\Nick\Desktop\AstrialCreate_server\startmc.bat`,
    modpack5: `C:\Users\Nick\Desktop\DawnCraft_server\run.bat`
};

app.post('/manageServer', (req, res) => {
    const action = req.body.action;
    const selectedModpack = req.body.selectedModpack;
    const modpackPath = modpackPaths[selectedModpack];

    console.log(modpackPaths);  
    const runCommand = `${modpackPaths[selectedModpack]}`;

    if (!modpackPath) {
        res.status(400).send('Invalid modpack selected');
        return;
    }

    const conn = new Client();
    conn.on('ready', function() {
        console.log('Client :: ready');

        if (action === 'start') {
            const runCommand = modpackPath;  // Use the path from modpackPaths
            conn.exec(runCommand, handleStreamResponse(res));
        } else if (action === 'stop') {
            const stopCommand = modpackPath.replace('start.bat', 'stop.bat');  // Assume stop.bat is in the same directory
            conn.exec(stopCommand, handleStreamResponse(res));
        }
    }).connect({
        host: 'nope',
        port: 22,
        username: 'nope',
        password: 'nope!'
    });

    function handleStreamResponse(res) {
        return function(err, stream) {
            if (err) {
                console.error('Error:', err);
                res.status(500).send(err.message);
                return;  // Exit early on error
            }
            // ... rest of your code to handle stream responses ...
            res.send('Server managed successfully.');
            console.log(res)
        }
    }

    conn.on('ready', function() {
        console.log('SSH Connection established successfully.');
        
    });

    // Handle connection errors
    conn.on('error', function(err) {
        console.error('Connection error:', err);
        res.status(500).send(err.message);
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
