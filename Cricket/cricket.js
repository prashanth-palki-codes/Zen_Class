var myVar;
var i = 60;
var play = document.getElementById('play');
play.addEventListener('click', function () {
    timerFunction();
    document.getElementById('hit1').disabled = false;
});
function timerFunction() {
    myVar = setInterval(function () {
        alertFunc(i--);
    }, 1000);
}
function alertFunc(i) {
    if (i >= 0)
        document.getElementById("timer").innerHTML = i.toString();
    else
        stopFunction();
}
function stopFunction() {
    clearInterval(myVar);
}
function createTable(tableName) {
    for (var i_1 = 0; i_1 < 10; i_1++) {
        var j = 1;
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML = "Player " + (i_1 + 1);
        td1.style.fontWeight = "bolder";
        var td2 = document.createElement('td');
        td2.innerHTML = "";
        var td3 = document.createElement('td');
        td3.innerHTML = "";
        var td4 = document.createElement('td');
        td4.innerHTML = "";
        var td5 = document.createElement('td');
        td5.innerHTML = "";
        var td6 = document.createElement('td');
        td6.innerHTML = "";
        var td7 = document.createElement('td');
        td7.innerHTML = "";
        var td8 = document.createElement('td');
        td8.innerHTML = "";
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tableName.append(tr);
    }
}
var t1body = document.getElementById('t1body');
createTable(t1body);
var t2body = document.getElementById('t2body');
createTable(t2body);
var j = 0;
var team1Scores = [];
var team2Scores = [];
var hit1 = document.getElementById('hit1');
var hit2 = document.getElementById('hit2');
var genRes = document.getElementById('genRes');
hit1.addEventListener('click', function () {
    team1Score();
    document.getElementById('hit1').disabled = true;
    document.getElementById('hit2').disabled = false;
});
hit2.addEventListener('click', function () {
    team2Score();
    document.getElementById('hit2').disabled = true;
    document.getElementById('genRes').disabled = false;
});
genRes.onclick = generateResult;
function team1Score() {
    var theTable = document.getElementById('table1').getElementsByTagName('tbody')[0];
    for (var _i = 0, _a = theTable.rows; _i < _a.length; _i++) {
        var theRow = _a[_i];
        var total = 0;
        var balls = 0;
        var skiprow = -1;
        for (var _b = 0, _c = theRow.cells; _b < _c.length; _b++) {
            var theCell = _c[_b];
            if (++skiprow > 0) {
                var scoreNow = Math.floor((Math.random() * 6) + 0);
                if (scoreNow !== 0 && ++balls <= 6) {
                    theCell.innerText = scoreNow.toString();
                    total += scoreNow;
                }
                else {
                    if (balls > 6)
                        theCell.innerText = total.toString();
                    else {
                        theCell.innerText = scoreNow.toString();
                        theRow.cells[7].innerText = total.toString();
                    }
                    break;
                }
            }
        }
        team1Scores[j++] = total;
    }
}
function team2Score() {
    var theTable = document.getElementById('table2').getElementsByTagName('tbody')[0];
    for (var _i = 0, _a = theTable.rows; _i < _a.length; _i++) {
        var theRow = _a[_i];
        var total = 0;
        var balls = 0;
        var skiprow = -1;
        for (var _b = 0, _c = theRow.cells; _b < _c.length; _b++) {
            var theCell = _c[_b];
            if (++skiprow > 0) {
                var scoreNow = Math.floor((Math.random() * 6) + 0);
                if (scoreNow !== 0 && ++balls <= 6) {
                    theCell.innerText = scoreNow.toString();
                    total += scoreNow;
                }
                else {
                    if (balls > 6)
                        theCell.innerText = total.toString();
                    else {
                        theCell.innerText = scoreNow.toString();
                        theRow.cells[7].innerText = total.toString();
                    }
                    break;
                }
            }
        }
        team2Scores[j++] = total;
    }
}
function generateResult() {
    var manOfMatch;
    var winningTeam = "";
    var result = document.getElementById('result');
    var team1FinalScore = team1Scores.reduce(function (tot, ele) { return tot + ele; });
    var team2FinalScore = team2Scores.reduce(function (tot, ele) { return tot + ele; });
    if (team1FinalScore > team2FinalScore) {
        winningTeam = "Team-1";
        manOfMatch = team1Scores.reduce(function (a, b) {
            return Math.max(a, b);
        });
    }
    else {
        winningTeam = "Team-2";
        manOfMatch = team2Scores.reduce(function (a, b) {
            return Math.max(a, b);
        });
    }
    alert("Match won by--->" + winningTeam + "\n  --------------------------\n  Man of the Match--->" + manOfMatch);
}
