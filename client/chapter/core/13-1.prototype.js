/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  get eat() {
    // getter
    return this.stomach;
  },
  set eat(food) {
    // setter
    this.stomach = [];
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.prey = target;
    this.eat = this.prey;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  name: '백돌이',
  color: 'white',
  __proto__: tiger,
};

// 생성자 함수

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.getEat = function () {
    return this.stomach ?? [];
  };
  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  };
}

const _animal = new Animal();

function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  };
}

Tiger.prototype = _animal;

const _tiger = new Tiger('호돌이');

/* -------------------------------------------------------------------------- */
// Call의 사용법
// function instance method
// f.call
// f.apply
// f.bind

function sum(a, b) {
  console.log(this);
  return a + b;
}

// Object.prototype.hasOwnProperty.call(obj, key);
const _call = sum.call({}, 10, 20);
const _apply = sum.apply({}, [10, 20]);
const _bind = sum.bind({}, 20, 30);

function handleClick() {}

target.addEventListener('click', handleClick.bind({}));
