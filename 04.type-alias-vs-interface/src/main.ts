// 1. interface의 확장
// interface Animal {
//     name: string;
// }

// interface Bear extends Animal {
//     honey: boolean;
// }

// const bear1: Bear = {
//     name: 'honey bear',
//     honey: true
// }

// 2. type의 확장
// type Animal = {
//   name: string;
// }

// type Bear = Animal & {
//   honey: boolean;
// }

// const bear1: Bear = {
//   name: "honey bear",
//   honey: true,
// };

// 3. 병합: interface는 되는데 type alias는 안됨
// interface Animal {
//   name: string;
// }

// interface Animal {
//   honey: boolean;
// }

// const bear1 = {
//   name: 'honey bear',
//   honey: true
// }


// 공통점 
interface IArticle {
  category: string;
  content: string;
}

class Article implements IArticle {
  public category = "";
  public content = "";
}


type IArticle2 = {
  category: string;
  content: string;
}

class Article2 implements IArticle {
  public category = "";
  public content = "";
}

// Union
// interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

type NewType = Animal | Bear;

const bear1: NewType = {
  name: "honey bear",
  honey: true,
};
// type
type Animal2 = {
  name: string;
}

type Bear2 = Animal & {
  honey: boolean;
}

type NewType2 = Animal | Bear;

const bear2: NewType2 = {
  name: "honey bear",
  honey: true,
};