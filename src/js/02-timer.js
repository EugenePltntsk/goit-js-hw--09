import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputEl: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector('button[data-start]'),
    inputTimeDatePicker: document.querySelector("#datetime-picker"),
    spanDays: document.querySelector("[data-days]"),
    spanHours: document.querySelector("[data-hours]"),
    spanMinutes: document.querySelector("[data-minutes]"),
    spanSeconds: document.querySelector("[data-seconds]"),

}  

let targetDate = null;
   let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        
      targetDate = selectedDates[0];
      if (options.defaultDate > targetDate) {
        Notiflix.Notify.warning("Please choose a date in the future");
        refs.startBtn.disabled = true;
      } else {
        refs.startBtn.disabled = false;

      }
      console.log(targetDate);
    },
  };

 flatpickr("#datetime-picker", options);


const timer = {
    start() {

       
        intervalId = setInterval(() => {
            const currentTime = Date.now();
            
            const deltaTime = targetDate - currentTime;
            const { days, hours, mins, secs } = getTimeComponents(deltaTime);
            if (deltaTime <= 0) {
                clearInterval(intervalId);
            } else {
                // console.log(`${days}:${hours}:${mins}:${secs}`)
                refs.spanDays.textContent = days;
                refs.spanHours.textContent = hours;
                refs.spanMinutes.textContent = mins;
                refs.spanSeconds.textContent = secs;
            } 
                        
        }, 1000);
    },
};



refs.startBtn.addEventListener("click", event => {
    timer.start()
    refs.inputEl.disabled = true;
    event.target.disabled = true;

})

function pad(value) {
    return String(value).padStart(2, "0");
}


function getTimeComponents(time) {
    const days = pad(
        Math.floor((time / (1000 * 60 * 60 * 24))));
    
    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    
    const mins = pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(
        Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    
}
