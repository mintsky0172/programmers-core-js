/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 집합 데이터
  // 함수 안에서만 접근 가능한 인수들의 집합 객체 : arguments

  let total = 0;

  // for문 total 내보내기
  // for(let i = 0; i < arguments.length; i++){
  //   total = total + arguments[i];
  // }

  // for..of
  // for(const value of arguments) total += value;
  // return total;

  // 배열의 메서드
  // forEach, reduce, map, filter ...

  // const arr = Array.prototype.slice.call(arguments); // array instance method
  // const arr = Array.from(arguments);  // array static method
  const arr = [...arguments]; // spread syntax

  // function a(value,index){
  //   total += value;
  // }
  // arr.forEach(,)

  // arr.forEach(function(value){
  //   total += value;
  // })

  // return total

  console.log(arr);

  // return arr.reduce(function(acc,current,index){
  //    return acc + current
  // },0)

  // arguments => 유사배열 => forEach 빌려쓰기 .call

  // first: 빌리는 대상
  // second : 인수
  // Array.prototype.forEach.call(arguments,function(value){
  //   total += value;
  // })

  // return total

  // 바꿔치기
  arguments.__proto__ = Array.prototype;

  console.log(arguments);
};

const result = calculateTotal(1000, 3000, 5000, 2300, 5000, 2300, 3000, 1000);

console.log(result);

console.clear();

// forEach : 값을 반환하지 x
// reduce  : 새로운 값을 반환 (any)
// map     : 새로운 배열을 반환

const friends = ['이승은', '이소민', '황유정', '문태민'];

const newFriends = friends.map(function (name, index) {
  return `<li data-order="${index}">이름 : [FE]${name}</li>`;
});

console.log(newFriends);

document.body.insertAdjacentHTML('beforeend', newFriends.join(''));

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 실행 : hello() (x)
// namedFunctionExpression() (o)

// 콜백 함수 (표현)식
let cb = function (condition, success, fail) {
  if (condition) success();
  else fail();
};

// cb (
//   false,
//   () => console.log('성공입니다.'),
//   () => console.log('실패입니다.')
// )

cb(
  true,
  function () {
    console.log('성공입니다');
  },
  function () {
    console.log('실패입니다');
  }
);

console.clear();

function movePage(url, success, fail) {
  if (url.includes('https')) {
    success(url);
  } else {
    fail();
  }
  // success()
  // fail()
}

movePage(
  'https://www.naver.com',
  function (url) {
    console.log(
      `현재 입력하신 url은 ${url} 입니다. 3초 뒤 해당 사이트로 이동합니다.`
    );
    // setTimeout(() => {
    //   location.href = url
    // }, 3000);
  },
  function () {
    console.log('잘못된 url 정보를 입력하셨습니다.');
  }
);

// 이해 못해도 됨
function getGeolocation(success) {
  navigator.geolocation.getCurrentPosition(function (so) {
    const data = so.coords.latitude;

    success(data);
  });
}

// Promise
// async, await

// getGeolocation(function(value){
//   console.log(value);
// })

// const value = getGeolocation();

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression : 오늘날 많이 쓰지 않음(모듈 프로그래밍 사용)

// 모듈 프로그래밍
// import {solution as 문제} from './soution.js'
let IIFE;

// encapsulation(캡슐화) => 클로저에 많이 쓰임

// (function () {
//   var c = 10;

//   console.log(c);
// })();

// console.log(c);

function solution() {}

const MASTER = (function (문제) {
  console.log(문제);
  var uuid = 'zxasnzxj!@#as8d_12387zj$$!ak';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})(solution);

console.log(MASTER.setKey('새로운 암호화 비밀번호'));
console.log(MASTER.getKey());

console.clear();

// rem : html의 폰트 사이즈 기반

// rem(20); // 1.25rem
// rem('25px'); // 1.5626rem
// rem('30px', 10); // 3rem

/* 다음 함수를 작성해봅니다.
-------------------------------------------------------------------------- */

// rem(pxValue: number | string, base : number):string;
let rem;

function calcRem(pxValue, base = 16) {
  if (typeof pxValue === 'string' && pxValue.endsWith('px')) {
    pxValue = parseFloat(pxValue);
  }

  if (typeof pxValue !== 'number' || isNaN(pxValue)) {
    throw new Error("pxValue는 숫자 또는 'px'로 끝나는 문자열이어야 합니다.");
  }

  rem = (pxValue / base).toFixed(4) + 'rem';
  return rem;
}

console.log(calcRem(30)); // 1.8750rem
console.log(calcRem('25px')); // 1.5625rem
console.log(calcRem('20px', 10)); // 2.0000rem

// 함수 만들기
// 1. 함수의 이름
// 2. 함수의 실행부 작성
// 3. 매개변수 확인
// 4. return value
// 5. validation
// 6. Test Driven Development (TDD) - 테스트 주도 개발

/* -------------------------------------------------------------------------- */
console.clear();

// setter function : 값을 설정정
function setCss(node, prop, value) {
  if (typeof node !== 'string' || !node.startsWith('.')) {
    throw new TypeError("첫 번째 인수는 '.'으로 시작하는 문자열이어야 합니다.");
  }

  if (typeof prop !== 'string' || typeof value !== 'string') {
    throw new TypeError('두 번째와 세 번째 인수는 문자열이어야 합니다.');
  }

  if (!(prop in document.body.style)) {
    throw new ReferenceError('두 번째 인수는 유효한 CSS 속성이어야 합니다.');
  }

  node = document.querySelector(node);
  node.style[prop] = value;
}

setCss('.first', 'color', 'orange');
setCss('.second', 'font-size', '20px');

/* -------------------------------------------------------------------------- */

// getter function : 값을 가져옴
function getCss(node, prop) {
  if (typeof node !== 'string' || !node.startsWith('.')) {
    throw new TypeError("첫 번째 인수는 '.'으로 시작하는 문자열이어야 합니다.");
  }

  if (typeof prop !== 'string') {
    throw new TypeError('두 번째 인수는 문자열이어야 합니다.');
  }

  if (!(prop in document.body.style)) {
    throw new ReferenceError('두 번째 인수는 유효한 CSS 속성이어야 합니다.');
  }

  node = document.querySelector(node);
  let value = getComputedStyle(node)[prop];
  return value;
}

console.log(getCss('.first', 'font-size')); // 32px

/* -------------------------------------------------------------------------- */
// 합치기
function css(node, prop, value) {
  // if (!value) {
  //   return getCss(node, prop);
  // } else {
  //   setCss(node, prop, value);
  // }

  !value ? getCss(node, prop) : setCss(node, prop, value);
}

// css('.first', 'color'); // get
// css('.first', 'color', 'blue'); // set

// getCss와 setCss를 사용하지 못하게 하는 방법 : 즉시 실행 함수 안에 넣기(요즘은 잘 안씀씀)
// 오늘날 : 원하는 것만 export
const css2 = (function () {
//...
})();