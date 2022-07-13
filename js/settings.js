const state = {
  language: 'en',
  photoSource: 'github', 
  blocks: ['.time', '.date', '.greeting-container', '.footer-center', '.weather', '.player', '.todo-button']
}
let settingsPopUp = document.querySelector(".settings-pop-up");
let settingsButton = document.getElementById("settings-button");
let todoPopUp = document.querySelector(".todo-pop-up");
let todoButton = document.querySelector(".todo-button");
let todoSelect = document.querySelector(".todo-top-left");
let todoSelectOptions = document.querySelector(".todo-select-options");
let todoTopRightPopUp = document.querySelector(".todo-top-right-pop-up");
let todoTopRightButton = document.querySelector(".todo-top-right");
let todoBottomContainer = document.querySelector(".todo-bottom");
let newTodoButton = document.querySelector(".new-todo-button");
const timeVisibilityButton = document.querySelector(".time-visibility");
const dateVisibilityButton = document.querySelector(".date-visibility");
const greetingVisibilityButton = document.querySelector(".greeting-container-visibility");
const quoteVisibilityButton = document.querySelector(".footer-center-visibility");
const weatherVisibilityButton = document.querySelector(".weather-visibility");
const audioVisibilityButton = document.querySelector(".player-visibility");
const todolistVisibilityButton = document.querySelector(".todo-button-visibility");
const todoInput = document.querySelector(".todo-input");
const todoSettings = document.querySelector(".todo-settings"); 
const todoBottomP2 = document.querySelector(".todo-bottom-p2");  
const inboxBox = document.querySelector(".inbox-box"); 
const greenOn = document.querySelector(".green-on"); 

function toggleSettingsButton() { 
  settingsPopUp.classList.toggle('settings-pop-up-active');
}

function toggleTodoButton() {
  todoPopUp.classList.toggle('todo-pop-up-active');
}

function toggleTodoSelect() {
  todoSelectOptions.classList.toggle('todo-select-options-active');
}

function toggleTodoBottom() {
  todoBottomContainer.classList.toggle('todo-bottom-active');
}

function toggleTodoRightButton() {
  todoTopRightPopUp.classList.toggle('todo-top-right-pop-up-active');
}

function toggleNewTodoButton() {
  todoInput.classList.toggle('todo-input-active');
}

function muteNewTodoButton() {
  toggleNewTodoButton();
  newTodoButton.style.display = "none";
}

function switchNewTodoClass() {
  todoBottomP2.textContent = "Switch to Today >";
}

function switchTodoSelect() {
  switchNewTodoClass();
  inboxBox.classList.toggle("selected");
}

function toggleBlock(className, init) {
  let tag = document.querySelector(className);
  if (init) {
    if (localStorage.getItem(className) == null)
    {
      tag.style['opacity'] = 1;
      tag.style['transition'] = '0.5s';
    }
    else {
      tag.style['opacity'] = localStorage.getItem(className);
    }
    return
  }
  tag.style['opacity'] = tag.style['opacity'] == 1 ? 0 : 1;
  tag.style['transition'] = '0.5s';
  localStorage.setItem(className, tag.style['opacity'])
}

settingsButton.addEventListener('click', toggleSettingsButton);
todoButton.addEventListener('click', toggleTodoButton);
todoSelect.addEventListener('click', toggleTodoSelect);
todoSelect.addEventListener('click', toggleTodoBottom);
todoTopRightButton.addEventListener('click', toggleTodoRightButton);
newTodoButton.addEventListener('click', muteNewTodoButton);
todoSettings.addEventListener('click', toggleSettingsButton);
todoBottomP2.addEventListener('click', switchNewTodoClass);
timeVisibilityButton.addEventListener('click', () => toggleBlock(".time"));
dateVisibilityButton.addEventListener('click', () => toggleBlock(".date"));
greetingVisibilityButton.addEventListener('click', () => toggleBlock(".greeting-container"));
quoteVisibilityButton.addEventListener('click', () => toggleBlock(".footer-center"));
weatherVisibilityButton.addEventListener('click', () => toggleBlock(".weather"));
audioVisibilityButton.addEventListener('click', () => toggleBlock(".player"));
todolistVisibilityButton.addEventListener('click', () => toggleBlock(".todo-button"));


state["blocks"].forEach(block => {
  toggleBlock(block, true)

  var checkbox = document.querySelector(`${block}-visibility`);
  if (localStorage.getItem(block) != null) {
    if (localStorage.getItem(block) == 1) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  } else {
    checkbox.checked = true;
  }
});
