function startGame(){
    document.getElementsByClassName("enter-name-screen")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.background = "lightblue";
    //countDown(120);
}
var timerMinutes = document.getElementById("timerMinutes");
var timerSeconds = document.getElementById("timerSeconds");
function countDown(seconds){
    
    
    //var countDownFinished = false;
    seconds = Number(seconds);
    var minutes = (seconds-seconds%60)/60;
    var seconds = seconds%60;
    timerMinutes.innerHTML = minutes;
    if(seconds<=9){
        timerSeconds.innerHTML = "0"+seconds;
        }else{
            timerSeconds.innerHTML = "0"+seconds;
        }
    var countingDown = setInterval(function(){
        if(seconds<=0){
            timerSeconds.innerHTML = "0"+seconds;


            if(minutes==0){
                //countDownFinished = true;
               
                clearInterval(countingDown);
                return;
            }
           else{
            seconds=59;
            minutes--;
            timerMinutes.innerHTML = minutes;
            timerSeconds.innerHTML = seconds;
        }
        }
        else if(seconds<=10){
            
            seconds--;
            timerSeconds.innerHTML = "0"+seconds;
           
        }
       
        else{
        seconds--;
        timerSeconds.innerHTML = seconds;
        }
  
        
    },1010)
}
var displayActivePlayersClicked = false;
function displayActivePlayers(){
    if(!displayActivePlayersClicked){
        document.getElementsByClassName("activePlayers")[0].style.transform = "translateX(calc(0% - 10vw))";
        document.getElementById("leftArrow").style.transform = "rotate(-180deg)";
        displayActivePlayersClicked = true;
    }
    else{
        document.getElementsByClassName("activePlayers")[0].style.transform = "translateX(calc(-100% - 10vw))";
        document.getElementById("leftArrow").style.transform = "rotate(0deg)";
        displayActivePlayersClicked = false;
    }
}