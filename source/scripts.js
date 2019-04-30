var TEAMS = {
    broncos: {
        image: './image/broncos.jpg',
    },
    bulldogs: {
        image: './image/bulldogs.jpg',
    },
    cowboys: {
        image: './image/cowboys.jpg',
    },
    dragons: {
        image: './image/dragons.jpg',
    },
    eels: {
        image: './image/eels.jpg',
    },
    knights: {
        image: './image/knights.jpg',
    },
    panthers: {
        image: './image/panthers.jpg',
    },
    raiders: {
        image: './image/raiders.jpg',
    },
    sea_eagles: {
        image: './image/sea_eagles.jpg',
    },
    storm: {
        image: './image/storm.jpg',
    },
    sharks: {
        image: './image/sharks.jpg',
    },
    warriors: {
        image: './image/warriors.jpg',
    },
    rabbitohs: {
        image: './image/rabbitohs.jpg',
    },
    roosters: {
        image: './image/roosters.jpg',
    },
    titans: {
        image: './image/titans.jpg',
    },
    west_tigers: {
        image: './image/west_tigers.jpg',
    }
};

var teamsObj = Object.entries(TEAMS);
var teamA = document.querySelector(".form_select--a");
var teamB = document.querySelector(".form_select--b");

var dropDownFill = function(team) {
    teamsObj.forEach(function(e) {
        var option = document.createElement("option");
        option.text = e[0]
        option.value = e[0];
        team.add(option);
    });
}

dropDownFill(teamA);
dropDownFill(teamB);

var teamSelect = document.querySelector(".form_select ");
var date = document.querySelector(".form_date-input");
var time = document.querySelector(".form_time-input");
var inputTeamA = teamA.options[teamA.selectedIndex].value;
var inputTeamB = teamB.options[teamB.selectedIndex].value;
var timeInput = time.value;
var dateInput = date.value;
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
    // imageADiv.style.backgroundColor = TEAMS[inputTeamA]["color"];
    teamsText.innerText = teamaValue.replace('_', ' ').toUpperCase() + " V " + teambValue.replace('_', ' ').toUpperCase();
}

var temabUpdate = function () {
    var teamB = document.querySelector(".form_select--b");
    var inputTeamB = teamB.options[teamB.selectedIndex].value;
    teambValue = inputTeamB;
    imageB.src = TEAMS[inputTeamB]["image"];
    // imageBDiv.style.backgroundColor = TEAMS[inputTeamB]["color"];
    teamsText.innerText = teamaValue.replace('_', ' ').toUpperCase() + " V " + teambValue.replace('_', ' ').toUpperCase();
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

 