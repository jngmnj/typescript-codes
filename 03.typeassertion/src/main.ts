// 1. 타입 단언
const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerText = "Hello";

// 2. ! not null 타입 단언
const bodyElement1 = document.querySelector("body");
bodyElement1!.innerText = "Hello"; // undefined나 null 이 아니다!


// 3. type guard
const bodyElement2 = document.querySelector("body"); 
if(bodyElement2) { 
    bodyElement2.innerText = "Hello";
}


// 잘못된 타입단언
function func(arg: string | null) {
    if(arg) {
        return (arg as string).toLowerCase()
    }
}

func('hello')
func(null)