/* ---------------- */
/* Operators        */
/* ---------------- */

// const first = prompt('첫 번째 값');
// const second = prompt('두 번째 값');

// console.log(Number(first) + Number(second));

// console.log((first * 1) + (second * 1));
// console.log((first / 1) + (second / 1));
// console.log(+first + +second);

// console.log(first);

// console.log(first + second);

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상
let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = a + b;
console.log(binary);

// 삼항 연산자
let ternary = a > 5 ? '네 사실입니다.' : '아니요 거짓입니다.';
// (condition) ? value1 : value2
console.log(ternary);

console.log(`안녕 나는 선범이야 너를 만나서 ${a < 5 ? '최고야' : '최악이야!'}`);

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 2 - 1;

// 산술 연산자: 곱셈
let multiplication = 2 * 3;

// 산술 연산자: 나눗셈
let division = 2 / 5;

// 산술 연산자: 나머지
let remainder = 4;

console.log(remainder % 2 === 0 ? '짝수' : '홀수');

// 산술 연산자: 거듭 제곱
let power = 2 ** 53 - 1;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
// [1, 2, 3].toString() + [4,5,6],toString();
console.clear();

let first = [1, 2, 3];
let second = [4, 5, 6];

// console.log(first.concat(second));
// 전개 구문(전개 연산자) spread syntax(operator)
console.log([...first, ...second]);

// rest parameter
function sum(...rest) {}

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; // 135
let total = count % 4;
count = count / 2;
let pow = count ** 3;
total = total * count + pow;
