function string2(stringIs){
    let IPV4Array = []
    let validateIPV4 = false
    stringIs.split('.').forEach(element => {
        if ((/^[A-Za-z]+$/.test(element))){
            validateIPV4 = true
        }else{
            IPV4Array.push(parseInt(element))
        }
    });
    if (validateIPV4){
        return []
    }else{
        return IPV4Array
    }
}
module.exports = string2