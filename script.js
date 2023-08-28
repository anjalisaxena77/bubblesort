/* the bubble sort game is what ever number "Hit" box shows we have to hit that particluar number.
 then our score should get increase by 10. and all the bubbles should refresh.
 lastly when our times get out,score will be printed.
 
 mainly we will use "EVENT BUBBLING" to make this game.

Event Bubbling - jispe click karoge wo element par event raise hoga, aur event listner naa milne par event element ke parent par listener dhundega,
   waha bhi naa milne par event parent ke parent ke parent par listner dhundega*/


var timer = 60;
// 4) to built score mechanism
var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
var hitrn = 0;
// 3) function to get new hit - it will take a random number and put it on hit label.
function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
// 1) function to make bubble
function makeBubble(){
 var clutter = " ";

 for(var i = 0; i<=200;i++){
    var rn =Math.floor(Math.random()*10);
    clutter += `<div class = "bubble">${rn}</div>`;
 }

 document.querySelector('#pbtm').innerHTML = clutter;
}

// 2) to run timer

function runTimer(){
    var timerint = setInterval(function() {
        // to make timer stop at 0
        if(timer > 0){
        timer--;
        document.querySelector('#timerval').textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML= `<h1>Game Over Buddy!Well played :)<h1>`; //this will make bubbles vacant after the timer goes to zero so that no new score can be added.
        }
    },1000);


}
// 5) query to run event bubble- koi bhi white space ko chodkar kisi bhi bubble ko click krega vo target hoga.

document.querySelector("#pbtm").addEventListener("click" , function(details){
    var clicknum = Number(details.target.textContent);// this will click the number we want that is asked on hit.
    if(clicknum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();

