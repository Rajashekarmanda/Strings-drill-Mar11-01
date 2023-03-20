function string3(dateFormat) {
    if (dateFormat == '' || dateFormat == undefined || dateFormat == null) {
        return undefined
    } else {
        let date = new Date(dateFormat), month = date.getMonth(), day = date.getDate(), year = date.getFullYear() 
        return `${day}/${month + 1}/${year}`
    }
}
module.exports = string3