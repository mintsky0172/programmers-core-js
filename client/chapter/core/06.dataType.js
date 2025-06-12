/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let nothing; // 직접undefined 할당하지 말기
console.log(typeof nothing);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'tiger'; // string literal
const single = 'hello';
const backtick = `hello ${double / 10} 선범이야`;

console.log(backtick);
console.clear();

// * 문자를 만들 수 있는 독특한 방법
const str = new String('hello'); /// 문자 생성자 함수(string constructor function)
console.log(str);

// console.log(single);
// console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let integer = 123456;
let float = 123.456;

console.log(typeof integer);
console.log(typeof float);

const num = new Number(20); /// number 생성자 함수
console.log(num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let big2 = 123456n;
console.log(typeof big2);

//  새로 나온 것 : 앞에 new 키워드 안 넣어도 됨
const b = BigInt(3);
console.log(b);

// 6. 참(true, yes) 또는 거짓(false, no)
let yes = true;
let no = false;
console.log(typeof yes);
console.log(typeof no);

const bool = new Boolean(false);
console.log(bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let entity = {
  name: 'somin',
};

console.log(typeof entity);

const newObj = new Object({});
console.log(newObj);

// 8. 고유한 식별자(unique identifier)
let unique = Symbol('uuid');

const uuid1 = Symbol('uuid');
const uuid2 = Symbol('uuid');

console.log(uuid1 === uuid2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
// 일반 함수 => this : 나를 호출한 대상
// 화살표 함수(arrow function) : this를 바인딩하지 x(상위 컨텍스트에서 this를 찾음)

/*
1: normal function method
2: arrow fuunction method -> 객체의 메서드로 잘 사용하지 않음
3: concise method : 가장 많이 쓰임
*/

const obj = {
  name: 'tiger',
  age: 30, // 프로퍼티(key와 value의 쌍)
  sayHi: function () {
    console.log(this); // 메서드 : 객체 안에 들어 있는 함수
  },
  sayHi2: () => {
    console.log(this); // window
  },
  sayHi3() {
    console.log(this);
  },
};

console.log(obj);

// Array

const arr = ['a', 100, { name: 'tiger' }, ['a', 'b'], true, () => {}];

console.log(arr);

// function

function a() {
  console.log('a함수가 실행됐습니다.');
}

a();

console.log(a());
// -> undefined 반환

function a2() {
  return 'a2함수가 실행됐습니다.';
}

console.log(a2());

function 붕어빵틀(재료) {
  return `따끈하고 맛있는 ${재료}맛 붕어빵입니다.`;
}

const 팥붕 = 붕어빵틀('팥');
const 슈붕 = 붕어빵틀('슈크림');
const 피붕 = 붕어빵틀('피자');
const 와붕 = 붕어빵틀('와사비');

console.log(슈붕);

const f = new Function('aa');
console.log(f);

// this : 나를 호출한 대상
