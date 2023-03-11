function string1 (stringIs){

    let result =''
    let countTest = 0

    for (let eachWord of stringIs){
        if (eachWord !== '$'){
            result += eachWord
            countTest++
        }
    }
    if(countTest !== stringIs.length){
        return result
    }else{
        return 0
    }
}
module.exports = string1