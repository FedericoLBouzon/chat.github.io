window.onload = function () {
    displayWelcomeMessage();
};

function displayWelcomeMessage() {
    const welcomeMessage = "Hola, soy tu asistente administrativo. Puedo ayudarte con información sobre horarios, permisos, contacto con empleados, y políticas de la empresa. ¿En qué puedo asistirte hoy?";
    addMessage(welcomeMessage, "bot-message");
}

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.trim();

    if (userMessage === "") return;

    addMessage(userMessage, "user-message");
    userInput.value = "";

    setTimeout(() => {
        addMessage("Escribiendo...", "bot-message", true);
        setTimeout(() => {
            removeTypingMessage();
            generateBotResponse(userMessage);
        }, 1000);
    }, 500);
}

function addMessage(text, className, isTyping = false) {
    const chatMessages = document.getElementById("chat-messages");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.textContent = text;

    if (isTyping) {
        messageElement.id = "typing-indicator";
    }

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingMessage() {
    const typingIndicator = document.getElementById("typing-indicator");
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function generateBotResponse(userMessage) {
    let botResponse;
    const lowerCaseMessage = userMessage.toLowerCase();

    // Saludo de bienvenida con el nombre de la empresa FNST
    if (lowerCaseMessage.includes("hola") || lowerCaseMessage.includes("buenas") || lowerCaseMessage.includes("saludo")) {
        botResponse = `
        ¡Hola! Bienvenido a FNST 😊. Soy tu asistente administrativo.
        Puedo ayudarte con información sobre los siguientes temas:
        - Horarios de trabajo
        - Solicitud de permisos
        - Contacto de empleados
        - Políticas de la empresa
        - Solicitud de vacaciones

        ¿En qué puedo asistirte hoy?`;
    } else if (lowerCaseMessage.includes("vacaciones")) {
        botResponse = "Las solicitudes de vacaciones deben presentarse con al menos dos semanas de anticipación.";
    } else if (lowerCaseMessage.includes("horario")) {
        botResponse = "El horario de trabajo es de 9 AM a 6 PM de lunes a viernes.";
    } else if (lowerCaseMessage.includes("permisos")) {
        botResponse = "Puedes solicitar permisos enviando un correo a Recursos Humanos o a través del sistema interno.";
    } else if (lowerCaseMessage.includes("contacto")) {
        botResponse = "Para contactar con otro empleado, por favor consulta el directorio interno.";
    } else if (lowerCaseMessage.includes("política")) {
        botResponse = "Puedes revisar las políticas de la empresa en el portal de empleados, sección 'Recursos Humanos'.";
    } else {
        botResponse = "Lamentablemente, aún no he sido programado para responder eso. ¿Podrías ser más específico o intentar con otra consulta?";
    }

    addMessage(botResponse, "bot-message");
}



function handleInput(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function clearChat() {
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = "";
    displayWelcomeMessage();
}
