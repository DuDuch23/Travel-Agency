function exemple1(){
    var x = 5;

    var myBoolean = (x === 5);

    console.log(myBoolean);
    // est égal à true
}
exemple1();

function exemple2(){
    var x = 5;

    var myBoolean = (x === "5");

    console.log(myBoolean);
    // est égal à false
}
exemple2();

function exemple3(){
    var x = 5;

    var myBoolean = (x === "5");

    console.log(myBoolean);
    // est égal à false
}
exemple3();

function exemple4(){
    var x = 5;

    var myBoolean = (x == "5");

    console.log(myBoolean);
    // est égal à true
}
exemple4();

function exemple5(){
    var x = 12;

    var myBoolean = (x > 12); // ou x < 12, return false ou x >= 12 return true ou x <= 12 return true

    console.log(myBoolean);
    // est égal à false
}
exemple5();

function exemple6(){
    var x = 5;
    var y = 12;

    var myBoolean = (x > 3 && y < 15); // il faut que les 2 conditions soient vrai pour return true, si une est fausse return false

    console.log(myBoolean);
    // est égal à true
}
exemple6();

function exemple7(){
    var x = 5;
    var y = 12;

    var myBoolean = (x > 3 || y < 10); // il faut qu'au moins une condition soient vrai pour return true, si une est fausse return quand même true

    console.log(myBoolean);
    // est égal à true
}
exemple7();

// Certaines .. 

console.log("-------------");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("-------------");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("-------------");
console.log(!true);
console.log(!false);
console.log("-------------");

/* Conditions */

function exemple8(){
    var speed = 70;

    if(speed < 80){
        console.log("Tu roules à la bonne vitesse");
    }
    else if(speed < 100){
        console.log("Il faut ralentir")
    }  
    else{
        console.log("Tu roules beaucoup trop vite")
    }
}
exemple8();

function exemple9(){
    var speed = 70;

    if(speed < 80){
        if(speed < 50){
            console.log("Accélère un petit peu");
        }
        else{
            console.log("Tu roules à la bonne vitesse");
        }
    }
    else if(speed < 100){
        console.log("Il faut ralentir")
    }  
    else{
        console.log("Tu roules beaucoup trop vite")
    }
}
exemple9();

function exemple10(){
    var favoriteColor = "jaune";

    switch(favoriteColor){
        case "jaune":
        case "bleu":
            console.log("la couleur est bleu et jaune");
            break;
        case "orange":
            console.log("la couleur est orange");
            break;
        case "rouge":
            console.log("la couleur est rouge");
            break;
        default:
            console.log("Je ne connais pas ta couleur");
    }
}
exemple10();

function exemple11(){
    var number = 0;

    do{
        console.log(number)
        number++;
    }
    while(number > 0 && number < 3)
}
exemple11();

function exemple12(){
    for(var number = 0; number < 5; number++){
        console.log(number);
    }
}
exemple12();

/* Fonction */

function fonctionMultiply(){
    function multiply(number1, number2, number3){
        return number1 * number2 * number3;
    }

    var a = 5;
    var b = 6;

    var result = multiply(a, b, a);

    console.log(result);
}
fonctionMultiply();

function fonctionResultMultiply(){
    function fonctionReturnResultMultiply(number1, number2, number3){
        resultMultiply = number1 * number2 * number3;
        return resultMultiply * 2;
    }

    var a = 8;
    var b = 6;

    var result = fonctionReturnResultMultiply(a, b, a);

    console.log(resultMultiply);
}
fonctionResultMultiply();

/* Tableaux */

function array1(){
    var fruits = ["ananas", "pomme", "poire", "orange", "citron", "banane"];
    console.log(fruits);
    console.log(fruits[0])
    console.log(fruits.length);
}
array1();

function afficheToutLesFruits(){
    var fruits = ["ananas", "pomme", "poire", "orange", "citron", "banane"];

    for(var i = 0; i < fruits.length; i++){
        console.log(fruits[i]);
    }
}
afficheToutLesFruits();

function addElement(){
    var fruits = ["ananas", "pomme", "poire", "orange", "citron", "banane"];

    console.log(fruits);
    fruits.push("Kiwi");
    console.log(fruits);
}
addElement();

function delLastElement(){
    var fruits = ["ananas", "pomme", "poire", "orange", "citron", "banane"];

    console.log(fruits);
    fruits.pop();
    console.log(fruits);
}
delLastElement();

function sliceElement(){
    var fruits = ["ananas", "pomme", "poire", "orange", "citron", "banane"];

    var agrumes = fruits.slice(2, 4)
    console.log(agrumes);
}
sliceElement();

function allTypeArray(){
    var myArray = [["ananas", 14, "poire", true, "citron", 13.87], [0, 5, "John", false], [5.25, "Non", "citron", true]];

    console.log(myArray[1][1]);
}
allTypeArray();

/* Objets */

function objets(){
    var chien = {
        name: "doggos",
        color: "black",
        age: 8,
    };

    for(var property in chien){
        console.log(chien[property]);
    }
    console.log("Le nom est " + chien["name"] + " et est de couleur " + chien["color"]);
}
objets();

function newObject(){
    var chien = new Object();
    chien.name = "doggos";
    chien.color = "white";
    chien.age = 5;

    for(var property in chien){
        console.log(chien[property]);
    }
    console.log("Le nom est " + chien["name"] + " et est de couleur " + chien["color"]);
}
newObject();

function newObjectMethod(){
    var chien = new Object();
    chien.name = "evan";
    chien.color = "white";
    chien.age = 5;
    chien.aboie = function(number){
        while(number > 0){
            console.log(number.toString() + " waf");
            number--;
        }
    };

    console.log("Le nom est " + chien["name"] + " et est de couleur " + chien["color"]);
    chien.aboie(4);
}
newObjectMethod();

function newObjectConstructeur(){
    function Dog(name, color, age){
        this.name = name;
        this.color = color;
        this.age = age;
        this.aboie = function(){console.log("waf " + this.name);}
    }

    var caniche = new Dog("theo", "white", 5);
    var pitbull = new Dog("Rex", "black", 8);

    caniche.aboie();
    pitbull.aboie();

    // console.log(caniche, pitbull);
}
newObjectConstructeur();