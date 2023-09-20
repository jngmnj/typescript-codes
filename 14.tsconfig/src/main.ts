type DeviceFormatter<T> = {
    [K in keyof T]: T[K];
}

type Device = {
    manufacturer: string;
    price: number;
};

const iphone: DeviceFormatter<Device> = {manufacturer: 'apple', price: 100};

// 만약 객체에서 가격이나 제조사만 가지거나
// 둘다 가지지 않는게 있을 경우에는? 

// Before
const priceOnly: DeviceFormatter<Device> = { price: 23 };
const manufacturerOnly: DeviceFormatter<Device> = { manufacturer: 'apple' };
const empty: DeviceFormatter<Device> = {};

// After
type DeviceFormatter2<T> = {
    [K in keyof T]? : T[K];
}

const priceOnly2: DeviceFormatter2<Device> = { price: 23 };
const manufacturerOnly2: DeviceFormatter2<Device> = { manufacturer: "apple" };
const empty2: DeviceFormatter2<Device> = {};