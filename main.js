
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
    $(".modal").hide();
    $(".content").css("filter", "blur(0px)");
}