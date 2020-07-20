var NRL = {
        broncos: {
            image: "./image/broncos.jpg"
        },
        bulldogs: {
            image: "./image/bulldogs.jpg"
        },
        cowboys: {
            image: "./image/cowboys.jpg"
        },
        dragons: {
            image: "./image/dragons.jpg"
        },
        eels: {
            image: "./image/eels.jpg"
        },
        knights: {
            image: "./image/knights.jpg"
        },
        panthers: {
            image: "./image/panthers.jpg"
        },
        raiders: {
            image: "./image/raiders.jpg"
        },
        sea_eagles: {
            image: "./image/sea_eagles.jpg"
        },
        storm: {
            image: "./image/storm.jpg"
        },
        sharks: {
            image: "./image/sharks.jpg"
        },
        warriors: {
            image: "./image/warriors.jpg"
        },
        rabbitohs: {
            image: "./image/rabbitohs.jpg"
        },
        roosters: {
            image: "./image/roosters.jpg"
        },
        titans: {
            image: "./image/titans.jpg"
        },
        wests_tigers: {
            image: "./image/west_tigers.jpg"
        }
    },
    AFL = {
        bulldogs: {
            image: "./image/afl/bulldogs.jpg"
        },
        carlton: {
            image: "./image/afl/carlton.jpg"
        },
        cats: {
            image: "./image/afl/cats.jpg"
        },
        crows: {
            image: "./image/afl/crows.jpg"
        },
        demons: {
            image: "./image/afl/demons.jpg"
        },
        dockers: {
            image: "./image/afl/dockers.jpg"
        },
        eagles: {
            image: "./image/afl/eagles.jpg"
        },
        essendon: {
            image: "./image/afl/essendon.jpg"
        },
        giants: {
            image: "./image/afl/giants.jpg"
        },
        hawks: {
            image: "./image/afl/hawks.jpg"
        },
        kangaroos: {
            image: "./image/afl/kangaroos.jpg"
        },
        magpies: {
            image: "./image/afl/magpies.jpg"
        },
        saints: {
            image: "./image/afl/saints.jpg"
        },
        suns: {
            image: "./image/afl/suns.jpg"
        },
        power: {
            image: "./image/afl/power.jpg"
        },
        rabbitohs: {
            image: "./image/afl/rabbitohs.jpg"
        },
        tigers: {
            image: "./image/afl/tigers.jpg"
        },
        swans: {
            image: "./image/afl/swans.jpg"
        },
        lions: {
            image: "./image/afl/lions.png"
        }
    },
    TEAMS = {
        broncos: {
            image: "./image/broncos.jpg"
        },
        bulldogs: {
            image: "./image/bulldogs.jpg"
        },
        cowboys: {
            image: "./image/cowboys.jpg"
        },
        dragons: {
            image: "./image/dragons.jpg"
        },
        eels: {
            image: "./image/eels.jpg"
        },
        knights: {
            image: "./image/knights.jpg"
        },
        panthers: {
            image: "./image/panthers.jpg"
        },
        raiders: {
            image: "./image/raiders.jpg"
        },
        sea_eagles: {
            image: "./image/sea_eagles.jpg"
        },
        storm: {
            image: "./image/storm.jpg"
        },
        sharks: {
            image: "./image/sharks.jpg"
        },
        warriors: {
            image: "./image/warriors.jpg"
        },
        rabbitohs: {
            image: "./image/rabbitohs.jpg"
        },
        roosters: {
            image: "./image/roosters.jpg"
        },
        titans: {
            image: "./image/titans.jpg"
        },
        wests_tigers: {
            image: "./image/west_tigers.jpg"
        }
    },
    AFL_ARENAS = ["MCG", "Adelaide Oval", "Marvel Stadium", "The Gabba", "Sydney Showground", "Optus Stadium", "SCG", "GMHBA", "Metricon Stadium", "UNSW Canberra Oval", "University of Tasmania", "Mars Stadium", "Blundstone Arena", "TIO Stadium", "Adelaide Arena", "Riverway Stadium", "TIO Traeger Park"],
    NRL_ARENAS = ["AAMI Park", "McDonald Jones Stadium", "Sydney Cricket Ground", "Mt Smart Stadium", "Leichhardt Oval", "QLD Country Bank Stadium", "Panthers Stadium", "CBus Super Stadium", "Jubilee Stadium", "GIO Stadium", "Suncorp Stadium", "Shark Park", "Lottoland", "ANZ Stadium", "Campbelltown Stadium", "AMI Stadium Christchurch", "Carrington Park Bathurst", "Sunshine Coast Stadium", "WIN Stadium", "BankWest Stadium", "Scully Park Tamworth", "McDonalds Stadium", "Glen Willow Stadium", "Belmore Oval", "Perth Stadium", "TIO Stadium", "Central Coast Stadium", "Westpac Stadium"];
AFL_ARENAS.sort(), NRL_ARENAS.sort();
var teamA = document.querySelector(".form_select--a"),
    teamB = document.querySelector(".form_select--b"),
    arenaSelector = document.querySelector(".form_select--arena"),
    togglerAFL = getComputedStyle(document.querySelector(".knobs"), ":before").getPropertyValue("content"),
    tipValue = document.querySelector(".main_p--pick-text"),
    tipSelector = document.querySelector(".form_select--pick"),
    dropDownFill = function (e) {
        Object.entries(TEAMS).forEach(function (a) {
            var t = document.createElement("option");
            t.text = a[0], t.value = a[0], e.add(t)
        })
    },
    dropDownFillArenas = function () {
        var e = e = getComputedStyle(document.querySelector(".knobs"), ":before").getPropertyValue("content") == togglerAFL ? AFL_ARENAS : NRL_ARENAS;
        e.forEach(function (e) {
            var a = document.createElement("option");
            a.text = e, a.value = e, arenaSelector.add(a)
        })
    },
    dropDownFillTip = function () {
        var e = teamA.value,
            a = teamB.value,
            t = new Array;
        t.push(e, a), t.forEach(function (e) {
            var a = document.createElement("option");
            a.text = e, a.value = e, tipSelector.add(a)
        })
    };
dropDownFill(teamA), dropDownFill(teamB);
var teamSelect = document.querySelector(".form_select "),
    date = document.querySelector(".form_date-input"),
    time = document.querySelector(".form_time-input"),
    inputTeamA = teamA.options[teamA.selectedIndex].value,
    inputTeamB = teamB.options[teamB.selectedIndex].value,
    timeInput = time.value,
    dateInput = date.value,
    imageA = document.querySelector("#image-a"),
    imageB = document.querySelector("#image-b"),
    teamsText = document.querySelector(".main_p--teams"),
    dateText = document.querySelector(".main_p--date"),
    timeText = document.querySelector(".main_p--time"),
    teamaValue = inputTeamA,
    teambValue = inputTeamB,
    imageADiv = document.querySelector(".main_image--a"),
    imageBDiv = document.querySelector(".main_image--b"),
    toggler = document.querySelector(".checkbox"),
    arenaValue = document.querySelector(".main_p--arena"),
    temaaUpdate = function () {
        var e = document.querySelector(".form_select--a"),
            a = e.options[e.selectedIndex].value;
        teamaValue = a, imageA.src = TEAMS[a].image, teamsText.innerText = teamaValue.replace("_", " ").toUpperCase() + " v " + teambValue.replace("_", " ").toUpperCase()
    },
    temabUpdate = function () {
        var e = document.querySelector(".form_select--b"),
            a = e.options[e.selectedIndex].value;
        teambValue = a, imageB.src = TEAMS[a].image, teamsText.innerText = teamaValue.replace("_", " ").toUpperCase() + " v " + teambValue.replace("_", " ").toUpperCase()
    };

function getNumberWithOrdinal(e) {
    var a = ["th", "st", "nd", "rd"],
        t = e % 100;
    return e + (a[(t - 20) % 10] || a[t] || a[0])
}
var dateUpdate = function () {
    var e = document.querySelector(".form_date-input"),
        a = new Date(e.value),
        t = (dateText.innerText = a.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long"
        }).toUpperCase().replace(",", "")).split(" "),
        r = getNumberWithOrdinal(t[1]).toUpperCase();
    dateText.innerText = t[0] + " " + r + " " + t[2]
};

function tConv24(e) {
    var a = e,
        t = +a.substr(0, 2),
        r = t % 12 || 12,
        i = t < 12 ? " AM" : " PM";
    return (r = r < 10 ? "0" + r : r) + a.substr(2, 3) + i
}
var timeUpdate = function () {
        var e = document.querySelector(".form_time-input").value;
        timeText.innerText = tConv24(e).toUpperCase()
    },
    dropDownRemove = function (e) {
        var a = e.options.length;
        for (i = 0; i < a; i++) e.options.remove(0)
    },
    gameSwitchHandeler = function () {
        var e = getComputedStyle(document.querySelector(".knobs"), ":before").getPropertyValue("content");
        TEAMS = TEAMS = e == togglerAFL ? AFL : NRL, dropDownRemove(teamA), dropDownRemove(teamB), dropDownFill(teamA), dropDownFill(teamB), temaaUpdate(), temabUpdate()
    },
    stadiumHandler = function () {
        dropDownRemove(arenaSelector), dropDownFillArenas()
    },
    tipHandler = function () {
        dropDownRemove(tipSelector), dropDownFillTip()
    },
    stadiumpUpdate = function () {
        var e = document.querySelector(".form_select--arena").value;
        arenaValue.innerHTML = e.toUpperCase()
    },
    tipUpdate = function () {
        var e = document.querySelector(".form_select--pick").value;
        tipValue.innerHTML = e.toUpperCase().replace("_", " ")
    },
    intialState = function () {
        document.querySelector(".checkbox").checked = !0, teamA.value = "sharks", teamA.value = "panthers"
    };
teamA.addEventListener("change", temaaUpdate), teamB.addEventListener("change", temabUpdate), teamA.addEventListener("change", tipHandler), teamB.addEventListener("change", tipHandler), teamA.addEventListener("change", tipUpdate), teamB.addEventListener("change", tipUpdate), date.addEventListener("change", dateUpdate), time.addEventListener("change", timeUpdate), toggler.addEventListener("change", gameSwitchHandeler), toggler.addEventListener("change", stadiumHandler), toggler.addEventListener("change", tipHandler), arenaSelector.addEventListener("change", stadiumpUpdate), tipSelector.addEventListener("change", tipUpdate);
var canvas = document.createElement("canvas");
document.getElementById("download").addEventListener("click", function () {
    html2canvas(document.querySelector(".main-box"), {
        scale: 2,
        width: 802,
        height: 220
    }).then(function (e) {
        var a = document.createElement("a");
        document.body.appendChild(a), a.download = teamA.value + "_vs_" + teamB.value + "_" + date.value + "_" + time.value + "_" + arenaSelector.value.replace(" ", "_") + "_" + tipSelector.value + ".jpg", a.href = e.toDataURL("image/jpeg", 1), a.target = "_blank", a.click()
    })
}), intialState(), temaaUpdate(), temabUpdate(), dateUpdate(), timeUpdate(), dropDownFillArenas(), dropDownFillTip(), arenaSelector.value = "AAMI Park", stadiumpUpdate();