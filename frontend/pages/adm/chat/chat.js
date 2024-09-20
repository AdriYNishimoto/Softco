// Gera um ID único para o cliente
const clientId = Math.random().toString(36).substr(2, 9);

// Conectando ao WebSocket
const socket = new WebSocket("ws://localhost:8080");

const chatInput = document.querySelector('.chat-input');
const chatBtn = document.querySelector('.chat-btn');
const messageContainer = document.querySelector('.message-container');

// Enviando mensagem quando o botão é clicado
chatBtn.addEventListener('click', () => {
    const message = chatInput.value;
    if (message.trim() !== "") {
        const data = {
            id: clientId,
            message: message
        };
        socket.send(JSON.stringify(data)); // Envia a mensagem com o ID
        addMessageToUI(message, "sent"); // Adiciona à interface como mensagem enviada
        chatInput.value = '';
    }
});

// Recebendo mensagens do WebSocket
socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    const receivedMessage = data.message;

    // Se a mensagem não for do próprio cliente, mostre como "received"
    if (data.id !== clientId) {
        addMessageToUI(receivedMessage, "received");
    }
});

// Função para adicionar mensagem à interface do usuário
function addMessageToUI(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Rolar para a última mensagem
}