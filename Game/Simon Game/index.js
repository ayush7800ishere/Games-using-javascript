var highScore = 0;
var level = 0;
var colors = ["green", "yellow", "red", "blue"];
var userPattern = [];
var correctPattern = [];
var numClick = -1;



function chechAnswer(color) {
    if (color == correctPattern[numClick]) {
        if (userPattern.length === correctPattern.length) {
            setTimeout(function () {
                userPattern = [];
                numClick = -1;
                level++;
                $(".level").text("Level : " + level);
                next();
            }, 1500)

        }
    }
    else {
        $("h1").html("Game Over<br> Press any key to start again");
        $()
        userPattern = [];
        correctPattern = [];
        numClick = -1;
        if (highScore < level) {
            highScore = level;
        }
        $(".highScore").text("High Score : " + highScore);
        $(".level").text("Level : " + level);
        level = 0;

    }
}

function next() {
    var rand = Math.floor(Math.random() * 4);
    var color = colors[rand];
    correctPattern.push(color)
    animate(color);
    play(color);
    console.log(color);
}

function animate(color) {
    $("#" + color).fadeOut(100).fadeIn(100);

}
function play(color) {
    var path = 'sounds/green.mp3';
    var audio = new Audio(path);
    audio.play();
}


$(document).keydown(function () {
    $("h1").text("game begins");
    $(".highScore").text("High Score : " + highScore);
    $(".level").text("Level : " + level);
    setTimeout(function () {
        next();
    }, 1000)

})


$(".btn").click(function (e) {
    numClick++;
    var butttonColor = e.target.id;
    animate(butttonColor);
    play(butttonColor);
    userPattern.push(butttonColor)
    chechAnswer(butttonColor);
})
