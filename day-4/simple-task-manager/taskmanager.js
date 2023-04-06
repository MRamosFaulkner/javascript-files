

let taskManager = (function() {
    let tasks = [];

    function addTask(tasksToDo) {
        tasks.push(tasksToDo);
    }

    function displayTasks() {
        console.log("Tasks To Be Done: ");
        tasks.forEach(tasks => console.log(tasks));
    }
        
    return {
        addTask,
        displayTasks
    };    
    
})();

taskManager.addTask('Go Grocery Shopping');
taskManager.addTask('Do Laundry');
taskManager.addTask('Clean the House');
 
taskManager.displayTasks();

