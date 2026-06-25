function logger(message) {
    console.log(message);
}

function handleAddTask() {
    const inputText = document.getElementById("task-input");
    const taskName = inputText.value;
    logger('task name: ' + taskName);

    const statusArea = document.getElementById("status-message");
    statusArea.textContent = "task added: " + taskName;

    const todoCards = document.getElementById("todo-cards");

    const newCard = document.createElement('article');
    newCard.className = 'card';

    const newparagraph = document.createElement('p');
    newparagraph.textContent = taskName;

   newCard.appendChild(newparagraph); 
   todoCards.appendChild(newCard);
}

logger('did i load successfully?');

const addButton = document.getElementById("add-task-button");

addButton.addEventListener("click", function() {
    logger("am I clicked for sure?");
    handleAddTask();
 }) 

 

