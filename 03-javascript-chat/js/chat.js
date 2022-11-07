const messageInput = document.querySelector("#message-input");
const nameInput = document.querySelector("#name-input");
const sendButton = document.querySelector("#send_message-button");
const messagesList = document.querySelector("#messages-list");

let messages = JSON.parse(localStorage.getItem('messages'));

if(messages === null){
    messages = [];
} else {
    messages.forEach(message => {
        messagesList.innerHTML += 
        `<li>
         <b><i>${message.author}:</i></b>
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
            <b><i>${author}:</i></b>
             ${message}
             </li>` 
        nameInput.value='';
        messageInput.value=''; 

    }
}

sendButton.addEventListener('click', sendMessage); 