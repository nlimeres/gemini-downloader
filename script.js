javascript:(function() {
    let chatText = '';
    let chatContainers = document.querySelectorAll('user-message, model-message, [class*="message-content"]');
    
    if (chatContainers.length > 0) {
        chatContainers.forEach(container => {
            let text = container.innerText.trim();
            if (text) {
                chatText += text + '\n\n-----------------------------------\n\n';
            }
        });
    } else {
        chatText = document.body.innerText;
    }

    if (chatText.trim() === '') {
        alert('There is no chat content to export.');
        return;
    }

    let blob = new Blob([chatText], { type: 'text/plain;charset=utf-8' });
    let a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    
    let dateObj = new Date();
    let dateStr = dateObj.toISOString().slice(0, 10);
    a.download = 'Gemini_Conversation_' + dateStr + '.txt';
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
})();