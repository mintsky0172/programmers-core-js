/*
[phase-1]
1. 주접 떨기 버튼을 클릭하는 함수
 - 주접 떨기 버튼 가져오기
 - 이벤트 연결 'click'
2. input 값 가져오기
 - input.value
3. data 함수에서 주접 이름 넣고 꺼내기
 - n번째 주접 pick하기

 [phase-2]
 5. 예외 처리
  - 이름이 없을 경우 에러
  - 숫자만 들어오면 에러
*/

import {
  getNode,
  clearContents,
  showAlert,
  isNumericString,
  shake,
} from './lib/index.js';
import jujeobData from './data/data.js';
import { getRandom } from './lib/math/index.js';
import { copy } from './lib/utils/index.js';

const button = getNode('#submit');
const resultElement = getNode('.result');

function handleClick(e) {
  e.preventDefault();

  const input = getNode('#nameField');
  const name = input.value;
  const resultElement = getNode('.result');

  if (!name) {
    // '.alert-error' 요소 가져오기
    showAlert('.alert-error', '공백 허용 안됨', 2000, 'is-active');
    // addClass('#nameField', 'shake');
    shake('#nameField');

    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '정확한 이름을 입력해 주세요', 2000, 'is-active');
    shake('#nameField');
    return;
  }

  const jujeob = jujeobData(name)[getRandom(jujeobData(name).length - 1)];
  resultElement.textContent = jujeob;
  clearContents(input);
}

function handleCopyClipboard() {
  const text = this.textContent;
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드에 복사됨', 2000, 'is-active');
  });
}

button.addEventListener('click', handleClick);

resultElement.addEventListener('click', handleCopyClipboard);
