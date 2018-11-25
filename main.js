let teeType;
let courseID;


function removePlayer(player){
    $(player).remove()
}
function addPlayers(){
    let numPlayers = $(".numInput").val();
    for (let i = 0; i < numPlayers; i++){
        $(".playerContain").append(`
<div class="player-container-${i} player-container">
    <div class="player"><input class="playerInput" placeholder="Player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node0 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node1 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node2 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node3 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node4 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node5 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node6 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node7 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node8 player${i}"></div>
    <div class="scoreNodeContainer OUT${i}"><div class="rowItem">X</div></div>
    <div class="scoreNodeContainer"><input class="scoreNode node9 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node10 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node11 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node12 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node13 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node14 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node15 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node16 player${i}"></div>
    <div class="scoreNodeContainer"><input class="scoreNode node17 player${i}"></div>
    <div class="scoreNodeContainer IN${i}"><div class="rowItem">X</div></div>
    <div class="scoreNodeContainer total${i}"></div>
</div>
`);
    }
    $(".playerSelector").hide();
    $(".courseSelector").css("visibility", "visible");
    $(".content").css("filter", "blur(0px)");

}
function addCourse() {
    courseID = $(".courseID").val();
    teeType = $(".teeType").val();

    $.getJSON("https://golf-courses-api.herokuapp.com/courses", function(data){
        $(".courseName").append(data.courses[courseID].name);
        courseID = data.courses[courseID].id;

        $(".content").append(`<div class="row1 row">
            <div class="yards rowStart">Yards</div>
        </div>`);

        $.getJSON(`https://golf-courses-api.herokuapp.com/courses/${courseID}`, function(myData) {
            let appendString = ``;
            let totalYards = 0;
            for (let i = 0; i < 9; i++) {
                appendString += `<div class="yard rowItem">${myData.data.holes[i].teeBoxes[teeType].yards}</div>
`;
                totalYards += parseInt(myData.data.holes[i].teeBoxes[teeType].yards);
            }
            $(".row1").append(appendString);
            $(".row1").append(`<div class="totalYards rowItem">${totalYards}</div>`);
            let totalYards2 = 0;
            appendString = ``;
            for (let i = 9; i < 18; i++) {
                appendString += `<div class="yard rowItem">${myData.data.holes[i].teeBoxes[teeType].yards}</div>
`;
                totalYards2 += parseInt(myData.data.holes[i].teeBoxes[teeType].yards);
            }
            $(".row1").append(appendString);
            $(".row1").append(`<div class="totalYards rowItem">${totalYards2}</div>`);
            $(".row1").append(`<div class="totalYards rowItem">${totalYards + totalYards2}</div>`);

            appendString = ``;
            $(".content").append(`<div class="row2 row">
            <div class="Par rowStart">Par</div>
        </div>`);
            let totalPar = 0;
            for (let i = 0; i < 9; i++) {
                appendString += `<div class="yard rowItem">${myData.data.holes[i].teeBoxes[teeType].par}</div>
`;
                totalPar += parseInt(myData.data.holes[i].teeBoxes[teeType].par);
            }
            $(".row2").append(appendString);

            $(".row2").append(`<div class="totalPar rowItem">${totalPar}</div>`);
            let totalPar2 = 0;
            appendString = ``;
            for (let i = 9; i < 18; i++) {
                appendString += `<div class="yard rowItem">${myData.data.holes[i].teeBoxes[teeType].par}</div>
`;
                totalPar2 += parseInt(myData.data.holes[i].teeBoxes[teeType].par);
            }
            $(".row2").append(appendString);
            $(".row2").append(`<div class="totalPar rowItem">${totalPar2}</div>`);
            $(".row2").append(`<div class="totalPar rowItem">${totalPar + totalPar2}</div>`);

            $(".content").append(`<div class="row3 row">
            <div class="handicap rowStart">Handicap</div>
        </div>`);
            appendString = ``;
            for (let i = 0; i < 9; i++) {
                appendString += `<div class="yard rowItem">${myData.data.holes[i].teeBoxes[teeType].hcp}</div>
`;
                totalPar += parseInt(myData.data.holes[i].teeBoxes[teeType].hcp);
            }
            $(".row3").append(appendString);

            $(".row3").append(`<div class="totalPar rowItem">N/A</div>`);
            appendString = ``;
            for (let i = 9; i < 18; i++) {
                appendString += `<div class="yard rowItem">${myData.data.holes[i].teeBoxes[teeType].hcp}</div>
`;
                totalPar2 += parseInt(myData.data.holes[i].teeBoxes[teeType].hcp);
            }
            $(".row3").append(appendString);
            $(".row3").append(`<div class="totalPar rowItem">N/A</div>`);
            $(".row3").append(`<div class="totalPar rowItem">N/A</div>`);
        });


    });


    $(".courseSelector").hide();
}

let player0 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let player0Test = [];
for (let i = 0; i < 18; i++){
    player0Test[i] = {complete: false};
}
let player1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let player1Test = [];
for (let i = 0; i < 18; i++){
    player1Test[i] = {complete: false};
}
let player2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let player2Test = [];
for (let i = 0; i < 18; i++){
    player2Test[i] = {complete: false};
}
let player3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let player3Test = [];
for (let i = 0; i < 18; i++){
    player3Test[i] = {complete: false};
}

let completeGame = false;

function clearModal(){
    $(".endScreen").remove();
}

function checkInput(){
    $('.scoreNode').each(function() {
        let elem = $(this);
        elem.data('oldVal', elem.val());
        elem.bind("propertychange change click keyup input paste", function(event){
            // If value has changed...
            if (elem.data('oldVal') != elem.val()) {
                elem.data('oldVal', elem.val());
                let tempClasses = elem[0].className.split(" ");
                let nodeNum = tempClasses[1].split("e");
                if (tempClasses[2] == "player0"){
                    player0Test[parseInt(nodeNum[1])] = {complete: true};
                    player0[nodeNum[1]]= elem.val();
                }
                else if(tempClasses[2] == "player1"){
                    player1Test[parseInt(nodeNum[1])] = {complete: true};
                    player1[nodeNum[1]]= elem.val();
                }
                else if(tempClasses[2] == "player2"){
                    player2Test[parseInt(nodeNum[1])] = {complete: true};
                    player2[nodeNum[1]]= elem.val();
                }
                else if(tempClasses[2] == "player3"){
                    player3Test[parseInt(nodeNum[1])] = {complete: true};
                    player3[nodeNum[1]]= elem.val();
                }
                if (nodeNum[1] == 17) {
                    completeGame = true;
                }
            }
        });
    });
    let completeCount0 = 0;
    let completeCount1 = 0;
    let completeCount2 = 0;
    let completeCount3 = 0;
    let total0 = 0;
    let total1 = 0;
    let total2 = 0;
    let total3 = 0;
    for (let i = 0; i < 18; i++){
        total0 = total0 + parseInt(player0[i]);
        total1 = total1 + parseInt(player1[i]);
        total2 = total2 + parseInt(player2[i]);
        total3 = total3 + parseInt(player3[i]);
    }

    $(".total0").html(total0);
    $(".total1").html(total1);
    $(".total2").html(total2);
    $(".total3").html(total3);
    if (completeGame === true){
        if(total0 > 72){
            $("body").append(`<div class="modal endScreen">
        <div class="panel">
            <span>Better Luck Next Game!</span>
            <button onclick="clearModal()">Continue</button>
        </div>
    </div>`);
        }
        else {
            $("body").append(`<div class="modal endScreen">
        <div class="panel">
            <span>On to the PGA!</span>
            <button onclick="clearModal()">Continue</button>
        </div>
    </div>`);
            completeGame=false;
        }
    }
}


window.setInterval(function(){
    checkInput();
}, 1000);