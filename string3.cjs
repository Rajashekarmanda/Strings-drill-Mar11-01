function string3(dateFormat){
    let date = new Date(dateFormat)
    let month = date.getMonth()
    let day = date.getDate()
    let year = date.getFullYear()

    return `${day}/${month+1}/${year}`
}
module.exports = string3