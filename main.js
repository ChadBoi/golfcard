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
    <div class="player">Player ${i+1}</div>
    <button class="removeButton" onclick='removePlayer(".player-container-${i}")'>DELETE</button>
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
        console.log(data);
        $(".courseName").innerHTML = data.courses[courseID].name;
        courseID = data.courses[courseID].id;

        $(".content").append(`<div class="row1 row">
            <div class="yards">Yards</div>
        </div>`);


        console.log(courseID);

        $.getJSON(`https://golf-courses-api.herokuapp.com/courses/${courseID}`, function(myData) {
            let appendString = ``;
            let totalYards;
            console.log(myData.data.holes);
            for (let i = 0; i < 9; i++) {
                appendString += `<div class="yard rowItem">${myData.data.holes[i].teeBoxes[teeType].yards}</div>
`;
                totalYards += myData.data.holes[i].teeBoxes[teeType].yards;
            }
            $(".row1").append(appendString);
        });

    });

    $(".courseSelector").hide();
}
