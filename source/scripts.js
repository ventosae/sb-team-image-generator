var teamA = document.querySelector(".form_select--a");
var teamB = document.querySelector(".form_select--b");
var date = document.querySelector(".form_date-input");
var time = document.querySelector(".form_time-input");
var inputTeamA = teamA.options[teamA.selectedIndex].value;
var inputTeamB = teamB.options[teamB.selectedIndex].value;
var timeInput = time.value;
var dateInput = date.value;
var TEAMS = {
    titans: {
        image: './image/titans.png',
        color: '#fad701'
    },
    storm: {
        image: './image/storm.png',
        color: '#2075bc'
    },
    broncos: {
        image: './image/broncos.png',
        color: '#2075bc'
    },
    roosters: {
        image: './image/roosters.png',
        color: '#fad701'
    },
    sharks: {
        image: './image/sharks.png',
        color: '#008bc1'
    },
    panthers: {
        image: './image/panthers.png',
        color: '#000000'
    }
};
var imageA = document.querySelector('#image-a');
var imageB = document.querySelector('#image-b');
var teamsText = document.querySelector('.main_p--teams');
var dateText = document.querySelector('.main_p--date');
var timeText = document.querySelector('.main_p--time');
var teamaValue = inputTeamA;
var teambValue = inputTeamB;
var imageADiv = document.querySelector('.main_image--a');
var imageBDiv = document.querySelector('.main_image--b');


var temaaUpdate = function () {
    var teamA = document.querySelector(".form_select--a");
    var inputTeamA = teamA.options[teamA.selectedIndex].value;
    teamaValue = inputTeamA;
    imageA.src = TEAMS[inputTeamA]["image"];
    imageADiv.style.backgroundColor = TEAMS[inputTeamA]["color"];
    teamsText.innerText = teamaValue.toUpperCase() + " V " + teambValue.toUpperCase();
}

var temabUpdate = function () {
    var teamB = document.querySelector(".form_select--b");
    var inputTeamB = teamB.options[teamB.selectedIndex].value;
    teambValue = inputTeamB;
    imageB.src = TEAMS[inputTeamB]["image"];
    imageBDiv.style.backgroundColor = TEAMS[inputTeamB]["color"];
    teamsText.innerText = teamaValue.toUpperCase() + " V " + teambValue.toUpperCase();
}

var dateUpdate = function () {
    var date = document.querySelector(".form_date-input");
    var dateInput = new Date(date.value);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateText.innerText = dateInput.toLocaleDateString("en-US", options).toUpperCase()
}

function tConv24(time24) {
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = (H % 12) || 12;
    h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
};

var timeUpdate = function () {
    var time = document.querySelector(".form_time-input");
    var timeInput = time.value;
    timeText.innerText = tConv24(timeInput).toUpperCase()
}

teamA.addEventListener('change', temaaUpdate);
teamB.addEventListener('change', temabUpdate);
date.addEventListener('change', dateUpdate);
time.addEventListener('change', timeUpdate);

var canvas = document.createElement('canvas');
document.getElementById("download").addEventListener("click", function() {
    html2canvas(document.querySelector('.main-box'), { scale: 5, width: 802, 
        height: 220}).then(function(canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "html_image.jpeg";
        link.href = canvas.toDataURL("image/jpeg", 1);
        link.target = '_blank';
        link.click();
    });
});