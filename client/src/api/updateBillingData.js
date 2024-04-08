const API_URL = `http://localhost:3000/`

export default (dt) => {
    return fetch(`${API_URL}/update_data`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({text: dt.text, completed: dt.completed})
    })
        .then(response => response.json())
}