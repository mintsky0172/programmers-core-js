import {
  tiger,
  END_POINT,
  renderUserCard,
  delayP,
  renderSpinner,
  getNode,
  changeColor,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

tiger.get(END_POINT);

const userCardInner = document.querySelector('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    const { data } = await tiger.get(END_POINT);

    await delayP(2000);

    // getNode('.loadingSpinner').remove();
    gsap.to('.loadingSpinner', {
      opacity: 0,
      duration: 0.2,
      onComplete() {
        getNode('.loadingSpinner').remove();
        data.forEach((user) => renderUserCard(userCardInner, user));
        changeColor('.user-card');

        gsap.from('.user-card', {
          opacity: 0,
          stagger: 0.1,
          x: -30,
        });
      },
    });
  } catch {
    renderEmptyCard(userCardInner);
    getNode('.loadingSpinner').remove();
  }
}

renderUserList();

/* -------------------------------------------------------------------------- */
// 카드 삭제

function handleDelete(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const id = button.dataset.value;

  tiger.delete(`${END_POINT}/${id}`).then(() => {
    alert('삭제가 완료되었습니다!');

    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDelete);

const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

function handleCreate() {
  const pop = getNode('.pop');
  // pop.style.opacity = 1;
  // pop.style.visibility = 'initial'

  gsap.to(pop, {
    autoAlpha: 1,
  });
}

function handleCancel(e) {
  e.stopPropagation();
  const pop = getNode('.pop');

  gsap.to(pop, {
    autoAlpha: 0,
  });
}

async function handleDone(e) {
  e.preventDefault();
  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  tiger.post(END_POINT, { name, email, website }).then(() => {
    gsap.to('.pop', { autoAlpha: 0 });
    clearContents(userCardInner);
    renderUserList();

    getNode('#nameField').value = '';
    getNode('#emailField').value = '';
    getNode('#siteField').value = '';
  });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);

const registerButton = getNode('.register');
const registerCancelButton = getNode('.register .cancel');
const registerDoneButton = getNode('.register .done');

function handleRegister() {
  gsap.to('.register .pop', { autoAlpha: 1 });
}

function handleRegisterCancel(e) {
  e.stopPropagation();
  gsap.to('.register .pop', { autoAlpha: 0 });
}

function handleRegisterCreate(e) {
  e.preventDefault();

  const name = getNode('#create-name').value;
  const password = getNode('#create-password').value;

  tiger.post(
    'http://localhost:3000/users',
    {
      email: name,
      password: password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

registerButton.addEventListener('click', handleRegister);
registerCancelButton.addEventListener('click', handleRegisterCancel);
registerDoneButton.addEventListener('click', handleRegisterCreate);
