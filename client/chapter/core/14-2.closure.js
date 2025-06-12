// o_k 개념은 이해했습니다. 그런데 어디다 써요?

const button = document.querySelector('.btn');

const handleClick = (() => {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
})();

button.addEventListener('click', handleClick);

/* -------------------------------------------------------------------------- */

document.querySelector('.first').addEventListener('click', () => {
  console.log('hit');

  button.removeEventListener('click', handleClick);
});

function bindEvent(node, eventType, fn) {
  if (typeof node === 'string') node = document.querySelector(node);
  node.addEventListener(eventType, fn);

  return () => node.removeEventListener(eventType, fn);
}

const remove = bindEvent('.first', 'click', handleClick);

/* -------------------------------------------------------------------------- */

function useState(init) {
  let value = init;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [value, setValue] = useState('hello')

const read = a[0];
const write = a[1];
