"use strict";
// 1. 타입 단언
const bodyElement = document.querySelector('body');
bodyElement.innerText = "Hello";
// 2. ! not null 타입 단언
const bodyElement1 = document.querySelector("body");
bodyElement1.innerText = "Hello"; // undefined나 null 이 아니다!
// 3. type guard
const bodyElement2 = document.querySelector("body");
if (bodyElement2) {
    bodyElement2.innerText = "Hello";
}
// 잘못된 타입단언
function func(arg) {
    if (arg) {
        return arg.toLowerCase();
    }
}
func('hello');
func(null);
