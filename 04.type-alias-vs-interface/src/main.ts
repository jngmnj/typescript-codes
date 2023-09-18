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

type Animal = {
  name: string;
}

type Bear = Animal & {
  honey: boolean;
}

const bear1: Bear = {
  name: "honey bear",
  honey: true,
};