function sendMessage() {
    // Replace 'YOUR_BOT_TOKEN' with your actual Telegram bot token
    var botToken = '5412336519:AAH-HGiiJJ-AZE3D5FF9457pJACcT-jbqQg';
    
    // Replace 'CHAT_ID' with the ID of the channel or chat you want to send the message to
    var chatId = '373715044';

    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Construct the message text
    var messageText = 'Random number: ' + randomNumber;

    // Create a new HTTP request
    var xhr = new XMLHttpRequest();

    // Prepare the request
    xhr.open('POST', 'https://api.telegram.org/bot' + botToken + '/sendMessage', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up the request payload
    var payload = {
        chat_id: chatId,
        text: messageText
    };

    // Send the request
    xhr.send(JSON.stringify(payload));
}
