var a = document.querySelector(".question .a");
var b = document.querySelector(".question .b");
var sum = document.querySelector(".question .sum");
var aPointer = document.querySelector(".solution .a-pointer");
var bPointer = document.querySelector(".solution .b-pointer");
var aInput = document.querySelector(".solution .a");
var bInput = document.querySelector(".solution .b");


function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

a.value = randomInteger(6, 9);
b.value = randomInteger(1, 5);

aPointer.style.width = (a.value * 39) + "px";

bPointer.style.width = (b.value * 39) + "px";
bPointer.style.left = parseInt(aPointer.style.width) + 36 + "px";


aPointer.classList.add("pointer-show");
aInput.focus();

aInput.oninput = function () {
    if (aInput.value == a.value) {
        a.classList.remove("warning");
        aInput.classList.remove("incorrect-value");
        aInput.readOnly = true;
        // переход к следующему шагу
        bPointer.classList.add("pointer-show");
        bInput.focus();
    } else {
        a.classList.add("warning");
        aInput.classList.add("incorrect-value");
    }
};

bInput.oninput = function () {
    if (bInput.value == b.value) {
        b.classList.remove("warning");
        bInput.classList.remove("incorrect-value");
        bInput.readOnly = true;
        // переход к следующему шагу
        sum.readOnly = false;
        sum.focus();
        sum.value= "";
    } else {
        b.classList.add("warning");
        bInput.classList.add("incorrect-value");
    }
};

sum.oninput = function () {
    if (+sum.value === +a.value + +b.value) {
        sum.classList.remove("incorrect-value");
        sum.readOnly = true;
    } else {
        sum.classList.add("incorrect-value");
    }
};