
const PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
let now = new Date().getTime();
const timeStampChars = new Array(8);
const lastRandChars = [];
for (var i = 7; i >= 0; i--) {
    timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
    now = Math.floor(now / 64);
}

let id = timeStampChars.join('');


console.log(timeStampChars)

let date = new Date(1536763183)
console.log(date.getFullYear())
