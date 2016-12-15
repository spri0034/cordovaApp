let key = "spri0034";
reload = document.getElementById("reload");
tbody = document.getElementById("tbody");
qScores = document.getElementById("qScores");
tScore = document.getElementById("tScore");
tSchedule = document.getElementById("tSchedule");
tbodyScore = document.getElementById("tbodyScore");
var b = 0;
var gWins = 0;
var gLoses = 0;
var gTies = 0;
var sWins = 0;
var sLoses = 0;
var sTies = 0;
var rWins = 0;
var rLoses = 0;
var rTies = 0;
var hWins = 0;
var hLoses = 0;
var hTies = 0;
var rPri = 0;
var sPri = 0;
var gPri = 0;
var hPri = 0;
var jsonData = JSON.parse(localStorage.getItem(key));
var gryff = 0;
var slytherin = 0;
var ravenclaw = 0;
var hufflepuff = 0;


qScores.addEventListener("click", function () {
    tSchedule.style.display = 'none';
});
reload.addEventListener("click", function (item) {
    localStorage.removeItem(key);
    getScores();
    main();
});

// button.addEventListener("click", getScores, getTeams, getSchedule);


document.addEventListener("DOMContentLoaded", function () {
    if (localStorage){
        if (localStorage.getItem(key) == null){
            getScores();
            main();
            console.log("No Key Found, Content Added");
        }else if (localStorage.getItem(key) != null){
            main();
        }
    }
});

function main() {
    jsonData = JSON.parse(localStorage.getItem(key));
    getTeams();
    getSchedule();
    getScoreboard();
}

function getScores(){
    let myInit = {
    method: 'GET',
    mode: 'cors'
    };

let dataReq = new Request("https://griffis.edumedia.ca/mad9014/sports/quidditch.php", myInit);
    
fetch(dataReq).then(function(response){
        return response.json();
    }).then(function(doData){
        localStorage.setItem(key, JSON.stringify(doData));
    })
}


var i = 0;
function getTeams(){
    console.log(JSON.parse(localStorage.getItem(key)));

    jsonData.teams.forEach(function(item){
        console.log(jsonData.teams.length);
        if (i >= jsonData.teams.length){
            i = 0;
        }
        let house = jsonData.teams[i].name;
        let houseId = jsonData.teams[i].id;
        if (house == "Slytherin"){
            slytherin = jsonData.teams[i].id;
        }else if (house == "Gryffindor"){
            gryff = jsonData.teams[i].id;
        }else if (house == "Ravenclaw"){
            ravenclaw = jsonData.teams[i].id;
        }else if (house == "Hufflepuff"){
            hufflepuff = jsonData.teams[i].id;
        }
        i++;
    })
}
let a = 0;
function getSchedule(){

    jsonData.scores.forEach(function (item) {
        if (a > jsonData.scores.length){
            a = 0;
        }
        tr = document.createElement("tr");
        tbody.appendChild(tr);
        td = document.createElement("td");

        td.textContent = moment(jsonData.scores[a].date).format("MMM Do YY");
        tr.appendChild(td);


        jsonData.scores[a].games.forEach(function (item) {
            if (item.home == slytherin){
                td = document.createElement("td");
                td.textContent = "Slytherin";
                tr.appendChild(td);
                console.log("Home: Slytherin");
                img = document.createElement("img")
                tr.appendChild(img);
            }
            if (item.home == gryff){
                td = document.createElement("td");
                td.textContent = "Gryffindor";
                tr.appendChild(td);
                console.log("Home: Gryffindor");
            }
            if (item.home == ravenclaw){
                td = document.createElement("td");
                td.textContent = "Ravenclaw";
                tr.appendChild(td);
                console.log("Home: Ravenclaw");
            }
            if (item.home == hufflepuff){
                td = document.createElement("td");
                td.textContent = "Hufflepuff";
                tr.appendChild(td);
                console.log("Home: Hufflepuff");
            }
            if (item.away == slytherin){
                td = document.createElement("td");
                td.textContent = "Slytherin";
                tr.appendChild(td);
                console.log("Away: Slytherin");
            }
            if (item.away == gryff){
                td = document.createElement("td");
                td.textContent = "Gryffindor";
                tr.appendChild(td);
                console.log("Away: Gryffindor");
            }
            if (item.away == ravenclaw){
                td = document.createElement("td");
                td.textContent = "Ravenclaw";
                tr.appendChild(td);
                console.log("Away: Ravenclaw");
            }
            if (item.away == hufflepuff){
                td = document.createElement("td");
                td.textContent = "Hufflepuff";
                tr.appendChild(td);
                console.log("Away: Hufflepuff");
            }
        });
        a++;
    })
}

function getScoreboard() {
    jsonData.scores.forEach(function (item) {
        jsonData.scores[b].games.forEach(function (item) {
            if (item.home == gryff && item.home_score > item.away_score) {
                gWins++;
            }
            if (item.away == gryff && item.home_score < item.away_score) {
                gWins++;
            }
            if (item.home == gryff && item.home_score == item.away_score) {
                gTies++;
            }
            if (item.away == gryff && item.home_score == item.away_score) {
                gTies++;
            }
            if (item.home == gryff && item.home_score < item.away_score) {
                gLoses++;
            }
            if (item.away == gryff && item.home_score > item.away_score) {
                gLoses++;
            }
            //
            if (item.home == slytherin && item.home_score > item.away_score) {
                sWins++;
            }
            if (item.away == slytherin && item.home_score < item.away_score) {
                sWins++;
            }
            if (item.home == slytherin && item.home_score == item.away_score) {
                sTies++;
            }
            if (item.away == slytherin && item.home_score == item.away_score) {
                sTies++;
            }
            if (item.home == slytherin && item.home_score < item.away_score) {
                sLoses++;
            }
            if (item.away == slytherin && item.home_score > item.away_score) {
                sLoses++;
            }
            //
            if (item.home == ravenclaw && item.home_score > item.away_score) {
                rWins++;
            }
            if (item.away == ravenclaw && item.home_score < item.away_score) {
                rWins++;
            }
            if (item.home == ravenclaw && item.home_score == item.away_score) {
                rTies++;
            }
            if (item.away == ravenclaw && item.home_score == item.away_score) {
                rTies++;
            }
            if (item.home == ravenclaw && item.home_score < item.away_score) {
                rLoses++;
            }
            if (item.away == ravenclaw && item.home_score > item.away_score) {
                rLoses++;
            }
            //
            if (item.home == hufflepuff && item.home_score > item.away_score) {
                hWins++;
            }
            if (item.away == hufflepuff && item.home_score < item.away_score) {
                hWins++;
            }
            if (item.home == hufflepuff && item.home_score == item.away_score) {
                hTies++;
            }
            if (item.away == hufflepuff && item.home_score == item.away_score) {
                hTies++;
            }
            if (item.home == hufflepuff && item.home_score < item.away_score) {
                hLoses++;
            }
            if (item.away == hufflepuff && item.home_score > item.away_score) {
                hLoses++;
            }
        });
        b++
    });

    if (rWins > gWins && rWins > hWins && rWins > sWins) {
        rPri = 3;
    } else if (rWins > gWins && rWins > sWins) {
        rPri = 2;
    } else if (rWins > hWins && rWins > sWins) {
        rPri = 2;
    } else if (rWins > gWins && rWins > hWins) {
        rPri = 2;
    } else if (rWins > hWins) {
        rPri = 1;
    } else if (rWins > sWins) {
        rPri = 1
    } else if (rWins > gWins) {
        rPri = 1
    } else {
        rPri = 0;
    }

    if (gWins > rWins && gWins > hWins && gWins > sWins) {
        gPri = 3;
    } else if (gWins > rWins && gWins > sWins) {
        gPri = 2;
    } else if (gWins > hWins && gWins > sWins) {
        gPri = 2;
    } else if (gWins > rWins && gWins > hWins) {
        gPri = 2;
    } else if (gWins > hWins) {
        gPri = 1;
    } else if (gWins > sWins) {
        gPri = 1
    } else if (gWins > rWins) {
        gPri = 1
    } else {
        gPri = 0;
    }
    if (sWins > gWins && sWins > hWins && sWins > rWins) {
        sPri = 3;
    } else if (sWins > gWins && sWins > rWins) {
        sPri = 2;
    } else if (sWins > hWins && sWins > rWins) {
        sPri = 2;
    } else if (sWins > gWins && sWins > hWins) {
        sPri = 2;
    } else if (sWins > hWins) {
        sPri = 1;
    } else if (sWins > rWins) {
        sPri = 1
    } else if (sWins > gWins) {
        sPri = 1
    } else {
        sPri = 0;
    }
    if (hWins > gWins && hWins > rWins && hWins > sWins) {
        hPri = 3;
    } else if (hWins > gWins && hWins > sWins) {
        hPri = 2;
    } else if (hWins > rWins && hWins > sWins) {
        hPri = 2;
    } else if (hWins > gWins && hWins > rWins) {
        hPri = 2;
    } else if (hWins > rWins) {
        hPri = 1;
    } else if (hWins > sWins) {
        hPri = 1
    } else if (hWins > gWins) {
        hPri = 1
    } else {
        hPri = 0;
    }

    if (rPri == 3) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Ravenclaw";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rTies;
        tr.appendChild(td);
    }
    if (hPri == 3) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Hufflepuff";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hTies;
        tr.appendChild(td);
    }
    if (sPri == 3) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Slytherin";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sTies;
        tr.appendChild(td);
    }
    if (gPri == 3) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Gryffindor";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gTies;
        tr.appendChild(td);
    }

    if (rPri == 2) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Ravenclaw";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rTies;
        tr.appendChild(td);
    }
    if (hPri == 2) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Hufflepuff";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hTies;
        tr.appendChild(td);
    }
    if (sPri == 2) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Slytherin";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sTies;
        tr.appendChild(td);
    }
    if (gPri == 2) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Gryffindor";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gTies;
        tr.appendChild(td);
    }
    if (rPri == 1) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Ravenclaw";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rTies;
        tr.appendChild(td);
    }
    if (hPri == 1) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Hufflepuff";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hTies;
        tr.appendChild(td);
    }
    if (sPri == 1) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Slytherin";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sTies;
        tr.appendChild(td);
    }
    if (gPri == 1) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Gryffindor";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gTies;
        tr.appendChild(td);
    }
    if (rPri == 0) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Ravenclaw";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = rTies;
        tr.appendChild(td);
    }
    if (hPri == 0) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Hufflepuff";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = hTies;
        tr.appendChild(td);
    }
    if (sPri == 0) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Slytherin";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = sTies;
        tr.appendChild(td);
    }
    if (gPri == 0) {
        tr = document.createElement("tr");
        tbodyScore.appendChild(tr);
        td = document.createElement("td");
        td.textContent = "Gryffindor";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gWins;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gLoses;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = gTies;
        tr.appendChild(td);
    }


}



