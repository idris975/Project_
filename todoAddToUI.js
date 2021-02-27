// let inputKeyFromView = document.querySelector("#keyAddFilter");
// let inputValueFromView = document.querySelector("#valueAddFilter");

// let searchByName = document.querySelector("#delete-filter-key");

// let parentListItem = document.querySelector("#mainParentUl");

// let btnAdd = document.querySelector("#add-command");
// let btnDelete = document.querySelector("#del-command");
// let btnClearAll = document.querySelector("#clear-all-command");

// btnAdd.addEventListener("click",itemAdd);
// btnDelete.addEventListener("click",itemDelete);
// btnClearAll.addEventListener("click",clearAll);

// function showListItems(e){
//     let listFromBase = localStorage.getItem("allValues");

// }

// function itemAdd(e) {
//     let valueInputForAddKey = inputKeyFromView.value;
//     let valueInputForAddValue = inputValueFromView.value;

//     if(valueInputForAddKey!="" && valueInputForAddValue!=""){
        
//         let listItem = document.createElement("li");
//     listItem.setAttribute("class","listItemTodo");
//     listItem.setAttribute("id",valueInputForAddKey);
//     listItem.textContent = valueInputForAddValue;
//     parentListItem.appendChild(listItem);

//         if (parentListItem.childElementCount > 0) {


//             if(localStorage.getItem(valueInputForAddKey)===null){

//                 if(valueInputForAddValue.includes(",")){
//                     localStorage.setItem(valueInputForAddKey, JSON.stringify(valueInputForAddValue.split(","))); 
                    
//                 }
//                 else if(valueInputForAddValue.includes("/")){
//                     localStorage.setItem(valueInputForAddKey, JSON.stringify(valueInputForAddValue.split("/")));
//                 }
//                 else{
//                     localStorage.setItem(valueInputForAddKey,valueInputForAddValue);
//                 }
//             }
//             else{
//                 if(typeof localStorage.getItem(valueInputForAddKey) === "string"){
//                     let y = localStorage.getItem(valueInputForAddKey);
//                     y.push(valueInputForAddValue);
//                     localStorage.setItem(valueInputForAddKey, y);
//                 }
//                 else{
//                     let x = JSON.parse(localStorage.getItem(valueInputForAddKey));
//                     x.push(valueInputForAddValue);
//                     localStorage.setItem(valueInputForAddKey, JSON.stringify(x));
//                 }
                
//             }

//             clearAllInputs();
//             alert("Bele Salamatcilixdi?");
//         }else{
//             alert("Qaqa nese alinmadiye");
//         }
//     }else{
//         alert("Ae bisheyler yazdana");
//     }
// }

// function clearAllInputs(e) {
//     inputKeyFromView.value = "";
//     inputValueFromView.value = "";
//     searchByName.value = "";
// }

// function itemDelete(e) {
    
// }

// function clearAll(e) {
    
// }


// let a  = 5>12;
// alert(a);


// localStorage.setItem("todo",5);


// if(localStorage.getItem("asjs")=== null){
//     console.log("tapilmadi ay qaa");
// }
// else {
//     console.log("tapdin qaa")
// }

// // const todo = ["todo1", "todo2", "todo"];
// localStorage.setItem("Activity",JSON.stringify(todo));


// // Local Storage

// const todoInput = document.getElementById("todo");
// const todoForm = document.getElementById("todo-form");

// todoForm.addEventListener("submit", add);

// function add(e){

//     const value = todoInput.value;
//     let todos;

//     if(localStorage.getItem("todos")=== null){
//         todos = [];
//     }
//     else{
//         todos=JSON.parse(localStorage.getItem("todos"));
//     };

//     todos.push(value);

//     localStorage.setItem("todos", JSON.stringify(todos)); 





//     e.preventDefault() // bashqa sehifeye getmemesi ucun yazilir
// }





// Todo List Project
// Elementleri Secme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const filter = document.querySelector("#filter");
const cleartodos = document.querySelector("#clear-todos");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const listGroup = document.querySelector(".list-group");

eventlistener();
// Event Elave etmek;
function eventlistener(){ 
    form.addEventListener("submit",addtodo);
    document.addEventListener("DOMContentLoaded",AddToUIfromStorage); // Sehife yuklendikden sonra elementlerin yerinde qalmasi
    secondCardBody.addEventListener("click",DeleteTodoFromUI);
    filter.addEventListener("keyup",runFilter); // Elementleri axtarib tapma
    cleartodos.addEventListener("click",DeleteAllTodos);
}
function DeleteAllTodos(e){
    if(confirm("Silmek istediyinize eminsiz?")){
    while(listGroup.firstElementChild != null){
        listGroup.removeChild(listGroup.firstElementChild);
    } 
    localStorage.removeItem("todos");
}
}
function runFilter(e){
    // console.log(e.target.value)
    
    const filterValue = e.target.value.toLowerCase();
    // console.log(filterValue.target);
    const ListItems = document.querySelectorAll(".list-group-item");
    ListItems.forEach(function(listItem){
         const text = listItem.textContent.toLowerCase();
         if(text.indexOf(filterValue) === -1){
             // tapilmadi
             listItem.setAttribute("style","display: none !important");
            }
         else{
             listItem.setAttribute("style","display: block");
         }
    });
}
function DeleteTodoFromUI(e){ //UI-DAN SILME
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
       deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    }
}
function deleteTodoFromStorage(deletetodo){ // BIRDEFELIK SILME
    let todos = getTodofromStorage();
    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}
function AddToUIfromStorage(){// sehifemiz yenilenende elementlerin qalmasi
    let todos = getTodofromStorage();
    todos.forEach(function(todo){
        addtodotoUI(todo);
    })
}

function addtodo(e){
    const newtodo = todoInput.value.trim(); // trim() = input yazildiqdan sonra silinir;
    if(newtodo === ""){
        showAlert("danger","Bir todo yazilmalidir...");
    }
    else{
        addtodotoUI(newtodo);
        addTodotoStorage(newtodo);
        showAlert("success","duzgun elave olundu, Tebrik edirik...");
    }

    e.preventDefault();
}
function getTodofromStorage(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodotoStorage(newtodo){
    let todos = getTodofromStorage();
    todos.push(newtodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    console.log(alert);
    firstCardBody.appendChild(alert);
    
    setTimeout(function(){
        alert.remove();
    },1000);

}

function addtodotoUI(newtodo){
    // <li class="list-group-item d-flex justify-content-between">
    //                         Todo 2
    //                         <a href="#" class="delete-item">
    //                             <i class="fa fa-remove"></i>
    //                         </a>
    
    //                     </li>
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";

    // text node add

    listItem.appendChild(document.createTextNode(newtodo));
    listItem.appendChild(link);
    // textnode-a list item-i elave etme

    listGroup.appendChild(listItem);
    todoInput.value = ""; // YAZDIQDAN SONRA INPUT SILINIR...
}























