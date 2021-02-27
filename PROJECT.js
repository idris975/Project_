// select icon and delete div
const element = document.getElementById("getOff");
eventlistener();
function eventlistener(){
    element.addEventListener("click",run);
    

}

function run(e){
    if(e.target.className === "fas fa-times"){
        e.target.parentElement.parentElement.remove();
    }
}
// Show setting
let cog = document.querySelector(".fixedSetting");
let showcreate = document.querySelector(".showCreativeDiv");

cog.addEventListener("click",create);

function create(){
    
        showcreate.style.display = "block";
        showcreate.style.zIndex = "1";
        showcreate.style.padding = "5px";
        showcreate.style.margin = "5px";
}

// remove create div
let rem = document.querySelector(".showCreativeDiv");
let remm = document.querySelector(".fas fa-times-circle");
rem.addEventListener("click",remove);



function remove(e){
    if(e.target.className === "fas fa-times-circle"){
        e.target.parentElement.parentElement.remove();
    }
    else{
        return;
    }
}

// Search button Input
const linkA = document.querySelector(".fas.fa-search");
const i = document.querySelector(".fas.fa-times");
const li = document.querySelector(".nav-item.dropdown");
const clas = document.querySelector(".clas");
const liLast = li[li.length-1];
linkA.addEventListener("click",creativ);
function creativ(e){
    clas.style.display = "block";
    
    // para.style.width = "100px";
    // para.style.height = "50px";
    // para.style.zIndex = "1";
    // para.style.backgroundColor = "black";
    
    // if(e.target.className === "fas.fa-search"){
    //     let icon = document.createElement("i");
    //     icon.style.className = "fas.fa-times";
    //     liLast.appendChild(icon);
    //     liLast.replaceChild(icon,linkA.firstElementChild);

    // }
}