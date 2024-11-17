document.getElementById('sendBtn').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');
    const chatBox = document.querySelector('.chat-box');
    
    let message = messageInput.value.trim();

    if (message === '') {
        return; // Não faz nada se a mensagem estiver vazia
    }

    // Criar a mensagem do usuário
    let userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    userMessage.textContent = message;

    // Adicionar a mensagem na área de mensagens
    messagesContainer.appendChild(userMessage);

    // Limpar a área de entrada
    messageInput.value = '';

    // Rolagem automática para a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;

    // Gerar uma resposta automática do bot após 1 segundo
    setTimeout(function() {
        let botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot');
        botMessage.textContent = "Resposta automática: " + message; // Exemplo simples de resposta

        messagesContainer.appendChild(botMessage);
        
        // Rolagem automática para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000); // Resposta do bot após 1 segundo
});

// Adicionando evento de tecla Enter para enviar mensagem
document.getElementById('messageInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('sendBtn').click();
    }
});
