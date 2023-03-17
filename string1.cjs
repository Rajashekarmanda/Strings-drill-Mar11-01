function string1(stringIs) {
    if (/[a-zA-Z]/.test(stringIs) || stringIs == '' || typeof stringIs !== 'string') {
        return 0
    } else {
        let result = ''
        for (let eachWord of stringIs) { eachWord !== '$' ? result += eachWord : ''}
        return result
    };
}
module.exports = string1