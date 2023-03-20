function string5(arrayToJoin){
   let modifiedString = ( Array.isArray(arrayToJoin) && arrayToJoin.length > 0) ? `${arrayToJoin.join(' ')}.` : " "
   return modifiedString
}
module.exports = string5