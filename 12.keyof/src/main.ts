// keyof
interface IUser {
    name: string;
    age: number;
    address: string;
}

type UserKeys = keyof IUser; // 새로운 Union유형 반환
// "name" | "age" | "address"


// 객체의 key 를 사용
const user = {
    name: "John",
    age: 20, 
    address: 'seoul'
}

// type으로 변환후 keyof로 사용
type UserKeys2 = keyof typeof user; 


// enum 사용
enum UserRole {
    admin,
    manager
}

type UserRoleKey = keyof typeof UserRole;