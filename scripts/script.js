var countdown = 13;
var counter = 1;

var timerInterval = setInterval(timer, 1000);

function timer() {
    if (countdown == 0) {
        clearInterval(timerInterval);
        fadeout();
    } else {
        if ( countdown <= 10) {
            var btn = document.getElementById('closingBtn');
            btn.style.transform = 'scale(1.15)';
            btn.style.filter =  'grayscale(0%)';
            btn.addEventListener('click', fadeout);
        }
        document.getElementById('timerLabel').innerHTML = 'Schließt in ' + countdown + '...';
        countdown--;
    }
}

function fadeout() {
    var fadingInterval = setInterval(function () {
        if (counter <= 0) {
            document.getElementById('content').style.display = 'none';
            clearInterval(fadingInterval);
        } else {
            counter = counter - 0.1;
            document.getElementById('content').style.opacity = counter;
        }
    }, 100);
}
