/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  legs = 4;
  tail = true;
  #nickName = 'tiger';

  constructor(name) {
    this.name = name;
    this.stomach = [];
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
    console.log(`${this.#nickName}이 맛있게 밥을 먹습니다.`);
  }
}

const animal = new Animal('몽실이');

class Tiger extends Animal {
  constructor() {
    super(name);
    this.pattern = '호랑이 무늬';
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  static bark(sound) {
    return sound + 'tiger';
  }
}

const tiger = new tiger('호돌이');

// class Aray extends Object {
//     reuduce () {

//     }
//     forEach () {

//     }
//     map() {

//     }
//     static isArray(){

//     }

//     static from(){

//     }
// }

// 1. 버튼 선택
// 2. textContent 수정
// 3. 클릭 이벤트 바인딩
// 4. 태그 생성하기
// 5. 태그 렌더링하기기

class Button {
  constructor(obj) {
    const {target, content} = 
    this.button = document.querySelector(selector);
    this.button.textContent = content;
    this.count = 0;

    this.attatchEvent();
  }

  createTag(){
    return `<div>clicked</div>`
  }

  #render(){
    document.body.insertAdjacentHTML('beforeend', this.createTag());
  }

  handleClick(){
    // this.#render;
    console.log(this);
  }

  attatchEvent(){
    this.button.addEventListener('click',()=> this.handleClick)
  }
}



const btn = new Button(
    target: '.btn',
    content: 'click me!'
);


class User {
    #pw;

    constructor(id, pw) {
        this.id: id;
        this.#pw: pw;
    }

    hashPassword(pw){
        this.#pw = `hashCODE ${pw} 소금 후추`
        return this.#pw
    }

    checkPassword(pw){
        return this.#pw === this.hashPassword(pw);
    }
}

const user =  new User('tiger', 'hello123');

class Admin extends User {
    constructor(id, pw) {
        super(id, pw);
        this.role = 'admin';
    }

    isAdmin(){
        return true;
    }

    banUser(user) {
        console.log(`${user.id} 계정이 관리자 (${this.id})에 의해 정지되었습니다.`);

        user.isBanned = true;
    }

}

const admin = new Admin('admin', 'admin');

class Guest extends User {
    contructor(){
        const guestId = `guest_${++guestCount}`;
        super(guestId, null);
        this.role = 'guest';
    }

    isGuest(){
        return true;
    }

    checkPassword(){
        return false;
    }
}