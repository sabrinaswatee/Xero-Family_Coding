console.log("hello")

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const result = document.getElementById("result");

addBtn.addEventListener("click", function(){
    result.textContent = "Sum: " + (Number(num1.value) + Number(num2.value));
});

multiplyBtn.addEventListener("click", function(){
    result.textContent = "Product: " + (Number(num1.value) * Number(num2.value));
});

