var NRL = {
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

var AFL = {
    bulldogs: {
        image: './image/afl/bulldogs.jpg',
    },
    carlton: {
        image: './image/afl/carlton.jpg',
    },
    cats: {
        image: './image/afl/cats.jpg',
    },
    crows: {
        image: './image/afl/crows.jpg',
    },
    demons: {
        image: './image/afl/demons.jpg',
    },
    dockers: {
        image: './image/afl/dockers.jpg',
    },
    eagles: {
        image: './image/afl/eagles.jpg',
    },
    essendon: {
        image: './image/afl/essendon.jpg',
    },
    giants: {
        image: './image/afl/giants.jpg',
    },
    hawks: {
        image: './image/afl/hawks.jpg',
    },
    kangaroos: {
        image: './image/afl/kangaroos.jpg',
    },
    magpies: {
        image: './image/afl/magpies.jpg',
    },
    saints: {
        image: './image/afl/saints.jpg',
    },
    suns: {
        image: './image/afl/suns.jpg',
    },
    power: {
        image: './image/afl/power.jpg',
    },
    rabbitohs: {
        image: './image/afl/rabbitohs.jpg',
    },
    tigers: {
        image: './image/afl/tigers.jpg',
    },
    swans: {
        image: './image/afl/swans.jpg',
    }
};

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

var teamA = document.querySelector(".form_select--a");
var teamB = document.querySelector(".form_select--b");

var dropDownFill = function(team) {
    var teamsObj = Object.entries(TEAMS);
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
var toggler = document.querySelector('.checkbox');
var togglerAFL = getComputedStyle(document.querySelector('.knobs'), ':before').getPropertyValue('content');


var temaaUpdate = function () {
    var teamA = document.querySelector(".form_select--a");
    var inputTeamA = teamA.options[teamA.selectedIndex].value;
    teamaValue = inputTeamA;
    imageA.src = TEAMS[inputTeamA]["image"];
    // imageADiv.style.backgroundColor = TEAMS[inputTeamA]["color"];
    teamsText.innerText = teamaValue.replace('_', ' ').toUpperCase() + " v " + teambValue.replace('_', ' ').toUpperCase();
}

var temabUpdate = function () {
    var teamB = document.querySelector(".form_select--b");
    var inputTeamB = teamB.options[teamB.selectedIndex].value;
    teambValue = inputTeamB;
    imageB.src = TEAMS[inputTeamB]["image"];
    // imageBDiv.style.backgroundColor = TEAMS[inputTeamB]["color"];
    teamsText.innerText = teamaValue.replace('_', ' ').toUpperCase() + " v " + teambValue.replace('_', ' ').toUpperCase();
}

function getNumberWithOrdinal(n) {
    var s=["th","st","nd","rd"],
    v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
 }

var dateUpdate = function () {
    var date = document.querySelector(".form_date-input");
    var dateInput = new Date(date.value);
    var options = { weekday: 'long', day: 'numeric', month: 'long'};
    var dateTextOption = dateText.innerText = dateInput.toLocaleDateString("en-GB", options).toUpperCase().replace(',','')
    var dateTextSplit = dateTextOption.split(' ')
    var dateTextNumber = getNumberWithOrdinal(dateTextSplit[1]).toUpperCase();
    dateText.innerText = dateTextSplit[0] + ' ' + dateTextNumber + ' ' + dateTextSplit[2];
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

var dropDownRemove = function (team) {
    var dropLenght = team.options.length;
    for (i=0; i < dropLenght; i++) {
        team.options.remove(0);
    }
};

var gameSwitchHandeler = function () {
    var togglerData = getComputedStyle(document.querySelector('.knobs'), ':before').getPropertyValue('content');
    var afl = togglerAFL;
    TEAMS = togglerData == afl ? TEAMS = AFL : TEAMS = NRL;
    dropDownRemove(teamA);
    dropDownRemove(teamB);
    dropDownFill(teamA);
    dropDownFill(teamB);
    temaaUpdate();
    temabUpdate();
};

teamA.addEventListener('change', temaaUpdate);
teamB.addEventListener('change', temabUpdate);
date.addEventListener('change', dateUpdate);
time.addEventListener('change', timeUpdate);
toggler.addEventListener('change', gameSwitchHandeler);

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

temaaUpdate();
temabUpdate();
dateUpdate();
timeUpdate();