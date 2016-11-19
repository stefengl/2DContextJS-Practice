var countdown = 120;
var opacity = 1;
var content = document.getElementById('content');

var timerInterval = setInterval(function () {
    if (countdown == 0) {
        clearInterval(timerInterval);
        fadeout();
    } else {
        countdown--;
    }
}, 1000);


function fadeout() {
    var fadingInterval = setInterval(function () {
        if (opacity <= 0) {
            content.style.display = 'none';
            clearInterval(fadingInterval);
        } else {
            opacity = opacity - 0.1;
            content.style.opacity = opacity;
        }
    }, 100);
}