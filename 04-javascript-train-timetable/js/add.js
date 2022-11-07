import  { v4 as uuidv4 } from 'uuid';
import { DATABASE_URL } from '../utils/urls'

let addForm = document.querySelector("#addForm");
let trainFrom = document.querySelector("#trainFrom");
let trainTo = document.querySelector("#trainTo");
let trainDate = document.querySelector("#trainDate");
let trainIsPremium = document.querySelector("#trainIsPremium");

addTrain = (event) => {
    event.preventDefault();
    let train = 
        {
            "id": uuidv4(),
            "from": trainFrom.value,
            "to": trainTo.value,
            "date": trainDate.value,
            "isPremium": trainIsPremium.value
          }
    console.log(train);

    fetch(DATABASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': "application/json"
    },
    body: JSON.stringify(train)
  }).then(() => {
    window.location.href = 'index.html';
  })

   
}

addForm.addEventListener('submit', addTrain);

// Zeby za pomoca JS przejsc do strony index.html po wcisnieciu guzika "Dodaj", potrzebujemy uzyc metody

// window.location.href = 'index.html';