/**
 * 입력한 선택자에 해당하는 DOM 요소 반환
 *
 * @param {string} node - CSS 선택자 문자열 ex) '.class', '#id', 'div'
 * @param {Document | HTMLElement} context 부모가 될 컨텍스트 노드(기본값: docuument)
 * @returns {HTMLElement | null} 매칭된 첫 번째 요소 또는 null
 *
 * @example
 * const btn = getNode('#button');
 * const li = getNode('li', '.navigation');
 */

function getNode(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context);

  return context.querySelector(node);
}

function getNodes(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context);

  return context.querySelectorAll(node);
}
