function getAttr(node, prop) {
    if (isString(node)) node = getNode(node);
    if (!isString(prop))
      throw new TypeError(
        'getAttr 함수에 전달된 두 번째 인수는 문자 타입이어야 합니다.'
      );
    return node.getAttribute(prop);
  }
  
  getAttr('.first', 'class'); // "first"
  
  function setAttr(node, prop, value) {
    if (isString(node)) node = getNode(node);
    if (!isString(prop))
      throw new TypeError(
        'setAttr 함수에 전달된 두 번째 인수는 문자 타입이어야 합니다.'
      );
  
    if (value === '') {
      node.removeAttribute(prop);
      return;
    }
    if (!value) throw new Error('...');
  
    node.setAttribute(prop, value);
  }
  
  setAttr('.first', 'id', 'hello');
  
  function attr(node, prop, value) {
    if (isUndefined(value)) {
      return getAttr(node, prop);
    } else {
      setAttr(node, prop, value);
    }
  }
  
  const _attr = (node, prop, value) =>
    isUndefined(value) ? getAttr(node, prop) : setAttr(node, prop, value);