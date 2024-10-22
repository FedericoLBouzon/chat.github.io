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

    if (lowerCaseMessage.includes("hola") || lowerCaseMessage.includes("buenas") || lowerCaseMessage.includes("saludo")) {
        botResponse = "¡Hola! Soy tu asistente administrativo. 😊 Puedo ayudarte con información sobre horarios de trabajo, permisos, políticas de la empresa, y más. ¿En qué necesitas ayuda?";
    } else if (lowerCaseMessage.includes("horario")) {
        botResponse = "El horario de trabajo es de 9 AM a 6 PM de lunes a viernes.";
    } else if (lowerCaseMessage.includes("permisos")) {
        botResponse = "Puedes solicitar permisos enviando un correo a Recursos Humanos o a través del sistema interno.";
    } else if (lowerCaseMessage.includes("política")) {
        botResponse = "Puedes revisar las políticas de la empresa en el portal de empleados, sección 'Recursos Humanos'.";
    } else if (lowerCaseMessage.includes("contacto")) {
        botResponse = "Para contactar con otro empleado, consultar con el jefe de recursos humanos.";
    } else if (lowerCaseMessage.includes("vacaciones")) {
        botResponse = "Las solicitudes de vacaciones deben presentarse con al menos dos semanas de anticipación.";
    } else if (lowerCaseMessage.includes("salario") || lowerCaseMessage.includes("pago")) {
        botResponse = "Los salarios se pagan el último día hábil de cada mes. Para más información, consulta con el departamento de Recursos Humanos.";
    } else if (lowerCaseMessage.includes("seguro") || lowerCaseMessage.includes("cobertura médica")) {
        botResponse = "La empresa ofrece un seguro de salud que cubre consultas médicas, hospitalización y medicamentos. Para más detalles, revisa el manual del empleado.";
    } else if (lowerCaseMessage.includes("formación") || lowerCaseMessage.includes("capacitaciones")) {
        botResponse = "La empresa ofrece capacitaciones periódicas. Puedes consultar el calendario de formación en el portal de empleados.";
    } else if (lowerCaseMessage.includes("evaluación de desempeño") || lowerCaseMessage.includes("rendimiento")) {
        botResponse = "Las evaluaciones de desempeño se realizan semestralmente. Recibirás una notificación con los detalles cuando se acerque la fecha.";
    } else if (lowerCaseMessage.includes("reunión") || lowerCaseMessage.includes("agenda")) {
        botResponse = "Puedes reservar salas de reunión y consultar la agenda compartida a través del sistema de reservas de la empresa.";
    } else if (lowerCaseMessage.includes("uniforme") || lowerCaseMessage.includes("vestimenta")) {
        botResponse = "El código de vestimenta es formal de lunes a jueves, y casual los viernes.";
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
