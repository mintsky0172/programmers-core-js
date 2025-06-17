/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', ({ currentTarget: target }) => {
  //   console.log('%c section', 'color:dodgerblue');
  //   const target = e.currentTarget;
  //   console.log(e.target, e.currentTarget, this);
  console.log(target);
});

// article.addEventListener('click', () => {
//   console.log('%c article', 'color:hotpink');
// });

// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c p', 'color:orange');
// });

p.addEventListener('mouseenter', (e) => {
  console.log(e.type);
});

p.addEventListener('mouseleave', (e) => {
  console.log(e.type);
});

// cf) mouseover, mouseout

/* 캡처링 ----------------------------------------------------------------- */
