// var idris = null;
// console.log(idris);

// let array = ["name1", 123, true, 23.5,  {name: "Idris", age: 24, salary: 1500}];
// let stringArray = ["name1", "name2", "name3"];
// let numberArray = [1, 2, 56, 100, 35];

// let deyerTipleri = [
//     true, false,
//     12, 12.5,
//     123451324515123532514315431
// ]

// let referansTipler = [
//     {name: "Idris", age: 24, salary: 1500},

//     [{object2: "secondObject"}],
//     Object, Boolean
// ]

// let anyObject = {
//     name: "Idris",
//     age: 24,
//     salary: 1500,
//     specification: {
//         height: 175,
//         weight: "65kg",
//         connectionProperty: {
//             adress: {
//                 city: "Nakhchivan",
//                 street: "V. Qasimov"
//             },
//             phoneNumber: "+994 60 311 19 96"
//         }
//     }
// }

// console.log(anyObject);

// console.log(anyObject.specification.connectionProperty);

// let fibonaci = [0, 1, 1, 2, 3, 5, 8, 13]


// let birinciDeyisen = 0;
// let ikinciDeyisen = 1;
// let ucuncuDeyisen;

//  let result = ""+birinciDeyisen.toString()+", "+ikinciDeyisen.toString();
//  let myInterval = setInterval(turnRandom, 3000);

//  function turnRandom(){
//      console.log(Math.floor(Math.random()*10));
//  }

// function stopInterval(){
//     clearInterval(myInterval);
// }

// setTimeout(function() {
//     stopInterval();
// },7000);
// let futbolcular = ["Messi: index = 0", "Ronaldo: index = 1", "Rooney: index = 2", "Buffon: index = 3", "Ronaldinho: index = 4", "Robben: index = 5", "Resad Sadigov: index = 6","Efran Ismayilov: index = 7", "Di Maria: index = 8", "Neymar: index = 9", "Neuer: index = 10"];

// let karmaOyuncular = [];

// for(let i=0; i<6; i++){
//     AddNewArrayANDRemoveFromArray(karmaOyuncular,futbolcular);
// }

// function AddNewArrayANDRemoveFromArray(addableMassiv, removeableMassiv){

//     let rastgeleIndex = Math.floor(Math.random() * removeableMassiv.length );

//     addableMassiv.push(removeableMassiv[rastgeleIndex]);

//     removeableMassiv.splice(rastgeleIndex,1);
// }

// console.log(karmaOyuncular);

// for (let i = 1; i <= 7; i++) {
//     ucuncuDeyisen = birinciDeyisen+ikinciDeyisen;
//     birinciDeyisen = ikinciDeyisen;
//     ikinciDeyisen = ucuncuDeyisen;
//     result+=", "+ucuncuDeyisen.toString();
// }

// console.log(result);

// let birinciIl = 10;
// let ikinciIl = 20;
// let novbetil;
// for (let index = 0; index < 5; index++) {
//     index = novbetil[index];
    
// }
// function(novbetil){
//     birinciIl = 10;
//     ikinciIl = birinciIl + birinciIl * 2;
//     novbetil = 
// }



// // let donecekData = {
// //     toplanan1ci: {
// //         value: 0,
// //         index: 0
// //     },
// //     toplanan2ci: {
// //         value: 0,
// //         index: 0
// //     },
// //     cem: 0
// // }

// function MassivinIcindenSil(massiv, index){
//     massiv.splice(index,1);
// }

// function MassivleriRasgeleTopla(birinciMassiv, ikinciMassiv){
//     let rastgele1ciIndex = Math.floor(Math.random() * birinciMassiv.length);
//     let rastgele2ciIndex = Math.floor(Math.random() * ikinciMassiv.length);

//     let donecekData = {
//         toplanan1ci: {
//             value: birinciMassiv[rastgele1ciIndex],
//             index: rastgele1ciIndex
//         },
//         toplanan2ci: {
//             value: ikinciMassiv[rastgele2ciIndex],
//             index: rastgele2ciIndex
//         },
//         cem: birinciMassiv[rastgele1ciIndex]+ikinciMassiv[rastgele2ciIndex]
//     }

//     MassivinIcindenSil(birinciMassiv, rastgele1ciIndex);
//     MassivinIcindenSil(ikinciMassiv, rastgele2ciIndex);

//     return donecekData;
// }

// let toplanan1 = [12,435,23,345,111];
// let toplanan2 = [65,756,7,36,327];
// let test = [77, 768, 19, 48, 339]

// let cemObyektMassivi = [];

// for (let index = 0; index < 5; index++) {
    
//     cemObyektMassivi.push(MassivleriRasgeleTopla(toplanan1,toplanan2));
// }





// for(let i = 0; i<cemObyektMassivi.length; i++){
//     switch (cemObyektMassivi[i].cem) {
//         case 77:
//             console.log("Exception Found: Result is: "+cemObyektMassivi[i].cem);
//             break;
//         case 768:
//                 console.log("Exception Found: Result is: "+cemObyektMassivi[i].cem);
//             break;
//         case 19:
//             console.log("Exception Found: Result is: "+cemObyektMassivi[i].cem);
//             break;
//         case 48:
//             console.log("Exception Found: Result is: "+cemObyektMassivi[i].cem);
//             break;
//         case 339:
//             console.log("Exception Found: Result is: "+cemObyektMassivi[i].cem);
//             break;
//         default:
//             console.log(cemObyektMassivi[i]);
//             break;
//     }
// }

// for(let i=397; i<1686; i++){

//     switch (i%49) {
//         case 27:
//             console.log(`${i} ededi 49a bolundu ve qaliqda 27 alindi`);
//             break;
//         default:
//             break;
//     }

// }

// for(let i=1; i<=10; i++){
//     if (i%2==1) {
//         console.log(`${i}'ci emeliyyatda qaliqda 1 alindi`);
//     }else if(i%2==0){
//         console.log(`${i}'ci emeliyyatda qaliqda 0 alindi`);
//     }
// }

// let itemsMassiv = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

// let group = [];

// let itemsMassivLength = itemsMassiv.length;


//             if (itemsMassivLength%3==0) {
//                 let bolunmeSayi = itemsMassivLength/3;
//                 for (let i = 0; i < bolunmeSayi; i++) {
//                     let groupItemMassiv = [];
//                     for(let r = 0; r<3; r++){
//                         groupItemMassiv.push(itemsMassiv[0]);
//                         itemsMassiv.splice(0,1);
//                     }
//                     group.push(groupItemMassiv);
//                     for (let index = 0; index < 3; index++) {
//                         groupItemMassiv.splice(0,1);
//                     }
//                 }
//                 console.log(group);
//             }else if (itemsMassivLength%4==0) {
//                 let bolunmeSayi = itemsMassivLength/4;
//                 for (let i = 0; i < bolunmeSayi; i++) {
//                     let groupItemMassiv = [];
//                     for(let r = 0; r<4; r++){
//                         groupItemMassiv.push(itemsMassiv[0]);
//                         itemsMassiv.splice(0,1);
//                     }
//                     group.push(groupItemMassiv);
//                     for (let index = 0; index < 3; index++) {
//                         groupItemMassiv.splice(0,1);
//                     }
//                 }
//                 console.log(group);
//             }else if (itemsMassivLength%5==0) {
//                 let bolunmeSayi = itemsMassivLength/5;
//                 for (let i = 0; i < bolunmeSayi; i++) {
//                     let groupItemMassiv = [];
//                     for(let r = 0; r<5; r++){
//                         groupItemMassiv.push(itemsMassiv[0]);
//                         itemsMassiv.splice(0,1);
//                     }
//                     group.push(groupItemMassiv);
//                     for (let index = 0; index < 3; index++) {
//                         groupItemMassiv.splice(0,1);
//                     }
//                 }
//                 console.log(group);
//             }


//yasi 23-den yuxari ve asgari ucret



let employeers = [];

function ClearEmployeer(EmployeerObject){
    EmployeerObject.name = undefined;
    EmployeerObject.age = undefined;
    EmployeerObject.salary = undefined;
}

function SetEmployeer(name, age, salary){

    let Employeer = {
        name: undefined,
        age: undefined,
        salary: undefined
    }

    Employeer.name = name;
    Employeer.age = age;
    Employeer.salary = salary;
    employeers.push(Employeer);
    // ClearEmployeer(Employeer);
}






            