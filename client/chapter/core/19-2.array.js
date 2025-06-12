/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
  {
    id: 0,
    name: '김유하',
    age: 38,
    job: '나니가스키',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/75.jpg',
    imgAlt: '대체 텍스트입니다...',
  },
  {
    id: 1,
    name: '백효영',
    age: 15,
    job: '공주님',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/50.jpg',
    imgAlt: '대체 텍스트입니다...',
  },
  {
    id: 2,
    name: '박진강',
    age: 41,
    job: '기업 이사 전문 업체',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/26.jpg',
    imgAlt: '대체 텍스트입니다...',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

function user(user) {
  // console.log(user);
}

people.forEach(user);

const spans = document.querySelectorAll('span');

spans.forEach((span, index) => {
  span.addEventListener('click', (e) => {
    e.currentTarget.style.color = 'orange';

    console.log();
  });
});

/* 원형 파괴(원본 훼손) ----------------------------- */

// push
// pop
// unshift
// shift

const reverse = people.reverse();
console.log(reverse);
// -> 원본 훼손
// 원본 훼손 방지 : toReversed()

// const splice = people.splice(0, 0, { name: '선범' });
// 0번째에 새로운 데이터 추가
// 원본 훼손 방지 : toSpliced()

const arr = [5, 4, 2, 7, 3, 1];
function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

const sort = arr.sort(compare);
// 원본 훼손 방지 : toSorted()

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

// 사람들의 직업만 모아놓은 배열 반환
const jobs = people.map((user) => user.job);

// 현재 나이에서 전부 +2살 새로운 배열 반환
const ages = people.map((user) => user.age + 2);

const tags = people.map((user) => {
  const template = /* html */ `
  <li>
    <figure>
      <img src="${user.imgSrc}" alt="${user.imgAlt}" />
      <figcaption>이미지 설명..</figcaption>
    </figure>
    <ul>
      <li>이름 : ${user.name}</li>
      <li>나이 : ${user.age}</li>
      <li>직업 : ${user.job}</li>
    </ul>
  </li>`;

  return template;
});

tags.forEach((li) =>
  document.querySelector('ul').insertAdjacentHTML('beforeend', li)
);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

const az = people.find((user) => {
  return user.age > 40;
});

console.log(az);

/* 요소 걸러내기 --------------------------- */

// filter

const mz = people.filter((user) => user.age > 20);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

const total = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

const template = people.reduce((htmlCode, user) => {
  return htmlCode + `<li>${user.name}, ${user.age}, ${user.job}</li>`;
}, '');

document.querySelector('ul').insertAdjacentHTML('beforeend', template);

/* string ←→ array 변환 ------------------ */

const _arr = '안/녕/하/세/요';
// split
// join

const stringToArray = _arr.split('/');

console.log(stringToArray);

const arrayToString = stringToArray.join('-');

console.log(arrayToString);

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 새우', price: 12000, brand: '하림' },
  { name: '냉동 치킨', price: 11000, brand: '곰곰' },
];

const _forEach = (f, i) => {
  for (const a of i) {
    f(a);
  }
};

_forEach((item) => {
  console.log(item);
}, products);

console.clear();

const _map = (f, i) => {
  const arr = [];
  for (const a of i) {
    arr.push(f(a));
  }
  return arr;
};

const newArray = _map((item) => item.price, products);

const _filter = (f, i) => {
  const arr = [];

  for (const a of i) {
    if (f(a)) {
      arr.push(f(a));
    }
  }

  return arr;
};

const product = _filter((item) => item.price < 15000, products);
