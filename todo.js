const inputBox = document.querySelector('#input-box');
const taskList = document.querySelector('.task-list');

const btn = document.querySelector('#btn');

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // console.log(inputBox.value);
        taskList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

taskList.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
        saveData();
    }
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();

inputBox.addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
        addTask();
    }
})