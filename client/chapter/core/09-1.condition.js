/* ---------------- */
/* Condition        */
/* ---------------- */

// const name = prompt("자바스크립트의 '공식' 이름은 무엇일까요?",'');
// if(name === 'ECMAScript') alert ("정답입니다!");
// else alert("모르셨나요? 정답은 ECMAScript입니다!")

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
function watchingMovie() {
  let didWatchMovie = confirm('너 야당 영화 봤어?');
  console.log(didWatchMovie);

  if (didWatchMovie) {
    console.log('그 영화 재밌더라~ 역시👍');
  } else {
    let goingToWatchMovie = confirm('보러 갈래?');

    if (goingToWatchMovie) {
      console.log('그래 정말 재밌겠다!');
      let withWho = prompt('누구랑 볼거니?');
      if (withWho === '너') {
        console.log('그래 좋아 같이 보자~~!');
      } else if (withWho === '가족') {
        console.log('재밌게봐!');
      } else {
        console.log('나 말고 누구야??');
      }
    } else {
      console.log('나도 사실 별로야');
    }
  }
}

// 영화 볼거니?

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// 멀티 조건부 연산자 식
const message = didWatchMovie.includes('yes')
  ? '영화 재밌더라 한번 봐봐'
  : goingToWatchMovie === 'yes'
    ? '언제 볼까? 재밌겠다!!'
    : '그래...';

console.log(message);
