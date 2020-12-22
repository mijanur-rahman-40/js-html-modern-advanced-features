const obj = {
    name: 'apple',
    age: 23
}
obj['age'] = 34;
// obj = { 'a': 3 };
const ob = { a: 3 };
// console.log(obj)
console.log({ ...obj, a: ob.a });
console.log({ ...obj, ob });
console.log(JSON.stringify(obj));

const persons = ['apple', 'orange', 3, 'mangoo'];
console.log(persons.splice(2, 1));
console.log(persons)

const data = {};
data['add'] = 'add';
data['sub'] = 'sub';

console.log(data);

[...Array(3)].map((_, i) => console.log('a'));
[Array(3)].map((_, i) => console.log(i));
console.log(...Array(3))
console.log(Array(3))
console.log(Array(3).length)

let dateTime = new Date().getTime()
console.log(dateTime)

const arr = [1, 2, 3, 4, 5];
console.log(arr.join('&'));

const initialState = {
    counter: 0
};

const newState = Object.assign({}, initialState);
// const newState = {};
console.log(newState)
newState.counter = initialState.counter + 1;
console.log(newState);

let addNumber = {
    sum: (number1, number2) => {
        return number1 + number2;
    }
}

console.log(addNumber.sum())
const s = Date.now();
const f = new Date('2020-11-24T13:40:37.297Z')
console.log(f.getMinutes())
