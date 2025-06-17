/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

// ** wheel !== scroll

const first = getNode('.first');

// first.onclick = () => {
//   console.log('hit');
// }; // 잘 안씀

// function handler(e) {
//   console.log(e.wheelDeltaY);

//   if (e.wheelDeltaY > 0) {
//     //
//     console.log('up');
//   } else {
//     //
//     console.log('down');
//   }
// }

function handler(e) {
  console.log(e.offsetX, e.offsetY);
}

first.addEventListener('click', handler);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

/* -------------------------------------------------------------------------- */

const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall({ offsetX: x, offsetY: y }) {
  // const {offsetX:x, offsetY:y} = e;
  //   const x = e.offsetX;
  //   const y = e.offsetY;

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px)`;
}

// ground.addEventListener('click', handleBall);

/* -------------------------------------------------------------------------- */
// throttle & debounce
// 스로틀 : 수도꼭지를 쫄쫄쫄 틀음
// 디바운스 : 이벤트가 끝나면 그때만 실행되게 함

function handleMove(e) {
  console.log(this, e);
}
ground.addEventListener('mousemove', throttle(handleMove));

const a = debounce(handleMove);

debounce();
function debounce(f, limit = 1000) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      f.call(this, e);
    }, limit);
  };
}

debounce(() => {
  console.log('hello');
}, 1000);

function throttle(f, limit = 1000) {
  let wait = false;

  return function (...args) {
    if (!wait) {
      f.apply(this, args);
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}
