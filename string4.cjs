function string4(nameObject){
    let fullNameTitleCase = []
    Object.values((nameObject)).map((eachPartOfName) => fullNameTitleCase.push(eachPartOfName[0].toUpperCase() + eachPartOfName.slice(1,).toLowerCase()))
    return fullNameTitleCase.join(' ')
}
module.exports = string4