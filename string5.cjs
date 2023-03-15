function string5(arrayToJoin){

   if (arrayToJoin.length < 1 && Array.isArray(arrayToJoin)){
    return ''
   }else if (!Array.isArray(arrayToJoin)){
    return ''
   }
   else {
    return `${arrayToJoin.join(' ')}.`
   }
   
}
module.exports = string5