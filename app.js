const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //만약 스트링이 2개이상 쓰이면 아예 상수로 만들어서 쓰는게 나음.
const USERNAME_KEY = "username"; //반복되는 부분이라 오타날까봐 따로 const로 생성!! 습관들이기

function onSubmit(event) {
  event.preventDefault(); //event의 기본동작인 새로고침을 막음
  loginForm.classList.add(HIDDEN_CLASSNAME); //form을 숨김.
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //유저가 \이름을 제출하면 그것을 저장! setItem(key, value);
  //greeting.innerText = "Hello " + username;
  paintGreetings(username);
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
//user정보가 없다면 form의 submit을 기다린 다음 INPUT으로부터 유저정보를 받고 INPUT에서 받은 user를 가진 paintGreetings를 호출.
