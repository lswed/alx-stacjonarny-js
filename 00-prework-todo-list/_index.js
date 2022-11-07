let ul;
let newTaskForm;
let clearTaskListForm;

let taskList = [];

//obiekt przegladarki
console.log(window);
//obiekt DOM - reprezentacja htmla w JS
console.log(document);

//CSS W SKRÓCIE
// div {
    // font-size: 16px;
    
// }

// .jakas-klasa {
    // font-size: 20px;
// } 

// #jakies-id {
//  font-size: 16px
// }

document.addEventListener('DOMContentLoaded', () => {

    ul = document.getElementById('todoList');
    newTaskForm = document.getElementById('newTaskForm');
    clearTaskListForm = document.getElementById('clearTaskListForm');

    for(let task of taskList){
        addListTask(task);
    }

    newTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTaskList(event.target.elements[0].value);
    })

    clearTaskListForm.addEventListener('submit', (event) => {
        clearTaskList();
    })
})

const handleClick = (event) => {
    event.preventDefault();
}

function addTaskList(task){
    let li = document.createElement('li');
    li.innerText = task;
    ul.appendChild(li);
}

function clearTaskList(){

}



