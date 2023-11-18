let num1 =  document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

function add(){
    result.innerText = Number(num1.value) + Number(num2.value);
}

function sub(){
    result.innerText = Number(num1.value) - Number(num2.value);
}

function multiply(){
    result.innerText = Number(num1.value) * Number(num2.value);

}

function divide(){
    result.innerText = (Number(num1.value) / Number(num2.value)).toFixed(2);
}
