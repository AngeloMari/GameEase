//DATA TO BE PLACE IN CHART
//data days of week
// console.log("TIETIETITEI",dataTime);
// console.log("eksdi",dataSesh);
const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];
//(e.g. monday{5min}) no session tab = no time
let daysData = [12, 19, 3, 5, 2, 3,4];

//data game label 1,2,3
const gameLabel = ['Game 1',"Game 2", "Game 3"];
//(e.g. Game1{10min})
let gameData = [10,35,100];

//CHART DATA
//setup
const dataDaysWeek = {
    labels: days,
    datasets: [{
        data: daysData,
        borderColor:[
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(219, 181, 102, 1)'
        ],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(219, 181, 102, 0.2)'
        ],
        borderWidth: 2,
        hoverOffset: 20,
    }]
};
const dataGameLabel = {
    labels: gameLabel,
    datasets: [{
        data: gameData,
        borderColor:[
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
        ],
        borderWidth: 2,
        hoverOffset: 20,
    }]
};
//options
const optionDays = {
    plugins:{
        legend:{
            position:"bottom",
            labels: {
                usePointStyle: true,
                pointStyle: 'rectRot',
                color: 'wheat',
            }
        },
        title:{
            display: true,
            text:"Last 30 Days",
            color: 'white',
        }
    }
};
const optionGames = {
    plugins:{
        legend:{
            position:"bottom",
            labels: {
                usePointStyle: true,
                pointStyle: 'star',
                color: 'wheat',
            }
        },
        title:{
            display: true,
            text:"Last 30 Days",
            color: 'white',
        }
    }
};
//config
const configDaysWeek = {
    type: 'pie',
    data: dataDaysWeek,
    options: optionDays
};
const configGameLabel = {
    type: 'doughnut',
    data: dataGameLabel,
    options: optionGames
};

//render
const daysOfWeekChart = new Chart(
    document.getElementById('daysOfWeekChart').getContext('2d'),
    configDaysWeek
);
const gameLabelChart = new Chart(
    document.getElementById('gameLabelChart').getContext('2d'),
    configGameLabel
);
