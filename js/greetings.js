const greeting = document.querySelector(".greeting");
const userName = document.querySelector(".name");

const date = new Date();
const hours = date.getHours();

function getTimeOfDay() {
  if (hours < 6 && hours >= 0) {
    return "night";
  } else if (hours < 12 && hours >= 6) {
    return "morning";
  } else if (hours < 18 && hours >= 12) {
    return "afternoon";
  } else {
    return "evening";
  }
}

getTimeOfDay();

function showGreeting() {
  const timeOfDay = getTimeOfDay();
  
  let greetingTranslation = {
    en: `Good ${timeOfDay},`,
    be: `${timeOfDay == 'night' ? 'Дабранач,' 
                                : timeOfDay == 'morning' ? 'Добрага ранку,'
                                : timeOfDay == 'afternoon' ? 'Добры дзень, '
                                : 'Добры вечар,'}`
  }
  const greetingText = greetingTranslation[state.language];

  let name = localStorage.getItem('name');
  if (name !== null) {
    userName.value = name;
  }

  greeting.textContent = greetingText;
}

userName.addEventListener('input', () => {
  localStorage.setItem('name', userName.value)
})

showGreeting();
