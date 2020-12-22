/**
 * References for Regex
 */
// Any character except [\^$.|?*+()    Literal character
// \ followed by any of [\^$.|?*+(){}  Backslash escapes a metacharacter
// .   Any character
// |   Alternation
// \|  Alternation
// ?   Greedy quantifier
// \?  Greedy quantifier
// ??  Lazy quantifier
// ?+  Possessive quantifier
// *   Greedy quantifier
// *?  Lazy quantifier
// *+  Possessive quantifier
// +   Greedy quantifier
// \+  Greedy quantifier
// +?  Lazy quantifier
// ++  Possessive quantifier
// { and } Literal curly braces
// {n} where n is an integer >= 1  Fixed quantifier
// {n,m} where n >= 0 and m >= n   Greedy quantifier
// {n,} where n >= 0   Greedy quantifier
// {,m} where m >= 1   Greedy quantifier
// \{n\} where n is an integer >= 1    Fixed quantifier
// \{n,m\} where n >= 0 and m >= n Greedy quantifier
// \{n,\} where n >= 0 Greedy quantifier
// \{,m\} where m >= 1 Greedy quantifier
// {n,m}? where n >= 0 and m >= n  Lazy quantifier
// {n,}? where n >= 0  Lazy quantifier
// {,m}? where m >= 1  Lazy quantifier
// {n,m}+ where n >= 0 and m >= n  Possessive quantifier
// {n,}+ where n >= 0  Possessive quantifier
// ^   String anchor
// ^   Line anchor
// $   String anchor
// $   Line anchor
// \a  Character escape
// \A  String anchor
// \A  Attempt anchor
// \b  Word boundary
// \b  Backspace character
// \B  Word non-boundary
// \B  Backslash character
// \c  XML shorthand
// \ca through \cz Control character escape
// \cA through \cZ Control character escape
// \C  XML shorthand
// \d  Digits shorthand
// \D  Non-digits shorthand
// \e  Escape character
// \f  Form feed character
// \g{name}    Named back reference
// \g-1, \g-2, etc.    Relative Back reference
// \g{-1}, \g{-2}, etc.    Relative Back reference
// \g1 through \g99    Back reference
// \g{1} through \g{99}    Back reference
// \g<name> where “name” is the name of a capturing group  Named subroutine call
// \g<name> where “name” is the name of a capturing group  Named back reference
// \g'name' where “name” is the name of a capturing group  Named subroutine call
// \g'name' where “name” is the name of a capturing group  Named back reference
// \g<0>   Recursion
// \g'0'   Recursion
// \g<1> where 1 is the number of a capturing group Subroutine call
// \g<1> where 1 is the number of a capturing group Back reference
// \g'1' where 1 is the number of a capturing group Subroutine call
// \g'1' where 1 is the number of a capturing group Back reference
// \g<-1> where -1 is a negative integer   Relative subroutine call
// \g<-1> where -1 is a negative integer   Relative back reference
// \g'-1' where -1 is a negative integer   Relative subroutine call
// \g'-1' where -1 is a negative integer   Relative back reference
// \g<+1> where +1 is a positive integer   Forward subroutine call
// \g'+1' where +1 is a positive integer   Forward subroutine call
// \G  Attempt anchor
// \G  Match anchor
// \h  Hexadecimal digit shorthand
// \h  Horizontal whitespace shorthand
// \H  Non-hexadecimal digit shorthand
// \H  Non-horizontal whitespace shorthand
// \i  XML shorthand
// \I  XML shorthand
// \k<name>    Named back reference
// \k'name' through \k'99' Named back reference
// \k{name}    Named back reference
// \k<1> through \k<99>    Back reference
// \k'1' through \k'99'    Back reference
// \k<-1>, \k<-2>, etc.    Relative Back reference
// \k'-1', \k'-2', etc.    Relative Back reference
// \K  Keep text out of the regex match
// \l  Lowercase shorthand
// \L  Non-lowercase shorthand
// \m  Tcl start of word boundary
// \M  Tcl end of word boundary
// \n  Line feed character
// \N  Not a line break
// Literal CRLF, LF, or CR line break  Line break
// \o{7777} where 7777 is any octal number Octal escape
// \pL where L is a Unicode category   Unicode category
// \PL where L is a Unicode category   Unicode category
// \p{L} where L is a Unicode category Unicode category
// \p{IsL} where L is a Unicode category   Unicode category
// \p{Category}    Unicode category
// \p{IsCategory}  Unicode category
// \p{Script}  Unicode script
// \p{IsScript}    Unicode script
// \p{Block}   Unicode block
// \p{InBlock} Unicode block
// \p{IsBlock} Unicode block
// \P{Property}    Negated Unicode property
// \p{^Property}   Negated Unicode property
// \P{^Property}   Unicode property
// \Q…\E Escape sequence
// \r  Carriage return character
// \R  Line break
// \s  Whitespace shorthand
// \S  Non-whitespace shorthand
// \t  Tab character
// \u  Uppercase shorthand
// \uFFFF where FFFF are 4 hexadecimal digits  Unicode code point
// \u{FFFF} where FFFF are 1 to 4 hexadecimal digits   Unicode code point
// \U  Non-uppercase shorthand
// \v  Vertical tab character
// \v  Vertical whitespace shorthand
// \V  Non-vertical whitespace shorthand
// \w  Word character shorthand
// \W  Non-word character shorthand
// \xFF where FF are 2 hexadecimal digits  Hexadecimal escape
// \xFFFF where FFFF are 4 hexadecimal digits  Unicode code point
// \x{FFFF} where FFFF are 1 to 4 hexadecimal digits   Unicode code point
// \X  Unicode grapheme
// \y  Tcl word boundary
// \Y  Tcl word non-boundary
// \Z  String anchor
// \z  String anchor
// \0  NULL escape
// \1 through \7   Octal escape
// \1 through \9   Back reference
// \10 through \77 Octal escape
// \10 through \99 Back reference
// \100 through \377   Octal escape
// \01 through \0377   Octal escape
// \‘    String anchor
// \‘    Attempt anchor
// \'  String anchor
// \<  GNU word boundary
// \>  GNU word boundary
// [[:<:]] POSIX word boundary
// [[:>:]] POSIX word boundary
// (regex) Capturing group
// \(regex\)   Capturing group
// (?:regex)   Non-capturing group
// (?<name>regex)  Named capturing group
// (?'name'regex)  Named capturing group
// (?#comment) Comment
// (?|regex)   Branch reset group
// (?>regex)   Atomic group
// (?=regex)   Positive lookahead
// (?!regex)   Negative lookahead
// (?<=regex)  Positive lookbehind
// (?<!regex)  Negative lookbehind
// (?(?=regex)then|else) where (?=regex) is any valid lookaround and then and else are any valid regexes   Lookaround conditional
// (?(regex)then|else) where regex, then, and else are any valid regexes and regex is not the name of a capturing group    Implicit lookahead conditional
// (?(name)then|else) where name is the name of a capturing group and then and else are any valid regexes  Named conditional
// (?(<name>)then|else) where name is the name of a capturing group and then and else are any valid regexes    Named conditional
// (?('name')then|else) where name is the name of a capturing group and then and else are any valid regexes    Named conditional
// (?(1)then|else) where 1 is the number of a capturing group and then and else are any valid regexes  Conditional
// (?(-1)then|else) where -1 is a negative integer and then and else are any valid regexes Relative conditional
// (?(+1)then|else) where +1 is a positive integer and then and else are any valid regexes Forward conditional
// (?(+1)then|else) where 1 is the number of a capturing group and then and else are any valid regexes Conditional
// (?<capture-subtract>regex) where “capture” and “subtract” are group names and “regex” is any regex  Balancing group
// (?'capture-subtract'regex) where “capture” and “subtract” are group names and “regex” is any regex  Balancing group
// (?&name) where “name” is the name of a capturing group  Named subroutine call
// (?(DEFINE)regex) where “regex” is any regex Subroutine definitions
// (?P<name>regex) Named capturing group
// (?P=name)   Named backreference
// (?P=1) through (?P=99)  Backreference
// (?P>name) where “name” is the name of a capturing group Named subroutine call
// (?R)    Recursion
// (?0)    Recursion
// (?1) where 1 is the number of a capturing group Subroutine call
// (?-1) where -1 is a negative integer    Relative subroutine call
// (?+1) where +1 is a positive integer    Forward subroutine call

/**
 * Test and Match Method
 */
const sentence = 'The dog chased the cat'
// const regex = /the/
// const regex = /The/
// i flag basically works with case sensitive
// const regex = /Dog|the/i
const regex = /he/

console.log(regex.test(sentence))

// Extract matches
const extractStr = "Extract the word 'coding' from this starting.Twinkle twinkle , little star"
// const regex1 = /coding/
const regex1 = /twinkle/ig
console.log(extractStr.match(regex1))

// use also wildcard character
const humStr = "I'll hum a hum song 4.667902"
// const regex2 = /hu./
// const regex2 = /hu./g
const regex2 = /.on/g
const vowelRegex = /[aeiou]/ig
const allLettersRegex = /[a-z]/ig
const allLettersNumbersRegex = /[h-s2-8]/ig
const exceptLettersNumbersRegex = /[^0-6aeiou]/ig
// console.log(humStr.match(regex2))
// console.log(regex2.test(humStr))
// console.log(humStr.match(vowelRegex))
// console.log(humStr.match(allLettersRegex))
// console.log(humStr.match(allLettersNumbersRegex))
console.log(humStr.match(exceptLettersNumbersRegex))

// occurs many time
const difficultSpelling = 'Mississippi'
const regex3 = /s+/g
console.log(difficultSpelling.match(regex3))

// match zero or multiple times
const soccerWord = 'goooooooooal'
const goRegex = /go*/
console.log(soccerWord)

const titanic = 'titanic tht'
// const titanicRegex = /t[a-z]*i/g
// ? -> happens on time only
const titanicRegex = /t[a-z]*?i/g
console.log(titanic.match(titanicRegex))

// zero or more any characters
const text = "<h1>'Winter' is 'coming'</h1>"
// const myRegex = /<.*>/g
// const myRegex = /<.*?>/g
const myRegex = /'.*?'/g
console.log(text.match(myRegex))

const criminals = 'P1CCCp2CCp3'
console.log(criminals.match(/C+/g))

// only beginning of the string
const rickyAndCal = 'A Cal and Ricky both like racing'
const callRegex = /^Cal/
console.log(callRegex.test(rickyAndCal))

// only ending of the string
const caboose = 'The last car on a train is the caboose'
const lastRegex = /caboose$/
console.log(lastRegex.test(caboose))

// match all letters, numbers and underscore
const quotaSample = "The five boxing wizards jump quickly 5.00"
const AlphabetRegex = /\w/g
// not match all letters, numbers and underscore --> means all spaces
const nonAlphabetRegex = /\W/g
console.log(quotaSample.match(AlphabetRegex).length)
console.log(quotaSample.match(nonAlphabetRegex).length)

// only numbers
const numberRegex = /\d/g
console.log(quotaSample.match(numberRegex).length)

// all non numbers
const nonNumbers = /\D/g
console.log(quotaSample.match(nonNumbers).length)

/**
 * If there are numbers, they must be at the end
 * Letters can be lowercase and uppercase
 * At least two characters long, Two-letter names can't have numbers 
 */
// const username = "JackOfAllTrades"
const username = "Aaa22"
// const username = "AAaJ22"
// const username = "3AAaJ"
const userCheck = /^[A-Za-z]{2,}\d*$/
// const userCheck = /^(?=.*[A-Za-z]).{2,}\d*$/
console.log(userCheck.test(username))

// find character spaces
const spaces = /\s/g
const nonSpaces = /\S/g
console.log(quotaSample.match(spaces))
console.log(quotaSample.match(nonSpaces))

// find all words with number of characters
const ohStr = 'Ohhh no'
const oHRegex = /Oh{3,6} no/g
console.log(ohStr.match(oHRegex))

// find words with a specific character length
const haStr = 'Hazzzzazh gzz'
const haRegex = /z{4,6}/
console.log(haRegex.test(haStr))

// specify exact number of matches
const timStr = 'Timmmmber'
const timRegex = /Tim{4}ber/
console.log(timRegex.test(timStr))

// check for all or none
const favWord = 'favorite'
const favRegex = /favou?rite/
console.log(favRegex.test(favWord))

// Positive and Negative Lookahead
const quit = 'qu'
const noQuit = 'qt'

const quRegex = /q(?=u)/g
const qRegex = /q(?!u)/

console.log(quit.match(quRegex))

// five or more characters and two or more digits
const sampleWord = 'astronaut33'
const pwRegex = /(?=\w{5})(?=\D*\d{2})/
console.log(pwRegex.test(sampleWord))

// Reuse patterns Using Capture Groups
const repeatStr = 'regex regex'
const repeatRegex = /(\w+)\s\1/
console.log(repeatStr.match(repeatRegex))

// return group of three numbers
const repeatNum = "42 42 42"
const reRegex = /^(\d+)\s\1\s\1$/;
console.log(reRegex.test(repeatNum))

/**
 * Replace
 */
// use capture groups to scratch and replace
const wrongText = "The sky is silver"
const silverRegex = /silver/
console.log(wrongText.replace(silverRegex, 'blue'))

// w+ means all letter
const nameText = "Mijanur Rahman".replace(/(\w+)\s(\w+)/, '$2 $1')
console.log(nameText)

const huhText = 'This sandwich is good.';
const fixRegex = /good/
const replaceText = "Okay-Dokoy"
const result = huhText.replace(fixRegex, replaceText)
console.log(result)