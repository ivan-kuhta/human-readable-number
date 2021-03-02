const NUMBERTEXT = [
    {value: 0, str: "zero"},
    { value: 1, str: "one" },
    { value: 2, str: "two" },
    { value: 3, str: "three" },
    { value: 4, str: "four" },
    { value: 5, str: "five" },
    { value: 6, str: "six" },
    { value: 7, str: "seven" },
    { value: 8, str: "eight" },
    { value: 9, str: "nine" },
    { value: 10, str: "ten" },
    { value: 11, str: "eleven" },
    { value: 12, str: "twelve" },
    { value: 13, str: "thirteen" },
    { value: 14, str: "fourteen" },
    { value: 15, str: "fifteen" },
    { value: 16, str: "sixteen" },
    { value: 17, str: "seventeen" },
    { value: 18, str: "eighteen" },
    { value: 19, str: "nineteen" },
    { value: 20, str: "twenty" },
    { value: 30, str: "thirty" },
    { value: 40, str: "forty" },
    { value: 50, str: "fifty" },
    { value: 60, str: "sixty" },
    { value: 70, str: "seventy" },
    { value: 80, str: "eighty" },
    { value: 90, str: "ninety" },
    { value: 100, str: "hundred" },
];

module.exports = function toReadable (number) {
    let strNumber = [];

    function searhInObj(number) {
        return NUMBERTEXT.find(elem => elem.value == number).str;
    }
    if(number == 0) {
        strNumber.push(`${searhInObj(0)}`)
    }
    if(number >= 100) {
        strNumber.push(`${searhInObj(Math.floor(number / 100))} ${searhInObj(100)}`)
        number = number - Math.floor(number / 100) * 100
    }
    if(number >= 20) {
        strNumber.push(`${searhInObj(Math.floor(number / 10) * 10)}`)
        number = number - Math.floor(number / 10) * 10
    }
    if(number >= 1) {
        strNumber.push(`${searhInObj(number)}`)
    }
    return strNumber.join(' ');
}
