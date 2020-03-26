var myAsciiArt;
var asciiart_width = 120;
var asciiart_height = 60;
var images = [];
var gfx;
var ascii_arr;
var cyclic_t;

function preload() {
    // Gustave_Courbet_Le_Desperere_1845
    images[0] = loadImage('Gustave_Courbet_Le_Desperere_1845.jpg');
    // kang_fu_rubel
    images[1] = loadImage('kang_fu_rubel.jpg');
    // Ren_Ishikawa
    // images[2] = loadImage('Ren_Ishikawa.jpg');
    // road
    // images[3] = loadImage('road.PNG');
}


function setup() {
    createCanvas(640, 480);
    gfx = createGraphics(asciiart_width, asciiart_height);
    gfx.pixelDensity(1);
    myAsciiArt = new AsciiArt(this);
    myAsciiArt.printWeightTable();
    textAlign(CENTER, CENTER); textFont('monospace', 8); textStyle(NORMAL); noStroke(); fill('#26734d');  // play with these values!
    frameRate(30);
}
  
function draw() {
    background(0);
    cyclic_t = millis() * 0.0002 % images.length;
    gfx.image(images[floor(cyclic_t)], 0, 0, gfx.width, gfx.height);
    gfx.filter(POSTERIZE, 6);   // play with the posterize value
    ascii_arr = myAsciiArt.convert(gfx);
    myAsciiArt.typeArray2d(ascii_arr, this);
    tint(255, pow(1.0 - (cyclic_t % 1.0), 4) * 255);
    image(images[floor(cyclic_t)], 0, 0, width, height);
    noTint();
}