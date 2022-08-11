//add task dynamically
const plus = document.querySelector('.plus');
const taskbox = document.querySelector('.select-box');
const inputText = document.querySelector('.inputText');
let optionsList = document.querySelectorAll('.option');
let optionsRadio = document.querySelectorAll('.radio');
const selectedTask  = document.querySelector('.selectedTask');

// Add a Task
plus.addEventListener('click', () => {
    function emptyTask(){
        if (!inputText.value){return true;}
    }
    function createTask(){
        const task = document.createElement('div');
        task.classList.add('option');
        task.innerHTML = `<input type="radio" class="radio" id="${inputText.value}">
        <label for=${inputText.value}>${inputText.value}</label>`;
        taskbox.appendChild(task);
    }
    if (emptyTask()){
        alert('Add a task first!');
        return;
    }
    createTask(); 
    inputText.value = "";
    optionsRadio = document.querySelectorAll('.option');
    optionsList = document.querySelectorAll('.option');
});

//Select a Task
//NOT GETTING UPDATED LIST BECAUSE IT RUNS INITIALLY
optionsList.forEach(o => {
    o.addEventListener('click',() => {
        console.log(o);
        for (let i = 0; i<optionsList.length; i++){
            optionsList[i].classList.remove('active');
        }
        selectedTask.textContent = o.textContent;
        o.classList.add('active');
        reset();

    })
});
// COUNTDOWN
const countdownEl = document.querySelector('.timer');
const breakPom = document.querySelector('.break');
const Pom = document.querySelector('.pom');
const start  = document.querySelector('.start');
let startingMinutes = 25;
let savmin;
let savsec = 0;
let refresh;
let time = startingMinutes * 60 + savsec;

function updateCountdown() {
    const minutes = Math.floor(time / 60); // rounds a number DOWN to the nearest integer
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds; 
    countdownEl.innerHTML = `${minutes}:${seconds}`;

    time--;

    time = time < 0 ? 0 : time; 
    savmin = minutes;
    savsec = seconds;
};
//audio
const audioTab = document.querySelector(".audio2");
const audio = document.querySelector(".audio");
const mute = document.querySelector(".mute");
const play = document.querySelector(".play");
const volUp = document.querySelector(".up");
const volDown = document.querySelector(".down");

mute.addEventListener('click', () => {
    if (audio.muted){
        return audio.muted = false;
    } else{ return audio.muted = true}
});
play.addEventListener('click', () => {
    if (audio.paused){
        return audio.play();
    } else{ return audio.pause()}
})
volUp.addEventListener('click', () => {
    audio.volume = audio.volume + 0.2;
})
volDown.addEventListener('click', () => {
    audio.volume = audio.volume - 0.2;
    // audio.volume < 0 ? audio.volume + 0.2: null;
})
function reset(){ //reset ng 25 mins dat to sa pomo lang muna
    if(confirm("This will reset the timer! Continue?")){
        countdownEl.innerHTML = `25:00`;
        time = 1500;
        clearInterval(refresh);
        start.innerHTML = "START";
        audio.currentTime=0;
        audio.pause();
        audioTab.style.display='none';
    }else{return;}
}

start.addEventListener('click', () => {
    if (start.innerHTML == "START"){
    refresh = setInterval(updateCountdown, 1000); //update every 1 second
    refresh;
    start.textContent = "PAUSE";
    audio.play();
    audioTab.style.display='block';
    }else{ //pause
        audioTab.style.display='none';
        start.textContent = "START";
        clearInterval(refresh);
        startingMinutes = savmin + savsec;
        audio.pause();
    }  
});
breakPom.addEventListener('click', () => {
    if (confirm("Timer will Reset? Continue?")){
        countdownEl.innerHTML = `5:00`;
        time = 300;
        clearInterval(refresh);
        start.innerHTML = "START";
        audio.currentTime=0;
        audio.pause()
        audioTab.style.display='none';

    }else{ return;}
})
Pom.addEventListener('click', () => {
    if (confirm("Timer will Reset? Continue?")){
        countdownEl.innerHTML = `25:00`;
        time = 1500;
        clearInterval(refresh);
        start.innerHTML = "START";
        audio.currentTime=0;
        audio.pause();
        audioTab.style.display='none';
    }else{ return;}
})

//hamburger
let sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".bx2");
menu.addEventListener('click', () =>{
    console.log("hello world");
    console.log(sidebar);
    sidebar.classList.toggle('active');
})


