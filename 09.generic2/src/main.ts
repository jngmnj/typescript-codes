const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
}

const array = makeArr<number, number>(4, 5);
const array2 = makeArr("a", "b");
const array3 = makeArr<string, number>("a", 3);

// default
const makeArr1 = <X, Y = string>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

// const array1 = makeArr1<string, string>("a", "b");
const array1 = makeArr1<string>("a", "b");


// 매개변수 추가 extends
// before
const makeFullName = (obj: {firstName: string, lastName: string}) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
}

makeFullName({firstName: "John", lastName: "Doe", location: "Seoul"});

// after
const makeFullName2 = <T extends {firstName: string, lastName: string}>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

makeFullName2({ firstName: "John", lastName: "Doe", location: "Seoul" });
makeFullName2({ lastName: "Doe", location: "Seoul" }); // error: firstName은 필수


// 리액트에서 Generic
// 컴포넌트에서 props로 뭐가 올지 모를때 generic사용
interface Props {
  name: string;
}
const ReactComponent: React.FC<Props> = ({ name }) => { // Functional Component
  const [state] = useState<{name: string | null}>({name: ""}); // useState에서도 generic사용
  state.name
  return <div>{name}</div>
}
