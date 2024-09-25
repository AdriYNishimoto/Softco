const clientId = Math.random().toString(36).substr(2, 9);
const socket = new WebSocket("ws://localhost:8080");

const chatInput = document.querySelector('.chat-input');
const chatBtn = document.querySelector('.chat-btn');
const messageContainer = document.querySelector('.message-container');

// Função para enviar a mensagem
function sendMessage() {
    const message = chatInput.value;
    if (message.trim() !== "") {
        const data = {
            id: clientId,
            message: message
        };
        socket.send(message); // Envia a mensagem diretamente
        addMessageToUI(message, "sent");
        chatInput.value = '';
    }
}

// Enviar mensagem quando o botão é clicado
chatBtn.addEventListener('click', sendMessage);

// Enviar mensagem ao pressionar a tecla Enter
chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o comportamento padrão do Enter (como pular linha)
        sendMessage(); // Chama a função de envio
    }
});

// Recebendo mensagens do WebSocket
socket.addEventListener('message', (event) => {
    const receivedMessage = event.data; // O dado recebido é uma string
    addMessageToUI(receivedMessage, "received");
});

// Função para adicionar mensagem à interface do usuário
function addMessageToUI(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Rolar para a última mensagem
}
