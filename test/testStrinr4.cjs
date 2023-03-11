const string4 = require('../string4.cjs')

const testCase1 = string4({"first_name": "JoHN", "last_name": "SMith"})
const testCase2 = string4({"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"})

console.log(testCase1)
console.log(testCase2)