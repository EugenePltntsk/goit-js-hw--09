// const date1 = Date.now();

// setTimeout(() => {
//     const date2 = Date.now();
//     console.log(date1, date2)
//     console.log(date2 - date1);
// }, 3000);

const refs = {
    inputEl: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector('button[data-start]'),


}
// console.log(refs.startBtn);



const timer = {
    start() {
        const startTime = Date.now();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const { hours, mins, secs } = getTimeComponents(deltaTime);
            // console.log("start -> currentTime", currentTime);
            // console.log(timeComponents);

            // console.log(`${hours}:${mins}:${secs}`)

            // console.log(`${pad(new Date(deltaTime).getUTCHours())}:${pad(new Date(deltaTime).getMinutes())}:${pad(new Date(deltaTime).getSeconds())}`)
            
        }, 1000);
    },
};

timer.start();

function pad(value) {
    return String(value).padStart(2, "0");
}


function getTimeComponents(time) {
    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    
    const mins = pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(
        Math.floor((time % (1000 * 60)) / 1000));
        return { hours, mins, secs };
    
}
