

// let listOfToDos = (function() {
//     let tasks = ["Go Grocery Shopping", "Do Laundry", "Clean the House"];

//     function addTask(tasksToDo) {
//         tasks.push(tasksToDo);
//     }

//     function displayTasks() {
//         console.log("Tasks To Be Done: ");
//         tasks.forEach(tasks => console.log(tasks));
//     }

const task = document.querySelector('ul');
const taskItems = list.children;
const inputBox = document.getElementById('inputTask');
const itemForm = document.getElementById('addItem');

function addTask() {
    if(inputBox.value != "") {
        let newTask = document.createElement('li');
        newTask.innerText = inputBox.value;
        task.appendChild(newTask);
        inputBox.value = "";
    } else {
        window.alert("Please enter task into the text box.");
        inputBox.focus();
    }
}

task.addEventListener('click', function(e){
    var taskItem = e.target;
    taskItem.style.cssText += "text-decoration: line-through;";
    setTimeout(function(){
        taskItem.remove();
    }, 1000);
});

itemForm.addEventListener('submit', function(e) {
    e.preventDefault();
    return false;
});