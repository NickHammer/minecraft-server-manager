function manageServer(action) {
    const selectedModpack = document.getElementById('modpack-dropdown').value;

    fetch('http://localhost:3000/manageServer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action: action, selectedModpack: selectedModpack })
    })
    .then(response => {
        if (!response.ok) {
            return Promise.reject('Failed to manage server.');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}
