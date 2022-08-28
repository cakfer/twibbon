const main = document.getElementById('app');

const externalHTML = `<img src='1' onerror='alert("Error loading image")'>`;
// shows the alert
app.innerHTML = externalHTML;
