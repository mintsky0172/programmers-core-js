/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
// console.log(AandB);

// 논리곱 할당 연산(Logical AND Assignment)
// a &&= b
// a = a && b;
// console.log(a); // ''

// 논리합(또는) 연산자
let AorB = a || b;
// console.log(AorB); // 10

// a ||= b
// a  10

// 부정 연산자
let reverseValue = !value;
// console.log(reverseValue); // false

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisFalsy: false };
// {thisFalsy: false}

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
// 2

console.clear();

function logIn() {
  const name = prompt("Who's there?");

  if (!name) return;

  if (name?.toLowercase() === 'admin') {
    const password = prompt('Password?');

    if (password?.toUpperCase() === 'THEMASTER') alert('Welcome!');
    else if (password === null || password.replace(/\s*/g, ''))
      alert('Autentication fail');
    else alert('Wrong password!');
  } else if (name === null || name.replace(/\s*/g, '')) alert('Canceled');
  else alert("I don't know you");

  console.log(name);
}
