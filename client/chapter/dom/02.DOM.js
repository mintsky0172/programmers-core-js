/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

// const first = document.querySelector('.first');

// console.log(document.body.firstElementChild);

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains

// 1. nav 태그 요소 잡기
console.clear();
const nav = document.querySelector('nav');
console.log(nav);

// 2. nav 태그 안에 있는 about li 태그 요소 잡기
const about = nav.querySelector('.about');
console.log(about);

// 3. data-name이 contact인 li 태그 요소 잡기
const contact = nav.querySelector('li[data-name="contact"]');
console.log(contact);

// 4. nav 요소 안에 있는 모든 자식 요소 잡기
const children = nav.querySelectorAll('*');
const _children = [...nav.children];

console.log(children);
console.log(..._children);

_children.forEach((li) => {
  console.log(li);
});

const li = _children.find((li) => li.matches('.about'));

console.log(li);

