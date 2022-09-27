

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const bodyEl = document.body;
  const startButtonEl = document.querySelector('button[data-start]');
  const stopButtonEl = document.querySelector('button[data-stop]');
  let timerColor;
  
  startButtonEl.addEventListener("click", () => {
    startButtonEl.setAttribute("disabled", true)
    timerColor = setInterval(() => {
            const goalColor = getRandomHexColor();
    bodyEl.style.backgroundColor = goalColor;
    }, 1000)

  });
  

  stopButtonEl.addEventListener("click", () => {
    startButtonEl.removeAttribute("disabled");
    clearInterval(timerColor);
    
  });