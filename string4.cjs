function string4(nameObject){
    let fullNameTitleCase = []
    for (let eachPartOfName of Object.values(nameObject)){
        fullNameTitleCase.push(eachPartOfName[0].toUpperCase() + eachPartOfName.slice(1,).toLowerCase())
    }
    return fullNameTitleCase.join(' ')
}
module.exports = string4