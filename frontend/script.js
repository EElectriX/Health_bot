document.addEventListener("DOMContentLoaded", function() {
    var userInput = document.getElementById("user-input");
    userInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    });
  });
  function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += "<p>You: " + userInput + "</p>";
    document.getElementById("user-input").value = "";
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    var toggleButton = document.getElementById("toggle-button");
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.innerText = "Switch to Light Mode";
    } else {
      toggleButton.innerText = "Switch to Dark Mode";
    }
  }
  
  