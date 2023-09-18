// boolean
let boolean;
let falseBoolean = false;
// number
let number;
let integer;
let float = 1.234;
// string
let string;
let firstName = "Doe";
// Array
// 한가지 타입만 가지는 배열
let names1 = ["John", "Kim"];
let names2 = ["John", "Kim"];
// 여러 타입을 가지는 배열(union)
let array1 = ['John', 1, 2];
let array2 = ['John', 1, 2];
// 여러타입을 단언할수없다면 any
let someArray = ['John', 1, [], {}, false];
// interface, type
// 읽기전용 배열(readonly, ReadonlyArray)
let stringArray = ['A', 'B', 'C'];
let numberArray = [1, 2, 3];
// stringArray.push('C')  // error
// numberArray[0] = 3 // error
// Tuple 배열과 비슷하지만 해당자리의 타입과 고정된 길이를 지켜야함
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2] // error
// tuple1 = [2, 'a']; // error
let users;
users = [[1, 'John'], [2, 'Doe']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2); // 허용된 타입일경우 push로 값을 넣는것 가능
console.log(tuple2);
// any
let any = 'abc';
any = 1;
any = [];
// unknown
let unknown = false;
// let string1: string = unknown // error 다른 값에 할당불가
let string2 = unknown; // 타입단언하면 가능
// object
let obj = {};
let arr = [];
// let nul: object = null // error. typeof null은 'object'로나오긴하지만
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title1',
    // description: 'description' // error
};
// Union
let union;
union = 'hi';
union = 1;
// union = [] // error
// Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('Hellow world');
};
// Null, undefined
let number1 = undefined; // error
let string4 = null;
let object = undefined;
let array = null;
let null1 = undefined;
let void1 = null;
