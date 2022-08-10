const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //만약 스트링이 2개이상 쓰이면 아예 상수로 만들어서 쓰는게 나음.
const USERNAME_KEY = "username"; //반복되는 부분이라 오타날까봐 따로 const로 생성!! 습관들이기
function onSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); //form은 사라짐.
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //유저가 이름을 제출하면 그것을 저장! setItem(이름, 변수명);
  //greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden class명을 지워줌.
  loginForm.addEventListener("submit", onSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}
