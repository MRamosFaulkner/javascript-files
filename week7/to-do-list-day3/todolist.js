

// let listOfToDos = (function() {
//     let tasks = ["Go Grocery Shopping", "Do Laundry", "Clean the House"];

//     function addTask(tasksToDo) {
//         tasks.push(tasksToDo);
//     }

//     function displayTasks() {
//         console.log("Tasks To Be Done: ");
//         tasks.forEach(tasks => console.log(tasks));
//     }

const list = document.querySelector('ul');
const listItems = list.children;
const inputBox = document.getElementById('inputTask');
const itemForm = document.getElementById('addItem');

function addTask() {
    if(inputBox.value != "") {
        let newTask = document.createElement('li');
        newTask.innerText = inputBox.value;
        list.appendChild(newTask);
        inputBox.value = "";
    } else {
        window.alert("Please enter task into the text box.");
        inputBox.focus();
    }
}

list.addEventListener('click', function(e){
    var listItem = e.target;
    listItem.style.cssText += "text-decoration: line-through;";
    setTimeout(function(){
        listItem.remove();
    }, 1000);
});

itemForm.addEventListener('submit', function(e) {
    e.preventDefault();
    return false;
});