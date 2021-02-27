var testElement = document.getElementsByTagName("body")[0];
// AllEventListeners();
// function AllEventListeners(){
    testElement.addEventListener("click",function(e){
        Tetikle();
    });
    
//}

function Tetikle(e){
    console.log("Tetiklendi");
}