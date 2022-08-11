// CLOCK 
function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "";
        //adds 0 padding to left
        function addLeadingZeros(num, totalLength) {
            return String(num).padStart(totalLength, '0');
        }
        min = addLeadingZeros(min,2);
        sec = addLeadingZeros(sec,2);

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [dname, mo, dnum, yr, hou, min, sec, pe];
        for(var x = 0; x < ids.length; x++){
            document.getElementById(ids[x]).firstChild.textContent = values[x];
            //get month name
            if (ids[x] == "month"){
                document.getElementById("month").firstChild.textContent = months[values[x]];
            };
            //get week name
            if (ids[x] == "dayname"){
                document.getElementById("dayname").firstChild.textContent = week[values[x]];
            };
        }
}
var updateClock = setInterval(updateClock,1000);

//hamburger
let sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".bx2");
menu.addEventListener('click', () =>{
    console.log("hello world");
    console.log(sidebar);
    sidebar.classList.toggle('active');
})

const record = document.querySelector('.gameRec');
const record2 = document.querySelector('.gameRec2');
const record3 = document.querySelector('.gameRec3');
const record4  = document.querySelector('.gameRec4');
const record5 = document.querySelector('.gameRec5');
const record6 = document.querySelector('.gameRec6');
const record7 = document.querySelector('.gameRec7');
const record8 = document.querySelector('.gameRec8');
const record9 = document.querySelector('.gameRec9');
const record10 = document.querySelector('.gameRec10');
const record11 = document.querySelector('.gameRec11');
const record12 = document.querySelector('.gameRec12');

let records;
let times;

records = JSON.parse(localStorage.getItem('games'));
times = JSON.parse(localStorage.getItem('time'));
record.innerHTML = records[0] + " " + times[0];

record2.innerHTML = records[1] + " " + times[1];
if(record2.innerHTML == "undefined undefined"){
    record2.innerHTML = " ";
}

record3.innerHTML = records[2] + " " + times[2];
if(record3.innerHTML == "undefined undefined"){
    record3.innerHTML = " ";
}

record4.innerHTML = records[3] + " " + times[3];
if(record4.innerHTML == "undefined undefined"){
    record4.innerHTML = " ";
}

record5.innerHTML = records[4] + " " + times[4];
if(record5.innerHTML == "undefined undefined"){
    record5.innerHTML = " ";
}

record6.innerHTML = records[5] + " " + times[5];
if(record6.innerHTML == "undefined undefined"){
    record6.innerHTML = " ";
}

record7.innerHTML = records[6] + " " + times[6];
if(record7.innerHTML == "undefined undefined"){
    record7.innerHTML = " ";
}

record8.innerHTML = records[7] + " " + times[7];
if(record8.innerHTML == "undefined undefined"){
    record8.innerHTML = " ";
}

record9.innerHTML = records[8] + " " + times[8];
if(record9.innerHTML == "undefined undefined"){
    record9.innerHTML = " ";
}

record10.innerHTML = records[9] + " " + times[9];
if(record10.innerHTML == "undefined undefined"){
    record10.innerHTML = " ";
}

record11.innerHTML = records[10] + " " + times[10];
if(record11.innerHTML == "undefined undefined"){
    record11.innerHTML = " ";
}

record12.innerHTML = records[11] + " " + times[11];
if(record12.innerHTML == "undefined undefined"){
    record12.innerHTML = " ";
}




