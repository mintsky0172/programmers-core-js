/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let nothing = undefined;
console.log(typeof nothing);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let big = 'big';
let small = 'small';
let dollar = `${small}`;
console.log(typeof big);
console.log(typeof small);
console.log(typeof dollar);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let integer = 123456;
let float = 123.456;
console.log(typeof integer);
console.log(typeof float);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let big2 = 123456n;
console.log(typeof big2);

// 6. 참(true, yes) 또는 거짓(false, no)
let yes = true;
let no = false;
console.log(typeof yes);
console.log(typeof no);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let entity = {
  name: 'somin',
};

// 8. 고유한 식별자(unique identifier)
let unique = Symbol('uuid');

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

// Array

// function

// this
