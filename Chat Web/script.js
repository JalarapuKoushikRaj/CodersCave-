document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('message-container');
    const usernameInput = document.getElementById('username-input');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    let username = '';

    const ws = new WebSocket('ws://localhost:3000');

    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        appendMessage(message);
    };

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            const data = {
                username: username,
                message: message,
                timestamp: new Date().toLocaleTimeString()
            };
            ws.send(JSON.stringify(data));
            messageInput.value = '';
        }
    });

    usernameInput.addEventListener('change', () => {
        username = usernameInput.value.trim();
    });

    function appendMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (message.username === username) {
            messageElement.classList.add('own-message');
        }
        messageElement.innerHTML = `
            <span class="username">${message.username}</span>
            <span class="timestamp">${message.timestamp}</span>
            <p class="text">${message.message}</p>
        `;
        messageContainer.appendChild(messageElement);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
});
