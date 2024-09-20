var time = 60;
var hitdisplay = 0;
var point = 0;

function generatingbubbles() {
    var bubbles = "";

    for (var i = 1; i <= 90; i++) {
        bubbles += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    document.querySelector(".bottompannel").innerHTML = bubbles;
}

function timer() {
    var runtimer = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector("#time").textContent = time;
        }
        else {
            clearInterval(runtimer);
            document.querySelector(".bottompannel").innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000);

}

function hit() {
    hitdisplay = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitdisplay;
}

function points() {
    point += 10;
    document.querySelector("#points").textContent = point;
}

document.querySelector(".bottompannel").addEventListener("click", function(abc){
    var whenclicked = Number(abc.target.textContent);
    if (whenclicked == hitdisplay){
        points();
        hit();
        generatingbubbles();
    }
});

hit();
generatingbubbles(); 
timer();