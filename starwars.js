var gameStarted = 0;
var player = {
    playerName : "",
    playerHP : "",
    playerAttack : "",
    playerRole : ""
};

HPs = [120,100,180,150];
Attacks = [14,16,8,12];
var mainPlayerHP = 0;
var mainPlayerAttack = 0;
var defenderHP = 0;
var defenderAttack = 0;
var mainPlayerAttackCurrent = 0;
var images = ["black_widow.jpg","iron_man.jpg","hulk.jpg","captain_america.jpg"];
var playerNames = ["Black Widow","Iron Man","Hulk","Captain America"];
window.onload = function (){
    wins = 0;
    gameInitialize ();    
}
var numberofEnemies = 3;

function gameInitialize() {
    // alert(player.playerName);
// var defender1 = player;
// defender1.playerName = "any";
// alert(defender1.playerName);

$(".player").on("click",runGame);

}

function runGame() {
    gameStarted++;
console.log($(this).attr("data-value"));

if (gameStarted == 1) {
    // alert ("you choose your character as player" + $(this).attr("data-value"));
    var j = 0;
    for(var i=1;i<=4;i++) {
        if($(this).attr("data-value") == i) {
            var player = $("<div>");
            player.addClass("player");
            player.attr("id","player1");
            player.attr("data-value", i);
            
            player.html("<img src=" + images[i-1] + ">" +"<h6>"+ playerNames[i-1] +"</h6>" + "<h8 id="+"playerh8>"+ HPs[i-1] +"</h8>");  
            $("#players").html(player);
            mainPlayerHP = HPs[i-1];
            mainPlayerAttack = Attacks[i-1];
            mainPlayerAttackCurrent = mainPlayerAttack;
        }
        else {
         var enemy = $("<div>");
         enemy.addClass("enemy");
         enemy.attr("data-value", i);
         enemy.attr("id","enemy"+ ++j); 
         enemy.html("<img src=" + images[i-1] + ">" + "<h6>"+ playerNames[i-1] +"</h6>" + "<h8>"+ HPs[i-1] +"</h8>");       
         $("#enemies").append(enemy);

            
        }
        
    }
//    alert( $("#defender4").attr("data-value"));
  $("#enemy1").on("click",chooseDefender);
  $("#enemy2").on("click",chooseDefender);
  $("#enemy3").on("click",chooseDefender);
}
// $(".enemy").on("click",function() {


// } );


// $(".player").unbind( "click" );
}


function chooseDefender() {
    alert($(this).attr("data-value"));
    var defender = $("<div>");
    defender.addClass("defender");
    defender.attr("data-value", $(this).attr("data-value"));
    defender.attr("id","defender1"); 
    defender.html("<img src=" + images[$(this).attr("data-value")-1] + ">" +"<h6>"+ playerNames[$(this).attr("data-value")-1] +"</h6>" + "<h8 id="+"defenderh8>"+ HPs[$(this).attr("data-value")-1] +"</h8>");       
         $("#currentdDefender").append(defender);
    var i =  $(this).attr("id"); 
    // var j= "#" + i;   
    $("#"+i).remove();
    // console.log(i);
    defenderHP = HPs[$(this).attr("data-value")-1];
    defenderAttack = Attacks[$(this).attr("data-value")-1];
    console.log(defenderAttack);
    console.log(defenderHP);

    numberofEnemies--;
    $("#currentScore").text("You Current Attack : " + mainPlayerAttackCurrent + ", Your Defender Attack : " + defenderAttack );
    // enemy.html("<img src=" + images[i-1] + ">" + "<h6>"+ playerNames[i-1] +"</h6>"); 

}

function attack() {
  //while(defenderHP >= 0 || mainPlayerHP >= 0)  {
    $("#currentScore").text("You Current Attack : " + mainPlayerAttackCurrent + ", Your Defender Attack : " + defenderAttack );
   
    defenderHP = defenderHP-mainPlayerAttackCurrent;
    mainPlayerHP = mainPlayerHP-defenderAttack;
    $("#playerh8").text(mainPlayerHP);
    $("#defenderh8").text(defenderHP);
    mainPlayerAttackCurrent = mainPlayerAttackCurrent+  mainPlayerAttack;
    // console.log(mainPlayerAttackCurrent + " " + defenderHP + " " + mainPlayerHP);
 // }
    if(mainPlayerHP <= 0 ) {
        console.log("Sorry !! You lose");
    }
    else if (defenderHP <=0) {
        console.log("choose another player");
        $("#defender1").remove();
        $("#currentScore").text("You Current Attack : " + mainPlayerAttackCurrent + "!  ");
        $("#currentScore").append("Please choose another player");
        if(numberofEnemies == 0) {
            $("#currentScore").html("You Win !!");
        }
    }
    else {}
 
}