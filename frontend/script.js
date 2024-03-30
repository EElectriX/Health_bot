document.addEventListener("DOMContentLoaded", function() {
    var userInput = document.getElementById("user-input");
    userInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    });
  });
  var firstMessageSent = false;
  function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim();;
    var chatBox = document.getElementById("chat-box");
    // Clear the default message when the user sends their first message
    if (!firstMessageSent) {
      chatBox.innerHTML = "";
      firstMessageSent = true;
    }
    if (userInput !== "") {
      var chatBox = document.getElementById("chat-box");
      chatBox.innerHTML += "<p>You: " + userInput + "</p>";
      document.getElementById("user-input").value = "";
    }
  }
  function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    var darkModeIcon = document.getElementById("dark-mode-icon");
    if (body.classList.contains("dark-mode")) {
      darkModeIcon.src = "light-mode-icon.png";
      darkModeIcon.alt = "Dark Mode";
    } else {
      darkModeIcon.src = "dark-mode-icon.png ";
      darkModeIcon.alt = "Light Mode";
    }
  }
  function clearMessages() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '';
  }

  
  
  
  
