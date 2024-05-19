function exemple1(){
    var name = "John";

    console.log(name);
}
exemple1();

function exemple2(){
    var x = 12;
    var y = 24.25

    console.log(x, y);
}
exemple2();

function exemple3(){
    var x = 12;
    var y = 24.25

    var xToString = x.toString();

    console.log(xToString);
}
exemple3();

function exemple4(){
    var name = "John";

    var nameLenght = name.length;

    console.log("exemple 4:" + " " + nameLenght);
}
exemple4();

function exemple5(){
    var xString = "12";

    var xNumber = parseInt(xString);

    console.log(xNumber);
}
exemple5();

function exemple6(){
    var xString = "12.56";

    var xNumber = parseFloat(xString);

    console.log(xNumber);
}
exemple6();

function exemple7(){
    var myString = "Hello John";

    var position = myString.indexOf("John");

    console.log(position);
}
exemple7();

function exemple8(){
    var myString = "Hello John";

    var myNewString = myString.replace("John", "tim");

    console.log(myNewString);
}
exemple8();

function exemple9(){
    var string1 = "Hello";

    var string2 = "John";

    var myNewString = string1 + " " + string2;

    console.log(myNewString);
}
exemple9();

function exemple10(){
    var x = 12;
    var y = 5;
    var result = x%y; // +, -, *, /, %

    console.log(result);
}
exemple10();

function exemple11(){
    var x = 12;
    var y = 5;
    var result = ++x; // --, ++

    console.log(result);
}
exemple11();

function exemple12(){
    var x = 12;
    var y = 5;
    x += y; // pareille que x = x + y
    // x-= y // pareille que x = x - y, avec *, /, %

    console.log(x);
}
exemple12();

function exemple13(){
    var string1 = "Hello";
    var string2 = "John";

    console.log(string1 + " " + string2);
}
exemple13();

// Faire un commentaire avec des //

// function exemple13(){
//     var string1 = "Hello";
//     var string2 = "John";

//     console.log(string1 + " " + string2);
// }
// exemple13();

/* ou avec ça*/