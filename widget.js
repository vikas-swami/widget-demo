(function () {
    // Your widget logic here
    // For demonstration purposes, this script creates a widget and appends it to the body
    var widgetContainer = document.createElement("div");
    widgetContainer.id = "widget-container";
    
    var widgetMessage = document.createElement("p");
    widgetMessage.id = "widget-message";
    widgetMessage.textContent = "Hello, World!";
    
    widgetContainer.appendChild(widgetMessage);
    
    // Add styles
    widgetContainer.style.padding = "20px";
    widgetContainer.style.backgroundColor = "#fff";
    widgetContainer.style.border = "1px solid #ddd";
    widgetContainer.style.borderRadius = "5px";
    widgetContainer.style.margin = "20px";
    
    widgetMessage.style.fontSize = "18px";
    widgetMessage.style.color = "#333";
    
    document.body.appendChild(widgetContainer);
    
    // Your widget logic here (e.g., changing the message after a delay)
    setTimeout(function() {
        widgetMessage.textContent = "Widget loaded!";
    }, 3000);
})();