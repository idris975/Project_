// let value = window;
// console.log(value);

// // Buttonns
// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear = document.querySelector("#clear");

// // Inputs

// const addkey = document.querySelector("#addkey");

// const addvalue = document.querySelector("#addvalue");

// const deletekey = document.querySelector("#deletekey");

// add.addEventListener("click", addItem);
// del.addEventListener("click", delItem);
// clear.addEventListener("click", clearItems);

// function addItem(e){
//     sessionStorage.setItem(addkey.value , addvalue.value);
// }
// function delItem(e){
//     sessionStorage.removeItem(deletekey.value);
// }
// function clearItems(e){
//     sessionStorage.clear();
// 


// Local Storage == QALDI


// const todo = document.getElementById("todo-form");
// const form = document.getElementById("todo");

// todo.addEventListener("submit", toadd);

// function toadd(e){
//     const value = form.value;

//     let todos;
    
//     if(localStorage.getItem("todos") === null) {
//         todos = [];
//     }
//     else{
//         todos = localStorage.getItem("todos");

//     }

//     todos.push(value);

//     localStorage.setItem("todos", JSON.stringify(todos));


//     e.preventDefault();




// }


/// Todo elave etmek arayuze
 

const TodoInput = document.querySelector("#todo");
const form = document.querySelector("#todo-form");
const todolist = document.querySelector(".list-group");
const firstCardBody = document.querySelector(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];
const filter = document.querySelector("#filter");
const clearItems = document.querySelector("#clear-todos");


eventListeners();

function eventListeners(e){
    form.addEventListener("submit",addtodo);

}

function addtodo(e){
    const newtodo = TodoInput.value.trim();
    console.log(newtodo);








    e.preventDefault();

}



















