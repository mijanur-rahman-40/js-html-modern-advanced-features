// 1. Regex For Number
const regNumber = /^\d*(\.\d+)?$/
const result = '123'.match(regNumber)       // true
if (result) {
    console.log('Match')
} else {
    console.log('Not Match')
}

// 2. Regex For Match Lowercase

const regexStringSensitive = /[a-z]/g
const result = 'HELLO'.match(regexStringSensitive)
if (result) {
    console.log('True')
} else {
    console.log('False')
}

// 3. Regex For Match Email
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const result = 'helo@gmail.com'.match(regexEmail)
if (result) {
    console.log('Email is Match')
} else {
    console.log('Not Match')
}

// 4. Regex For Match Some String
const regexMatchString = /(abc|def)[0-9]{8,11}/
const result = 'abc234832748374asdf7943278934haskhjd'.match(regexMatchString)  //if match abc234832748374 it will true
if (result) {
    console.log('Match')
} else {
    console.log('Not Match')
}

// 5. Regex For Match Multi-Word
const regexMatchLove = /\LOVE|\bLie/
const result = 'I LOVE YOU AND I NOT LIE'.match(regexMatchLove)  // Match with word LOVE and LIE
if (result) {
    console.log('Match Word')
} else {
    console.log('Not Match')
}

// 6. Regex For Match File Extensions
const regexFileName = /\.(gif|jpg|jpeg|tiff|png)$/i
const result = 'helo.jpg'.match(regexFileName)  // match with filename gif|jpg|jpeg|tiff|png
if (result) {
    console.log('Match File')
} else {
    console.log('Not Match')
}

// 7. Regex Min Max
const regexMinMax = /^.{8,20}$/
const result = 'helo.jpg 123'.match(regexMinMax)   //min 8 max 20
if (result) {
    console.log('Recomended Password')
} else {
    console.log('Not Recomended Password')
}

// 8. Regex For Special Character
const regexSpecialCharacter = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g
const result = '*( Helo {k. ='.match(regexSpecialCharacter)
if (result) {
    console.log('Contain Special Character')
} else {
    console.log('Not Contain Special Character')
}