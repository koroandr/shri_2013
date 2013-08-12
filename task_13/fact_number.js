/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 08.08.13
 * Time: 12:07
 */


(function () {
    /**
     * Расчет факториала числа
     *
     * @param number
     * @returns {number} - факториал аргумента
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

    /**
     * Функция для расчета факториала всех цифр.
     *
     * @returns {Array} - массив, в котором в i-м элементе находится значение i!
     */
    function getFactorialArray() {
        var arr = [];
        for (var i = 0; i < 10; i++) {
            arr.push(factorial(i));
        }
        return arr;
    }


    /**
     * Находит числа в заданном диапазоне, равные факториалу своих цифр.
     * @param start - начало диапазона
     * @param end - конец диапазона
     * @returns {Array} - массив чисел, равных факториалу своих цифр
     */
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

    /*
    Вообще значение числа растет быстрее, чем сумма факториалов его цифр, так как с добавлением разряда сумма факториалов
    увеличивается на константу (максимально допустимая сумма увеличивается на 9!), а само значения числа - на порядок.

    Далее наблюдение:
    Для семизначного числа максимальная сумма цифр 9!*7 = 2540160 (т. е. также является семизначным числом), следовательно
    для 8 и более цифр таких чисел просто не существует.
     */
    console.log(getFactNumbers(1,2540160))
})();
