var images = document.querySelectorAll("[data-id]");
var colorsId = [] = document.querySelectorAll("[data-ids]");
var img = document.getElementById('img');
var fullscreen = false;


var stars = document.querySelectorAll("[data-star]");

for (var i = 0; i < images.length; i++) {
    var image = images[i];
    image.addEventListener('click', function (e) {
        imagePress(e.target.dataset.id);
    });
};

for (var i = 0; i < colorsId.length; i++) {
    var corel = colorsId[i];
    corel.addEventListener('click', function (e) {
        colorPress(e.target.dataset.ids);
    });
};

function starPress () {
    for (var i = 0; i < stars.length; i++) {
        if (stars[i].checked) {
            console.log(stars[i]);
            stars[i].style.background = '#dfdfdf';
        }
    };
}

function imagePress (number) {
    var fully = document.getElementById('fullscreen');
    fully.classList.remove("hidden");
    fullscreen = true;
    switch(number) {
        case '1':
            img.src = './img/IMG1234.jpg';  
        break;
        case '2':
            img.src = './img/IMG1235.jpg';
        break;
        case '3':
            img.src = './img/IMG1236.jpg';
        break;
        case '4':
            img.src = './img/IMG1237.jpg';
        break;
        case '5':
            img.src = './img/IMG1238.jpg';
        break;
        case '6':
            img.src = './img/IMG1239.jpg';
        break;
        case '7':
            img.src = './img/IMG1240.jpg';
        break;
        default:
    }
}

function colorPress (number) {
    if ( number === '1' || number === '4' || number === '7' || number === '10' || number === '13' || number === '16' || number === '19') {
        if (colorsId[number-1].classList.contains("dot-active-red")) {
            colorsId[number-1].classList.remove("dot-active-red");
        } else {
            colorsId[number-1].classList.add("dot-active-red");
        }
    } else if ( number === '2' || number === '5' || number === '8' || number === '11' || number === '14' || number === '17' || number === '20') {
        if (colorsId[number-1].classList.contains("dot-active-yellow")) {
            colorsId[number-1].classList.remove("dot-active-yellow");
        } else {
            colorsId[number-1].classList.add("dot-active-yellow");
        }
    } else if ( number === '3' || number === '6' || number === '9' || number === '12' || number === '15' || number === '18' || number === '21') {
        if (colorsId[number-1].classList.contains("dot-active-green")) {
            colorsId[number-1].classList.remove("dot-active-green");
        } else {
            colorsId[number-1].classList.add("dot-active-green");
        }
    }
}

function downScreen () {
    if (fullscreen === true) {
        var fully = document.getElementById('fullscreen');
        fully.classList.add("hidden");
        fullscreen = false;
    }
}


img.addEventListener('click', downScreen);
stars.forEach(star => star.addEventListener('click', starPress));