function booleanCovert(valueArray, valueKey){
    valueArray.forEach((item) => {
        item[valueKey] = Boolean(item[valueKey])
    })
}

module.exports = {
    booleanCovert
}