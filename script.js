const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

chatForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const message = userInput.value.trim();

  if (!message) {
    return;
  }

  addMessage(message, "user");
  userInput.value = "";

  showTypingIndicator();

  setTimeout(function () {
    removeTypingIndicator();

    const botReply = getBotResponse(message);
    addMessage(botReply, "bot");
  }, 700);
});

function addMessage(text, sender) {
  const messageElement = document.createElement("div");

  messageElement.classList.add("message");

  if (sender === "user") {
    messageElement.classList.add("user-message");
  } else {
    messageElement.classList.add("bot-message");
  }

  messageElement.textContent = text;
  chatMessages.appendChild(messageElement);

  scrollToBottom();
}

function showTypingIndicator() {
  const typingElement = document.createElement("div");

  typingElement.id = "typingIndicator";
  typingElement.classList.add(
    "message",
    "bot-message",
    "typing-message"
  );

  typingElement.textContent = "Bot is typing...";
  chatMessages.appendChild(typingElement);

  scrollToBottom();
}

function removeTypingIndicator() {
  const typingElement = document.getElementById("typingIndicator");

  if (typingElement) {
    typingElement.remove();
  }
}

function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase();

  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey")
  ) {
    return "Hello! How can I help you today?";
  }

  if (message.includes("how are you")) {
    return "I am doing great. Thank you for asking!";
  }

  if (
    message.includes("your name") ||
    message.includes("who are you")
  ) {
    return "I am your AI assistant chatbot.";
  }

  if (
    message.includes("help") ||
    message.includes("support")
  ) {
    return "Sure! Tell me what problem you are facing.";
  }

  if (
    message.includes("website") ||
    message.includes("web development")
  ) {
    return "I can help you with HTML, CSS, JavaScript, React, and website development.";
  }

  if (
    message.includes("price") ||
    message.includes("cost")
  ) {
    return "Please tell me which product or service price you want to know.";
  }

  if (
    message.includes("thank") ||
    message.includes("thanks")
  ) {
    return "You are welcome! 😊";
  }

  if (
    message.includes("bye") ||
    message.includes("goodbye")
  ) {
    return "Goodbye! Have a wonderful day.";
  }

  return "I am not sure about that yet. Please ask me another question.";
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

userInput.focus();