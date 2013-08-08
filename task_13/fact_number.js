/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 08.08.13
 * Time: 12:07
 */

function factorial(number) {
    if (typeof number != 'number') {
        console.error("Function factorial: argument must be number");
        return null;
    }
    if (number == 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

function getFactorialArray() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr.push(factorial(i));
    }
    return arr;
}

function getFactNumbers(start, end) {
    var facts = getFactorialArray();
    var result = [];
    for (var num = start; num < end; num++) {
        var prevNum = 0;
        var fact = 0;
        for (mask = 10; mask/10 < num; mask *= 10) {
            var digit = (num % mask - prevNum) / (mask / 10);
            fact += facts[digit];
            prevNum = num % mask;
//            console.log(num, mask, fact, digit, prevNum);
        }

        if (fact == num) {
            result.push(num);
        }
    }
    return result;
}
