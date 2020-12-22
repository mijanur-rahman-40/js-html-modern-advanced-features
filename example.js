const animalSounds = { cat: 'meow', lion: 'roar' };


console.log({ ...animalSounds, ['lion']: 'dad' });

const state = {};

const payload = {
    id: 1,
    name: 'Raju'
}

const key = payload.id;
console.log({ ...state, key: payload });
// console.log({ ...state, [key]: payload });

let obj = [
    {
        name: 'A',
        email: 'B'
    },
    {
        name: 'C',
        email: 'D'
    },
    {

    }
]

console.log('Number of keys :' + Object.keys(obj));
let val = obj.map(user => {
    return user;
})

console.log(val);

const array = [4, 5, 6, 12, 13];
const output = array.find(element => element > 5);
console.log(output);

const _array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(_array1.findIndex(isLargeNumber));

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15



const months = ['Jan', 'March', 'April', 'June'];

console.log('Sliced array :', months.slice(1, 3))

months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

const arr = [12, 45, 56];
const newArray = arr.splice(2, 1);
console.log(arr)
console.log(newArray)

const d = new Date();
console.log(d);

let store = ['a', 'b', 'c'];
store.map(s => {
    console.log(s);
});

const type = [
    'TV', 'RADIO', 'PRESS', 'INTERNET'
]
const subType = [
    {
        tv: 'TV',
        sub_type: [
            'Generalist',
            'News',
            'Sports',
            'Gastronomy',
            'Humor',
            'Adult'
        ]
    },
    {
        internet: 'INTERNET',
        sub_type: [
            'Web',
            'Social Media',
            'Mobile app',
            'Mailing',
            'Connected objects'
        ]
    }
]

subType.map((value, index) => {

    if (value['tv'] === 'TV') {
        value.sub_type.push('k')
    }
});
console.log(subType);

let email = 'orange@gmail.com';


console.log(Math.round(Math.random()));
let date = new Date();
let components = [
    date.getYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
];

let result = components.join("");

console.log(result)
console.log(Date.now());

// const time = new Date(1602450002040);
const time = new Date(1606659869 * 1000);
console.log("time " + time.getHours());

const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
console.log(expirationDate.getMinutes());


const response = {
    token: 'a'
}

let us = null;
const { user } = response;
// us = user;
console.log(user)

let isNull = null;
if (!isNull) {
    console.log(true);
    // return;
}
console.log(false);

const token = 'hello'
const headersMultipart = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}


const tokenHeadersMultipart = () => {
    if (token) {
        headersMultipart.headers['x-auth-header'] = token;
    }
    return headersMultipart;
};

console.log(headersMultipart.headers)
console.log(tokenHeadersMultipart().headers);

const number = '+1 34$46478276';
console.log(number.split('$', 2)[0]);
console.log(number.split('$', 2)[1]);

const n = 'Mijanur Rahman Raju';
console.log(n.split(' ', 1)[0]);
console.log(n.split(' ', 2)[1]);

const path = 'http://localhost:8889/public/uploads/userPictures/$120921111242.jpg';
console.log(path.split('$', 2)[1]);

const { promisify } = require('util');
const fs = require('fs');

// const unlinkAsync = promisify(fs.unlink);

// unlinkAsync('buye.png').then().catch(e=>console.log(e));

const s = true;
if (s == true) {
    console.log(s);
} else {
    console.log(false);
}

const item = 'potato';
console.log(item.charAt(0).toUpperCase() + item.slice(1))

const subCategoryItems = {
    tv: [
        {
            name: 'Generalist',
            image: 'https://www.djaxtech.com/images/products/smarttv.png'
        },
        {
            name: 'News',
            image: 'https://www.djaxtech.com/images/products/smarttv.png'
        },
    ],
}

subCategoryItems['tv'].map((item, index) => (
    console.log(item.name)
))
const packagesData = [
    {
        type: 'Basic',
        name: 'gg',
        description: 'gg',
        delivery_time: 'gg',
        delivery_type: 'gg',
        price: '',
        tasks: ['gg'],
    },
    {
        type: 'Standard',
        name: '',
        description: '',
        delivery_time: '',
        delivery_type: '',
        price: '',
        tasks: [],
    },
]

const filteredData = packagesData.filter(data => data.tasks.length !== 0);
console.log(filteredData)


const persons = ['apple', 'orange', 'mangoo'];
console.log(persons.includes('orane'));

const typeSubtypes = [
    {
        sub_type: [
            "small_cow"
        ],
        type: "COW",
    },
    {
        sub_type: [
            "Sports"
        ],
        type: "Newspaper",
    }
]

let value = typeSubtypes.find((value => value.type === 'Newspaper'))

console.log(typeof (typeSubtypes.findIndex(value => value.type === 'Newspapr')))
console.log(typeSubtypes.findIndex(value => value.type === 'Newspapr'))

let employee = { name: 'raju', age: '23' }
delete employee.name
console.log(employee);

let str = '  This is    my home'
console.log(str.substr(0, 4));
console.log(str.trim());

let userInfo = {
    name: 'Raju',
    age: '23'
}
let _d = { ...userInfo, name: 'Ritu' }
console.log(_d)

// adding object without push method
const usersInfoArray = [
    { name: 'Raju', age: '23' },
    { name: 'Ritu', age: '20' },
]
const stateObject = { users: usersInfoArray }
const objectToPush = { name: 'Hasan', age: '24' }
// difference index use
const newSateObject = { ...stateObject, users: [objectToPush, ...stateObject.users] }
// const newSateObject = { ...stateObject, users: [...stateObject.users, objectToPush] }


console.log(newSateObject)

const getDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObject = new Date(date);
    return monthNames[dateObject.getMonth()].substr(0, 3) + ' ' + dateObject.getDate() + ',' + dateObject.getFullYear();
};
const getTime = (date) => {
    const dateObject = new Date(date);
    return dateObject.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}
const someDate = new Date();
const numberOfMinutesToAdd = 4;
const numberOfHoursToAdd = 4;
const numberOfDaysToAdd = 4;
const numberOfMonthsToAdd = 4;
const numberOfYearsToAdd = 4;
// someDate.setUTCMinutes(someDate.getUTCMinutes() + numberOfMinutesToAdd);
// someDate.setDate(someDate.getDate() + numberOfHoursToAdd);
// someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
// someDate.setMonth(someDate.getMonth() + numberOfMonthsToAdd);
someDate.setUTCMonth(someDate.getUTCMonth() + numberOfMonthsToAdd);
// someDate.setFullYear(someDate.getFullYear() + numberOfYearsToAdd);
// console.log(getDate(someDate))
// console.log(getTime(someDate))
// console.log(someDate)

const currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() + 2)
console.log(currentDate)

console.log('Expired time ' + getTime(1606659869 * 1000))
console.log('Expired time ' + getDate(1606659869 * 1000))

const results = [];
results.splice(9, 1, 16);
console.log(results)

const a = [2, 3, 5, 4];
const b = [3, 4, 2];

// const isExist = b.sort().every((value) => a.sort().includes(value));
let isExist = b.sort().every((value) => {
    console.log(a.indexOf(value) !== -1)
    return a.indexOf(value) !== -1;

})
console.log(isExist)

const symbol = '&Alpha;';
console.log(symbol.substr(1, (symbol.length - 2)))

let res = 'I `am` a `student` and `boy` ';
let substr = '', foundStart = false, foundFinished = false; foundIndex = 0;
let resStr = '';
for (let i = 0; i < res.length; i++) {
    resStr += res[i];
    if (res[i] === '`' && !foundFinished) {
        foundStart = true;
        foundIndex = i;
        foundFinished = true;
    } else if (res[i] === '`' && foundStart) {
        foundStart = false;
        foundFinished = false;
        let _subStr = res.substr(foundIndex, i - foundIndex + 1);
        console.log(resStr+ _subStr);
    }
}