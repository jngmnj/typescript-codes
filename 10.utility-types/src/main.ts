// 1. Partial
interface Address {
  email: string;
  address: string;
}

const me: Partial<Address> = {};
const you: Partial<Address> = { email: "john@gmail.com" };
const youAndMe: Address = { email: "john@gmail.com", address: "john" };


// 2. Pick
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean Room",
  completed: false,
};

// 3. Omit(생략)
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview2 = Omit<Todo2, "description">;

const todo2: TodoPreview2 = {
  title: "clean room",
  completed: false,
  createdAt: 123123,
};

// 4. Exclude
type myUnionType = "🍈" | "🍉" | "🍊" | "🍋";
let lemon: myUnionType = "🍋";
let noLemonsPlease: Exclude<myUnionType, "🍋"> = "🍈";
let noLemonsOrMelons: Exclude<myUnionType, "🍋" | "🍈"> = "🍉";

// 5. Required
type User = {
  firstName: string,
  lastName?: string,
}

let firstUser: User = {
  firstName: "John"
}

let secondUser: Required<User> = {
  firstName: "John"
  // lastName도 required로 만들어버림
}

// 6. Record<Keys, Type>
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British ShortHair" },
};

cats.boris;

// 7. ReturnType<T>
type T0 = ReturnType<() => string>; 
type T1 = ReturnType<(s: string) => string>;

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = 'Hello';
const b: ReturnType<typeof fn> = true; // error
