/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {
  let total = 0;
  //   for (const value of args) {
  //     total += value;
  //   }

  // args.forEach(value => {
  //     total += value;
  // })

  // args.forEach((item, index) => total += item);

  //   args.reduce((acc, cur) => {
  //     total = acc + cur;
  //     return total;
  //   });

  // total = args.reduce((acc, cur) => acc + cur, 0);

  console.log(total);
};

calcAllMoney(1000, 3000, 5000, 2500);

// 화살표 함수와 this

// 일반 함수는 나를 호출한 대상을 기준으로 this를 바인딩.

function a() {
  console.log(this);
}

a(); // window

// 화살표 함수는 this를 바인딩하지 않음. 상위 컨텍스트에서 가져옴.

const b = () => {
  console.log(this);
};

b(); // window

// -> 두 결과 모두 모듈 프로그래밍에 들어가면 undefined가 뜸

// 자바스크립트의 함수는 양면의 얼굴
// 1. 일반 함수(normal function)
// 2. 생성자 함수(constructor function) - 객체를 리턴

function createUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

console.log(new createUser('tiger', 30));

function Button(text = 'empty') {
  this.text = text;
}

const btn = new Button();

console.log(btn);

// 클래스
class Button2 {}

const _btn = new Button2();
console.log(_btn);

/* -------------------------------------------------------------------------- */
// this 찾기

// 일반 함수 : constructor 내장(concise method 예외)
// this : 나를 호출한 대상 this
// 객체의 메서드로 많이 사용됨 -> this를 찾기 위해

// 화살표 함수 : construcgtor 비내장(성능 최적화 위해서) cf) class
// this : 바인딩x -> 상위 컨텍스트에서 찾음
// 메서드 안에서의 함수로 많이 사용(this를 안 찾아야 하기 때문)

console.clear();

const user = {
  name: '박수진',
  total: 0,
  grades: [50, 70, 40],
  totalGrades() {
    // this.grades.forEach((g) => (this.total += g));
    // console.log(this.total);

    this.total = this.grades.reduce((acc, cur) => acc + cur, 0);

    return this.total;
  },

  sayHi() {
    const sayBye = () => {
      console.log(this);
    };

    sayBye();
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = 1;

// function Pow(num, count) {
//   for (let i = 0; i < count; i++) {
//     pow *= num;
//   }
//   console.log(pow);
//   return pow;
// }

let _pow = (num, count) =>
  Array(count)
    .fill(null)
    .reduce((acc) => acc * num, 1);

console.log(_pow(2, 3));

// Pow(2, 3); // 8

// repeat(text: string, repeatCount: number): string;
let repeatText = '';
let repeat = (text, count) => {
  for (let i = 0; i < count; i++) {
    repeatText += text;
  }
  return repeatText;
};
console.log(repeat('hello', 3)); // hellohellohello
