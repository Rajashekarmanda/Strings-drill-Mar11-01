function string2(stringIs){
    let IPV4Array = [], validateIPV4 = false
    stringIs.split('.').map(element =>  /^[A-za-z]+$/.test(element) ? validateIPV4 = true : IPV4Array.push(parseInt(element)));
    let validResultReturn = validateIPV4 ? [] : IPV4Array
    return validResultReturn
}
module.exports = string2