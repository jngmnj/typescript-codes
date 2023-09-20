
// 1. overloading1
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}

add(1,2); // number
add("hello", "world"); // string
// add(1, "world"); // error

// 2. overloading2
function saySomething(word: string): string;
function saySomething(words: string[]): string;
function saySomething(word: any): string {
  if (typeof word === "string") {
    return word;
  } else if (Array.isArray(word)) {
    return word.join(" "); // string
  }
  throw new Error("unable to say something");
  // string으로 return하는데 undefined될 수 있어서 error throw함
}
saySomething('hello');
saySomething(['hello', 'world']);