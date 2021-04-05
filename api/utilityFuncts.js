function convertIntToBoolean(int) {
    if(int === 1){
        return 'true';
    }
    if(int === 0){
        return 'false';
    }
    else{
        return int;
    }
}

function convertBoolStringToInt(string){
    if(string === 'true'){
        return 1;
    }
    if(int === 'false'){
        return 0;
    }
    else{
        return string;
    }
}

parse : function (res) {
    return Object.assign({}, res, {
        
    })
}

module.exports = {
    convertBoolStringToInt,
    convertIntToBoolean
}