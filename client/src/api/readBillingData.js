const API_URL = `http://localhost:5173/`

export default () => {
    return fetch(`${API_URL}/billingsystem`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
}