//var to pass data from script to script
//today,week,month,total
var dataTime = ["0h 2min","4h 2min","0h 6min","0h 8min"]; 
var dataSesh = [3,5,7,3+5+7+3];
const tabs = document.querySelectorAll('.state');
const text = document.querySelectorAll('.text');
//Time Session tab check
tabs.forEach(function(tab){
    tab.addEventListener('click', (e) => {
        if(!(e.currentTarget.classList.contains('onState'))){
            if (tabs[0] != tab){ //session ON
                tabs[1].classList.add('onState');
                tabs[0].classList.remove('onState');
                stateON(dataSesh);
            }else{ //time ON
                tabs[1].classList.remove('onState');
                tabs[0].classList.add('onState');
                stateON(dataTime);
            };
        };
    }); 
});
//display data of time/session
const stateON = (data) => {
    count = 0;
    text.forEach((text) => {
        text.textContent = data[count];
        count++;
    });
};
//find day week month total
function getWeek(date,day){
    const week = Math.abs(Math.ceil((date - 1 - day) / 7));
    if (week == 0){return week + 1}
    else if(week == 5){return week - 1}
    else{return week};
};
let d = new Date();
const ddate = d.getDate();
console.log(ddate);
const dday = d.getDay();
console.log(dday);
const dweek = getWeek(ddate,dday);
//for checking only
console.log(`Date: ${ddate}, Day: ${dday}, Week: ${dweek}`);
// if 0 = week, +1, if 5 = week, -1; 4weeks only

//hamburger
let sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".bx2");
menu.addEventListener('click', () =>{
    console.log("hello world");
    console.log(sidebar);
    sidebar.classList.toggle('active');
})


