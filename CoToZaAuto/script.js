/*
function car(image,mark){
    this.image=image;
    this.mark=mark;
    alert(this.image+this.mark);
}
var Fiat = car('image1.jpg','Fiat');
var BMW = car('image2.jpg','BMW');
var Audi = car('image3.jpg','Audi');
var Mercedres = car('image4.jpg','Mercedres');
var Porsche = car('image5.jpg','Porsche');

Fiat();
*/
var carImage = document.getElementById('car-image');
document.getElementById('container').style.backgroundImage = "url('tło.jpg')";

var images =
    [
    'FIAT.jpg',
    'bmw.jpg',
    'mercedes.jpg'
    ];

var carmark =
    [
    'FIAT',
    'bmw',
    'mercedes'
    ];
var random = Math.floor((Math.random() * images.length));

carImage.style.backgroundImage = `url(images/${images[random]})`;

function niewim(x,y){
    if (images.indexOf(x) == carmark.indexOf(y)) {
    console.log('ok '+ y);
    }
}

niewim('FIAT.jpg','FIAT');


















