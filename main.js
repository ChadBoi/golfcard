let teeType;
let courseID;


function removePlayer(player){
    $(player).remove()
}
function addPlayers(){
    let numPlayers = $(".numInput").val();
    for (let i = 0; i < numPlayers; i++){
        $(".content").append(`
<div class="player-container-${i} player-container">
    <div class="player">Player ${i+1}</div>
    <button class="removeButton" onclick='removePlayer(".player-container-${i}")'>DELETE</button>
</div>
`);
    }
    $(".playerSelector").hide();
    $(".content").css("filter", "blur(0px)");
    $(".courseSelector").css("visibility", "visible");
}
function addCourse() {
    courseID = $(".courseID").val();
    teeType = $(".teeType").val();

    $.getJSON("https://golf-courses-api.herokuapp.com/courses", function(data){
        $(".courseName").innerHTML = data.course[courseID].name;
        courseID = data.course[courseID].id;

    });





    $(".courseSelector").hide();
}
