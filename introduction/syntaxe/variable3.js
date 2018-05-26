"use strict";
var globalVar = 12;
let varBlocGlobal="yoyo";
/* globalVar et globalVar2 sont dans le 
scope global (variable globale)  */
if(true) {
    var globalVar2 = 12;
    let varBlocIf="zozo";
    console.log(varBlocGlobal); // visible ici dans un bloc enfant
}
function fct1(){
    var var1F1="toto";
    if(true){
        var varDansIfFct1="roro"; 
        let varDansIfFct1_2="roro 2"; 
    }
    /* console.log(varBlocIf); 
     la variable varBlocIf définie avec let reste locale à son bloc */
    console.log(globalVar);
    console.log(globalVar2);
    console.log(varBlocGlobal); // visible ici dans un bloc enfant
    console.log(varDansIfFct1); 
    /* ça reste visible car le bloc if est local à la fonction */
   // console.log(varDansIfFct1_2);  
   //inconnu à ce niveau car définie avec let
   globalVar++;
}
function fct2(){
    console.log(globalVar);
    console.log(globalVar2);
    console.log(varBlocGlobal); // visible ici dans un bloc enfant
    //console.log(var1F1);  cette variable n'existe pas dans ce scope
}
console.log("----- fonction 1 ------------");
fct1();
console.log("----- fonction 2 ------------");
fct2();
