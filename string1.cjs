function string1(stringIs) {
    if (/[a-zA-Z]/.test(stringIs) || stringIs == '' || typeof stringIs !== 'string') {
        return 0
    } else {
        let result = ''
        stringIs.split('').map((eachWord) => eachWord !== '$' ? result += eachWord : '')
        return result
    };
}
module.exports = string1