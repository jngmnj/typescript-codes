// boolean
let boolean: boolean
let falseBoolean: boolean = false

// number
let number: number
let integer: number
let float:number = 1.234

// string
let string: string
let firstName: string ="Doe"

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ["John", "Kim"]
let names2: Array<string> = ["John", "Kim"]

// 여러 타입을 가지는 배열(union)
let array1: (string | number)[] = ['John', 1, 2]
let array2: Array<string | number> = ['John', 1, 2]

// 여러타입을 단언할수없다면 any
let someArray = ['John', 1, [], {}, false];

// interface, type

// 읽기전용 배열(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['A', 'B', 'C']
let numberArray: ReadonlyArray<number> = [1, 2, 3]

stringArray.push('C')  // error
numberArray[0] = 3 // error

// Tuple 배열과 비슷하지만 해당자리의 타입과 고정된 길이를 지켜야함
let tuple1: [string, number]
tuple1 = ['a', 1]
tuple1 = ['a', 1, 2] // error
tuple1 = [2, 'a']; // error

let users: [number, string][]
users = [[1, 'John'], [2, 'Doe']]

let tuple2: [string, number]
tuple2 = ['a', 1]
tuple2.push(2) // 허용된 타입일경우 push로 값을 넣는것 가능
console.log(tuple2)


// any
let any: any = 'abc'
any = 1
any = []

// unknown
let unknown: unknown = false
let string1: string = unknown // error 다른 값에 할당불가
let string2: string = unknown as string // 타입단언하면 가능

// object
let obj: object = {}
let arr: object = []
let nul: object = null // error. typeof null은 'object'로나오긴하지만
let date: object = new Date()

const obj1: {id: number, title: string} = {
    id: 1,
    title: 'title1',
    description: 'description' // error
}

// Union
let union: (string | number) 
union = 'hi'
union = 1
union = [] // error

// Function
let func1: (arg1: number, arg2: number) => number
func1 = function(x, y) {
    return x * y
}

let func2: () => void
func2 = function() {
    console.log('Hellow world')
}

// Null, undefined
// strict이 false일때 전부 가능함
let number1: number = undefined 
let string4: string = null
let object: {a: 10, b: false} = undefined
let array: any[] = null
let null1: null = undefined
let void1: void = null

let void2: void = undefined // 가능

// void
function greeting(): void {
    console.log("hi")
}

// never
function keepProcessing(): never {
    while(true) {
        console.log("hi");
    }
}

const never: [] = []
never.push(1) // error

const never2: number[] = []
never2.push(1) // 가능