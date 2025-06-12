/* ---------------- */
/* Switch           */
/* ---------------- */

const a = 15;

switch (a) {
  case 10:
    console.log('값이 너무 낮습니다.');
    break;
  case 15:
    console.log('정답입니다!');
    break;
  case 20:
    console.log('값이 너무 높습니다.');
    break;
  default:
    console.log('숫자를 입력해주세요.');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LUNCH;

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마 꿈나라에 있을 것이다.');
    break;
}

console.clear();

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */

// prompt를 사용해 숫자를 입력받는다.(0~6까지)
// 받은 숫자를 사용해서 switch case 문 작성
/*
0 : 일
1 : 월
2 : 화
3 : 수
4 : 목
5 : 금
6 : 토
*/

// let number = prompt('0~6까지 숫자를 입력하세요.');
function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay(value) {
  switch (value) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

const day = getDay(getRandom(7));
console.log(day);

// getDay 함수를 가지고 주말인지 평일인지 구분할 수 있는 함수 만들기 (weekend)

function weekend() {
  // 요일 가져오기
  const today = getDay(getRandom(7));

  // if(today.includes('토') || today.includes('일')){
  //   return `오늘은 ${today}요일 입니다. 그러므로 주말입니다.`
  // }

  // return `오늘은 ${today}요일 입니다. 그러므로 평일입니다.`

  // 요일 조건 처리 => 주말/평일

  // const day = today.includes('토') || today.includes('일') ?
  return today.includes('토') || today.includes('일')
    ? `오늘은 ${today}요일입니다. 그러므로 주말입니다.`
    : `오늘은 ${today}요일입니다. 그러므로 평일입니다.`;
}
// return day;
