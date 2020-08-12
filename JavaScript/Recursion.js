var table = [];
var temp = 1;
var countDownFrom = function countDownFrom(num) {
    
    table.push(num*temp);
    temp++;
    if (temp > 10){return false;} 
    countDownFrom(num);
    return table;
    };

    module.exports = countDownFrom;
    // console.log(countDownFrom(5)); 