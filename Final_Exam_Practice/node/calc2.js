// calc2.js: 객체 기반으로 계산 기능을 내보내는 모듈
let calc = {};

calc.add = function(a, b) {
    return a + b;
};

calc.multiply = function(a, b) {
    return a * b;
};

module.exports = calc;
