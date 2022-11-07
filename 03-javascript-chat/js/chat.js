const messageInput = document.querySelector("#messageInput");
const nameInput = document.querySelector("#nameInput");
const sendButton = document.querySelector("#sendMessageButton");
const messagesList = document.querySelector("#messagesList");

let messages = JSON.parse(localStorage.getItem('messages'));

if(messages === null){
    messages = [];
} else {
    messages.forEach(message => {
        messagesList.innerHTML += 
        `<li>
        <strong>${message.author}:</strong>
          ${message.message}
         </li>`    
        
    })
}

const sendMessage = (event) => {
    event.preventDefault();
    let message = messageInput.value;
    let author = nameInput.value;

    if(message.length > 0 && author.length > 0){
        let json = { };
        json['author'] = author;
        json['message'] = message;
        // console.log(json);
        messages.push(json);
        // console.log(json);
        localStorage.setItem('messages', JSON.stringify(messages));
        messagesList.innerHTML += `<li>  
            <strong>${author}:</strong>
             ${message}
             </li>` 
        nameInput.value='';
        messageInput.value=''; 

    }
}

sendButton.addEventListener('click', sendMessage); 