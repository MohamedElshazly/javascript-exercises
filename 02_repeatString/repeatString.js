const repeatString = function(targetString, repeatNumber) {
    // loop num times and concatenate the strig with itself.
    const originalString = targetString;
    //return empty string if repeat num is 0
    if(repeatNumber === 0) {
        return '';
    }
    else if(repeatNumber < 0) {
        return 'ERROR';
    }  
    for(let i = 0; i < repeatNumber - 1; i++) {
        targetString = targetString.concat(originalString);
    }
    return targetString;
};

// Do not edit below this line
module.exports = repeatString;
