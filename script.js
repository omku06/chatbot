document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");
    const chatlogs = document.getElementById("chatlogs");

    // Event listener for the send button
    sendButton.addEventListener("click", () => {
        const userMessage = messageInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user-message");
            messageInput.value = "";
            botResponse(userMessage);
        }
    });

    // Event listener for Enter key press
    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendButton.click();
        }
    });

    // Function to add message to the chatbox
    function addMessage(message, senderClass) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(senderClass);
        messageDiv.textContent = message;
        chatlogs.appendChild(messageDiv);
        scrollToBottom(); // Scroll to bottom after adding a new message
    }

    // Function to scroll the chat to the bottom
    function scrollToBottom() {
        chatlogs.scrollTop = chatlogs.scrollHeight;
    }

    // Function to generate bot responses based on user input
    function botResponse(userMessage) {
        let response = "";
        const lowerCaseMessage = userMessage.toLowerCase();

        // Time Command
        if (lowerCaseMessage.includes("time")) {
            const currentTime = new Date().toLocaleTimeString();
            response = `The current time is ${currentTime}`;
        }
        // Weather Command (Simulated)
        else if (lowerCaseMessage.includes("weather")) {
            response = "It's a sunny day with clear skies. Stay hydrated!";
        }
        // Joke Command
        else if (lowerCaseMessage.includes("joke")) {
            const jokes = [
                "Why don't skeletons fight each other? They don't have the guts!",
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
                "What do you call fake spaghetti? An impasta!",
            ];
            response = jokes[Math.floor(Math.random() * jokes.length)];
        }
        // Reminder Command (Simulated)
        else if (lowerCaseMessage.includes("reminder")) {
            const reminder = userMessage.replace("reminder", "").trim();
            response = `Reminder set: ${reminder}`;
        }
        // Greeting Command
        else if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            response = "Hello! How can I assist you today?";
        }
        // Default Response
        else {
            response = "I'm not sure about that. Try asking about the time, weather, or say 'joke'!";
        }

        setTimeout(() => {
            addMessage(response, "bot-message");
        }, 1000);
    }
});
