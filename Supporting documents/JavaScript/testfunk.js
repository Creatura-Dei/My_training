function f1(a, b, c) {

}


function sum() {
    const x = 5;
    const y = 6;
    console.log(x + y);
}


sum();

let x = 5;
let y = 6;
function sum2() {
    console.log(x + y);
}

sum2(); 

// аргументы


// формальные аргументы
function sum3(x1, y1) {
    console.log(x1 * y1);
}

// фактический аргумент 
sum3(44, 11);
sum3(100, 200);

let z = 10;
sum3(z, 10);
sum3(z, z/2);



sum3(2,3,4,5,6); //5

sum3(6); //NaN 


// МОЖНО ЗАДАТЬ ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ: 
function sum3(x1 = 0, y1 = 100) {
    console.log(x1 + y1);
}
 

function showSum(elem, x, y) {
    document.querySelector(elem).textContent = x + y; 
}

function showSum2(elem, x, y) {
    elem.textContent = x + y;
}



showSum('.out-2', 5, 6);

const out1 = document.querySelector('.out-1');
showSum2(out1, 70, 6);


function showSum3(elem = '.out-1', x, y) {
    document.querySelector(elem).textContent = x + y; 
}

showSum3('.out-2', 10, 10);
