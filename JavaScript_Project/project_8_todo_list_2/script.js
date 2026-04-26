console.log("Hello World");

const task = document.getElementById("inputTask");
const addBtn = document.getElementById('btnAdd');
const edit = document.getElementsByClassName("edit");
const remove = document.getElementsByClassName("remove");

function getUpdate() {
    console.log("updating...");
    let todo = task.value;

    if (todo.trim() === "") return;

    let itemJsonArray = [];
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray.push(todo);
    } else {
        itemJsonArray = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArray);
        itemJsonArray.push(todo)
    }

    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    task.value = '';
    update();
}

function update() {
    let itemJsonArray = [];

    if (localStorage.getItem('itemJson') == null) {
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    } else {
        let itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    let todoBody = document.getElementsByClassName('foot')[0];
    let str = '';
    itemJsonArray.forEach((element, index) => {
        str += `<div class="list">
                        <div class="textPart">
                            <span id="todo">${element}</span>
                        </div>
                        <div class="btn">
                            <button class="btnList edit" data-index="${index}">Edit</button>
                            <button class="btnList remove" data-index="${index}">Remove</button>
                        </div>
                    </div>`;
    });
    todoBody.innerHTML = str;
}

addBtn.addEventListener('click', getUpdate);

document.querySelector('.foot').addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
        let index = e.target.getAttribute('data-index');
        let itemJsonArray = JSON.parse(localStorage.getItem('itemJson'));
        itemJsonArray.splice(index, 1);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
        update();
    } else if (e.target.classList.contains('edit')) {
        let index = e.target.getAttribute('data-index');
        let itemJsonArray = JSON.parse(localStorage.getItem('itemJson'));
        let updatedTask = prompt("Edit task:", itemJsonArray[index]);
        if (updatedTask !== null && updatedTask.trim() !== "") {
            itemJsonArray[index] = updatedTask;
            localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
            update();
        }
    }
})
update();

function clearStorage() {
    if (confirm("Do you want really want to clear the list")) {
        console.log('Clearing the storage');
        localStorage.clear();
        update();
    }
}