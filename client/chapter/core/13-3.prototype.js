/*
1. constructor 작성하기
    - this....
2. click 이벤트 연결하기
    - handleClick
    - attatchEvent
3. input값 가져오기 / 설정하기
    - get ...
    - set ...
4. 태그 렌더링하기
    - createTag
    - render
5. 데이터 보관하기
    - todoListArray
*/

class Todo {

  input = null;
  button = null;
  renderPlace = null;
  todoListArray = null;

  constructor({input,button,renderPlace}){
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.attachEvent();
  }

  get currentInputTodoData (){
    return this.input.value;
  }

  set currentInputTodoData (value){
    this.input.value = value;
  }

  addTodoData(){
    if (this.currentInputTodoData === '') return;
    this.todoListArray.push(this.currentInputTodoData);
    console.log(this.todoListArray);
    
  }

  createTag(){
    return `<li>${this.currentInputTodoData}</li>`
  }

  #render(){
    if (this.currentInputTodoData === '') return;
    this.renderPlace.insertAdjacentHTML('beforeend',this.createTag());
    this.currentInputTodoData = ''
  }


  handleClick(){
    console.log( this.createTag() );
    this.#render();
    
  }

  attachEvent(){
    this.button.closest('form').addEventListener('submit',(e)=> {
      e.preventDefault();
      this.addTodoData();
      this.handleClick();
    })
  }
}



const todo = new Todo({
  input:'.todoInput',
  button:'.todoButton',
  renderPlace:'.todoList'
});
