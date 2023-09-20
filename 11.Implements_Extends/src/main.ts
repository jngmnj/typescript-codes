class Car {
  mileage = 0;
  price = 1000;
  color = 'white';

  drive() {
    return 'drive!';
  }

  brake() {
    return 'stop!';
  }
}

// extends로는 모두 상속받기에 가능
class Ford extends Car {

}
const myFordCar = new Ford();


// implements
interface Part {
  seats: number;
  tire: number;
}
class Ford2 implements Car, Part {
  // 같은 속성을 넣어야한다.
  mileage = 0;
  price = 2000;
  color = "red";
  seats = 2;
  tire = 4;

  drive() {
    return "drive!";
  }

  brake() {
    return "stop!";
  }
}
const myFordCar2 = new Ford2();
