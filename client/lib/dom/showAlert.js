import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';
import { isString } from '../utils/type.js';

export function showAlert(node, message, timeout = 1000, className) {
  if (isString(node)) node = getNode(node);

  // className이 유효하지 않은 경우 처리
  if (!className || typeof className !== 'string') {
    console.error(
      'showAlert 함수에 전달된 className이 유효하지 않습니다:',
      className
    );
    return;
  }

  addClass(node, className);
  node.textContent = message;

  setTimeout(() => {
    removeClass(node, className);
  }, timeout);
}
