//Select Games Dropdown
const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option');

selected.addEventListener('click',() =>{
    optionsContainer.classList.toggle('active');
});

optionsList.forEach(o => {
    o.addEventListener('click',() => {
        selected.innerHTML = o.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active');
    })
});


optionsContainer.addEventListener('click',()=> {
    start.style.display = "block";
    stop.style.display = "block";
    save.style.display = "block";
    reset.style.display = "block";
})


//Using localStorage
const reset = document.querySelector('.reset');
const start = document.querySelector('.start');
const stop = document.querySelector('.pause');
const save = document.querySelector('.save');
const val = document.getElementById('timerVal');
const league = document.getElementById('league');
console.log(reset);
console.log(start);
console.log(save);

function updateClock(){
    if (checkGame()) {alert("Select a Game First!"); return;} 

    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds();
        //adds 0 padding to left
        function addLeadingZeros(num, totalLength) {
            return String(num).padStart(totalLength, '0');
        }
        min = addLeadingZeros(min,2);
        sec = addLeadingZeros(sec,2);
        //find week
        function getWeek(date,day){
            const week = Math.abs(Math.ceil((date - 1 - day) / 7));
            if( week == 0 ){ return week + 1 }
            else if( week == 5 ){ return week - 1 }
            else{ return week };
        };
        //check data in local
        function checkLocal(){
            if (!(localStorage.getItem('dateNow'))){
                localStorage.setItem('dateNow', now);
                localStorage.setItem('Day', 0);//time
                localStorage.setItem('Week', 0);
                localStorage.setItem('Month', 0);
                localStorage.setItem('Total', 0);
                localStorage.setItem('Hours', 0);   
            }
            return;
        }
        //add value +1
        function add(){
            const day = parseInt(localStorage.getItem('Day'));
            const week = parseInt(localStorage.getItem('Week'));
            const month = parseInt(localStorage.getItem('Month'));
            const total = parseInt(localStorage.getItem('Month'));
            localStorage.setItem('Day', day + 1);
            localStorage.setItem('Week', week + 1);
            localStorage.setItem('Month', month + 1);
            localStorage.setItem('Total', total + 1);
            localStorage.setItem('dateNow', now);
            localStorage.setItem('LastTry', selected.textContent);
            const lastTry = localStorage.getItem('LastTry');
            val.innerHTML = `Game: ${lastTry} <br>Day: ${day} <br> Week: ${week} <br> Month: ${month}`
        }
        //save value Local Storage Web
        checkLocal();
        add(); 
        //    
};
// alert("Select a Game First!")
function checkGame(){
    if(selected.textContent == "Select Your Game"){return true;} else{return false;}
    
}
console.log(checkGame());
reset.addEventListener('click',() => {
    checkGame();
    clearInterval(interval);
	seconds = 0;
	time_el.innerText = '00:00:00';
    bg.classList.remove("animation-bg");
})
//save 
function saveData() {
    seconds = 0;
    clearInterval(interval);
    bg.classList.remove("animation-bg");
    time.value = time_el.textContent;
    game.value = selected.textContent;
    if(localStorage.getItem('games')){
        games = JSON.parse(localStorage.getItem('games'));
    }
    else{
        games = []
    }
    games.push(game.value);
    localStorage.setItem('games',JSON.stringify(games));

    if(localStorage.getItem('time')){
        times = JSON.parse(localStorage.getItem('time'));
    }
    else{
        times = []
    }
    times.push(time.value);
    localStorage.setItem('time',JSON.stringify(times));
    console.log(time.value);
    console.log(game.value);
    start.style.display = "none";
    stop.style.display = "none";
    save.style.display = "none";
    reset.style.display = "none";
    time_el.textContent = "00:00:00";
}
save.addEventListener('click',() => {
    /*updateClock();*/
    if(confirm("Do you want to save?")){
        saveData();

    }else {
        return;
    }
    
});

start.addEventListener('click', () =>{
    clearInterval(interval);
	interval = setInterval(timer, 1000);
    bg.classList.add("animation-bg");
})

stop.addEventListener('click',()=>{
    clearInterval(interval);
    bg.classList.remove("animation-bg");
})



//hamburger
let sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".bx2");
menu.addEventListener('click', () =>{
    console.log("hello world");
    console.log(sidebar);
    sidebar.classList.toggle('active');
})





//clock function stuff
const time_el = document.querySelector('.Clock .timer');
const bg = document.getElementsByClassName('outer-circle')[0];
const bell = document.querySelector("#alert1");

let seconds = 0;
let interval ;

function timer(){
    seconds++;

	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds-(hrs*3600))/ 60);
	let secs = seconds % 60;

	if(secs < 10) secs = '0' + secs;
	if(mins < 10) mins = '0' + mins;
	if(hrs < 10) hrs = '0' + hrs;

	time_el.innerText = `${hrs}:${mins}:${secs}`;
    if(time_el.textContent == "00:00:05"){
        bell.play();
        if(confirm("You are playing for 5 seconds. Do you want to continue?")){
            return;
        } else{
            saveData();
        }
    }

    if(time_el.textContent == "00:00:10"){
        bell2.play();
        if(confirm("You are playing for 10 seconds. Consider resting?")){
            return;
        } else{
            saveData();
        }
    }

    if(time_el.textContent == "00:00:15"){
        bell3.play();
        if(confirm("You are playing for 15 seconds. It is time to stop")){
            return;
        }
    }

    if(time_el.textContent == "00:00:20"){
        bell4.play();
        if(confirm("You are playing for 20 seconds. Please Stop Now!")){
            return;
        }
    }
}

//spunds
const bell2 = document.querySelector("#alert2");
const bell3 = document.querySelector("#alert3");
const bell4 = document.querySelector("#alert4");

//stprage

let games;
let times;


let time = document.querySelector('#time');
let game = document.querySelector('#gameSelect');

