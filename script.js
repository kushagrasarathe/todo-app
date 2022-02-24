// Let's think of the variables that we are going to need 

const input = document.querySelector("input");

const btn = document.querySelector("button");

const todoList = document.querySelector(".todo-list");

const clear = document.querySelector(".clear");

const addTask = (e) => {
    e.preventDefault();
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    if(input.value !== "") { // If it is'nt empty
        newLi.textContent = input.value;
        newLi.appendChild(delBtn); // append means add
        todoList.appendChild(newLi);
        input.value = "";
    }
    else {
        alert("Please enter a task")
    }
    // delete function
    delBtn.addEventListener("click" , function() {
        const del = confirm("Are you sure you want to delete this task!!!");

        if(del == true) {
            const parent = this.parentNode;
            parent.remove();
        }
    })
}

btn.addEventListener("click" , addTask);
clear.addEventListener("click" , () => {
    todoList.innerHTML = "";
});


// variables needed to build this

// getting user input
const user_input = document.getElementById("search");

// adding keyup eventlistner to user_input
user_input.addEventListener("keyup", search);

// declaring a search function 
function search() {

    const userInputValue = user_input.value;
    const menu_list = document.getElementsByTagName("li");

    for (let i = 0; i < menu_list.length; i++) {

        if (menu_list[i].innerHTML.toLowerCase().includes(userInputValue)) {
            menu_list[i].style.display = "";
            
        } else {
            menu_list[i].style.display = "none";
        }
    }
};



