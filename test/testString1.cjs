const string1 = require('../string1.cjs')

const testCase1 = string1('-$2,100.666')

console.log(testCase1)

console.log(string1('-2.100'))

console.log(string1(undefined))

console.log(string1(null))