let counter = 0
let img;
let song;
var positionX = 300;
var positionY = 300;
var d;
var badguy = [];

function preload() {
  song = loadSound('Theme.mp3')
  img = loadImage('vice title.png')
  img1 = loadImage('Goose_portrait.png')
  img2 = loadImage('intro.gif')
  img3 = loadImage('police office.jpeg')
  img4 = loadImage('car 1.gif')
  img5 = loadImage('goose in glasses.jpeg')
  img6 = loadImage('poolside.png')
  img7 = loadImage('car 2.gif')
  img8 = loadImage('warehouse out.jpeg')
  img9 = loadImage('warehouse.jpeg')
  img10 = loadImage('Goose flipped.png')
  img11 = loadImage('nerf.png')
  img13 = loadImage('criminal.png')
  img14 = loadImage('brick.png')
  img15 = loadImage('bruce.png')
  img16 = loadImage('cement.jpeg')
  img17 = loadImage('bricks.png')
  img18 = loadImage('cop car.jpeg')
  img19 = loadImage('city hall.jpeg')
  img20 = loadImage('sunset.gif')
  GunShot = loadSound('GunShot.mp3')
}

function setup() {
  createCanvas(1000, 700);
  song.play();

  circ1 = new circles();
  circ2 = new circles();

  img12 = new shooter();
}

function draw() {
  if (counter == 0) {
    background('violet');
    fill('lightGray')
    noStroke()
    rect(175, 160, 640, 370)
    image(img, 195, 170, 600, 350)
    fill(255)
    textFont('Brush Script MT')
    textSize(180)
    text('Goose', 80, 170)
    textFont('arial')
    textSize(30)
    text('(click to continue)', 380, 690)
    image(img1, 660, 380, 320, 320)

  } else if (counter == 1) {
    background(img2)
    fill('violet')
    textAlign(CENTER)
    textFont('Brush Script MT')
    textSize(130)
    text('Miami 1985', 500, 630)

  } else if (counter == 2) {
    background(0)
    fill('white')
    textAlign(LEFT)
    textFont('Courier New')
    textSize(40)
    text('Officer Honk has just been called\ninto the station about a tip on a\npotential drug bust.', 110, 300)

  } else if (counter == 3) {
    background(img3)
    image(img1, 50, 380, 500, 500)
    fill('white')
    textAlign(LEFT)
    textFont('Courier New')
    textSize(36)
    text('what is it sir?', 490, 570)

  } else if (counter == 4) {
    background(img3)
    image(img1, 50, 380, 500, 500)
    fill('white')
    textAlign(LEFT)
    textFont('Courier New')
    textSize(36)
    text('we think its \nhim, Honk.', 450, 150)

  } else if (counter == 5) {
    background(img3)
    image(img1, 50, 380, 500, 500)
    fill('white')
    textAlign(LEFT)
    textFont('Courier New')
    textSize(36)
    text('okay but this \nis the last time\ni go after him.', 490, 570)

  } else if (counter == 6) {
    background(img3)
    image(img1, 50, 380, 500, 500)
    fill('white')
    textAlign(LEFT)
    textFont('Courier New')
    textSize(36)
    text('thank you Honk.\ngo talk to gina.\nshe has more info', 450, 150)

  } else if (counter == 7) {
    background(img4)
    fill('violet')
    textAlign(CENTER)
    textFont('Brush Script MT')
    textSize(130)
    text('To the pool...', 500, 100)

  } else if (counter == 8) {
    background(img5)
    fill('white')
    textAlign(LEFT)
    textFont('Courier New')
    textSize(36)
    text('gina what do you know\nabout him?', 290, 570)

  } else if (counter == 9) {
    background(img6)
    fill('white')
    textAlign(LEFT)
    textFont('Courier New')
    textSize(36)
    text('we know where he is.\nbut please dont go after\nhim Honk its too dangerous', 290, 570)

  } else if (counter == 10) {
    background(img5)
    fill('white')
    textAlign(LEFT)
    textFont('Courier New')
    textSize(36)
    text('i have to.\nwhere is he?', 290, 570)

  } else if (counter == 11) {
    background(img6)
    fill('white')
    textAlign(LEFT)
    textFont('Courier New')
    textSize(36)
    text('his old warehouse on the docks.\nbe safe Honk.', 290, 570)

  } else if (counter == 12) {
    background(img7)
    fill('violet')
    textAlign(CENTER)
    textFont('Brush Script MT')
    textSize(130)
    text('To the drug house...', 500, 650)

  } else if (counter == 13) {
    background(img8)
    image(img10, 660, 480, 220, 220)
    image(img11, 690, 570, 120, 80)

  } else if (counter == 14) {
    background(img9)
    image(img13, 115, 380, 170, 270)
    image(img14, 400, 390, 300, 100)
    image(img15, 720, 270, 130, 100)
    interaction();
    instruct = createP('shoot the criminal by clicking on them!');
    stop()

  } else if (counter == 15) {
    background(img9)
    image(img14, 400, 390, 300, 100)
    image(img15, 720, 270, 130, 100)
    fill('white')
    textAlign(LEFT)
    textFont('Courier New')
    textSize(20)
    text('oh shit', 680, 270)

  } else if (counter == 16) {
    background(img16)
    image(img17,300,150,440,400)
    fill('white')
    textAlign(LEFT)
    textFont('Courier New')
    textSize(40)
    text('thats a whole lotta cocaine', 270, 600)

  } else if (counter == 17) {
    background(img18)
    image(img15, 670, 170, 110, 90)
    image(img1, 50, 320, 360, 360)
    textAlign(LEFT)
    textFont('Courier New')
    textSize(40)
    text('youre going away for a\nlong time willis!', 330, 550)

  } else if (counter == 18) {
    background(img20)
    fill('darkturquoise')
    textAlign(CENTER)
    textFont('Brush Script MT')
    textSize(150)
    text('The End', width/2, 400)
  } 
}

function shooter() {

  this.r = 25;
  this.col = 255;

  this.display = function(x, y) {
    this.x = x;
    this.y = y;

    noFill();
    noStroke();
    ellipse(this.x, this.y, 10, 10);
    noFill();
    ellipse(this.x, this.y, 40, 40);
  }
}

function circles() {

  noFill();
  noStroke();
  this.r = 25;

  this.display = function(x, y) {
    this.x = x;
    this.y = y;

    ellipse(this.x, this.y, this.r * 2);
  }
}

function interaction() {

  noFill()
  noStroke()
  circ2.display(200, 500);
  circ1.display(mouseX, mouseY);

  img12.display(mouseX, mouseY);

  var d = dist(circ2.x, circ2.y, circ1.x, circ1.y);

  if (d < circ1.r + circ2.r) {
    GunShot.play()
  }
}

function mousePressed() {
  counter += 1;

  if (counter > 19) {
    counter = 0;
  }
}