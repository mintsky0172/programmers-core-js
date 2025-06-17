// import { getNode } from './lib/dom/getNode.js';
// import { insertLast } from './lib/dom/insert.js';
// import { clearContents } from './lib/dom/clearContents.js';
import { getNode, insertLast, clearContents } from './lib/index.js';
/*
1. input 선택하기 : getNode or querySelector
2. input 이벤트 바인딩 : addEventListener('input')
3. input의 value 값 가져오기 : input.value
4. 숫자값 더하기 : value + value2
5. result에 출력하기 : insertLast or insertAdjacetHTML
6. clear 클릭 시 모든 값 초기화
*/

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

const clear = getNode('#clear');

function handleInput() {
  const firstValue = +first.value;
  const secondValue = +second.value;
  const total = firstValue + secondValue;

  clearContents(result);

  insertLast(result, total);
}

function handleClear(e) {
  e.preventDefault();

  first.value = '';
  second.value = '';
  result.textContent = '-';
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
