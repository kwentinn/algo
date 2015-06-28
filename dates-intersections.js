var getDatesIntersections = function (participants) {
    var dates = [];

    // 1. copie des dates de début et de fin dans un tableaux.
    $('#process').append('<li>Copie des dates de début et de fin dans un tableau.</li>');
    for (var i = 0; i < participants.length; i++) {

        // start dates
        var startfound = false;
        for (var j = 0; j < dates.length; j++) {
            if (dates[j] == participants[i].start) {
                startfound = true;
                break;
            }
        }
        if (startfound === false) dates.push(participants[i].start);

        // end dates
        var endfound = false;
        for (var k = 0; k < dates.length; k++) {
            if (dates[k] == participants[i].end) {
                endfound = true;
                break;
            }
        }
        if (endfound === false) dates.push(participants[i].end);
    }

    // 2. on trie par ordre croissant
    $('#process').append('<li>On trie le tableau par ordre croissant.</li>');
    var sortedDates = bubbleSort(dates);

    // 3. On calcule les intervalles 
    $('#process').append('<li>On crée un nouveau tableau contenant tous les intervalles (soit [(t0,t1), (t1,t2), ..., (tn, tn+1)]).</li>');
    var intervals = [];
    for (var i = 0; i < sortedDates.length - 1; i++) {
        intervals.push({
            'start': sortedDates[i],
                'end': sortedDates[i + 1]
        });
    }
    //console.dir(intervals);

    // 4. parcours des intervalles, et calcul du nombre de dates incluses dans cet intervalle
    var html = '<li>';
    html += 'Pour chaque intervalle, on calcule le nombre de dates incluses.';
    html += '<ul>';

    var maxIntersect = 0;
    for (var i = 0; i < intervals.length; i++) {
        html += '<li>';
        html += "intervals[" + i + "]: {start:" + intervals[i].start + ", end:" + intervals[i].end + "}";

        var intersect = 0;

        for (var j = 0; j < participants.length; j++) {
            console.log("j = " + j);
            html += '<ul>';

            if (intervals[i].start >= participants[j].start && intervals[i].end <= participants[j].end) {
                console.log("1 date trouvée");
                intersect++;
                html += '<li>1 date trouvée! nb = ' + intersect + '</li>';
            }
            html += '</ul>';
        }
        console.log("intersect = " + intersect);
        if (intersect > maxIntersect) maxIntersect = intersect;

        html += '</li>';
    }
    html += '</ul>';
    html += '</li>';
    //console.log("maxIntersect = " + maxIntersect);

    $('#process').append(html);

    $('#result').append('<p>Nb max de participants en simultané = ' + maxIntersect + '</p>');
}



var bubbleSort = function (arr) {
    var sorted = false;
    var iterations = 0;
    while (sorted === false) {
        var nbSwitches = 0;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                var tmp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = tmp;
                nbSwitches++;
            }
            iterations++;
        }
        if (nbSwitches == 0) sorted = true;
    }
    return arr;
}

var year = 2015;
var month = 5; // 5 is June, JS months range is 0-11
var day = 28;

var t =[
    new Date(year, month, day, 10, 0, 0, 0),
    new Date(year, month, day, 11, 0, 0, 0),
    new Date(year, month, day, 12, 0, 0, 0),
    new Date(year, month, day, 13, 0, 0, 0),
    new Date(year, month, day, 14, 0, 0, 0),
    new Date(year, month, day, 15, 0, 0, 0),
    new Date(year, month, day, 16, 0, 0, 0)
];

for (var i in t) {
    $('#dates').append('<li> t' + i + ' = ' + t[i] + '</li>');
}
var participants = [{
    name: 'u1',
    start: t[1],
    end: t[3]
}, {
    name: 'u2',
    start: t[0],
    end: t[4]
}, {
    name: 'u3',
    start: t[2],
    end: t[5]
}, {
    name: 'u4',
    start: t[2],
    end: t[3]
}, {
    name: 'u5',
    start: t[4],
    end: t[5]
}, {
    name: 'u6',
    start: t[3],
    end: t[6]
}, {
    name: 'u7',
    start: t[1],
    end: t[2]
}];
for (var i in participants) {
    $('#participants').append('<li>name: \'' + participants[i].name + '\', start: ' + participants[i].start + ', end: ' + participants[i].end + '</li>');
}


getDatesIntersections(participants);