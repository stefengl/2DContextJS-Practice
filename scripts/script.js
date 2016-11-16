var elements;

setInterval(function () {
    elements = document.getElementsByClassName('snowflakes');
    var element = randomElement(elements);
    doTmp(element);
}, 1000)

function randomElement(elements) {
    var length = elements.length;
    var randomIndex = Math.floor(Math.random() * length);
    return elements[randomIndex];
}


function doTmp(element) {
    console.log(element);
    
}