/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval, console } = window;

/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload, pathname } =
  location;

console.log(search);

// http: hyper text transfer protocol
// href : http://localhost:5500/index.html?type=listing&page=2#title
// protocol : http: / https:
// host : 서버의 주체자(localhost:5500)
// search: ?type=listing&page=2
// hash : 이정표의 역할(#title)

const urlParams = new URLSearchParams(location.search);

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }

// 바닐라 자바스크립트로 SPA 프로젝트를 만들기엔 한계가 있음

/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

function getGeolocation(success) {
  navigator.geolocation.getCurrentPosition((data) => {
    const { latitude: lat, longitude: long } = data.coords;
    success({
      lat,
      long,
    });
  });
}

getGeolocation((data) => {
  //   console.log(data);
});

function _getGeolocation() {
  const p = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude: lat, longitude: long } = data.coords;
      resolve({ lat, long });
    });
  });
  return p;
}

_getGeolocation()
  //   .then((data) => console.log(data))
  .then();

// async await
// const {lat, long} = _getGeolocation();

// 스트리밍
// navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
// //   console.log(stream);
//   document.querySelector('#videoElement').srcObject = stream;
// });

/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

// screen : 모니터 전체 사이즈
// availWidth, availHeight: 실제 쓸 수 있는 모니터 사이즈
// orientation : landscape 모드인지 portrait 모드인지
// innerWidth, innerHeight: 사용자가 보고 있는 브라우저의 크기

/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;

// back: 뒤로가기
// forward: 앞으로 가기
// -> 사용자에게 강제로 뒤로 보내거나 앞으로 보내야 할 때

// go : 숫자로 뒤로 가거나 앞으로 가기(음수면 뒤로가기)
// length : 뒤로가기, 앞으로가기 가능 개수
// pushState, replaceState: 주소 바꾸기
// => 주소만 바꾸기 때문에 에러는 안 뜸(Single Page Application) <-> MPA(Multi Page Application)
// => 새로고침하면 에러남
// 바닐라 자바스크립트로 SPA 만들기 : barba.js
// SPA의 단점 : SEO가 안좋음 -> SSG 사용

// SPA 홈페이지 만들기
const links = document.querySelectorAll('a');

function about() {
  return `
    <h1>About PAGE 입니다!</h1>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias provident expedita aspernatur cupiditate amet repellat magni? Numquam minima exercitationem ratione? Consectetur doloribus incidunt iste nam odio nihil exercitationem eaque magnam.</p>
    </div>
  `;
}

const routes = {
  '/': '<h1>Home PAGE 입니다~!~!</h1>',
  '/about': about(),
  '/contact': '<h1>Contact PAGE 입니다!</h1>',
};

const app = document.querySelector('#app');

function router() {
  const path = location.pathname;
  app.innerHTML = routes[path] || `<h1>404 not found</h1>`;
}

links.forEach((a) => {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.href;

    history.pushState({ page: 2 }, '', href);
    router();
  });
});

window.addEventListener('popstate', (e) => {
  console.log(e.state);
});
