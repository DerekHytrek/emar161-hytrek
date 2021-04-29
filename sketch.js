let counter = 0
let img;
let song;

function preload() {
  img = loadImage('rocket launch.gif')
  img1 = loadImage('GArb.gif')
}

function setup() {
  createCanvas(600, 600);
  song.play();
}

function draw() {
  if (counter == 0) {
    background(0);
    fill(255)
    textSize(120)
    textAlign(CENTER)
    textFont('Times New Roman')
    text('Story', 300, 255)
    text('Structure', 300, 345)
    textSize(30)
    text('(click to continue)', 300, 590)
    textSize(40)
    text('A brief', 300, 50)
    text('introduction to:', 300, 85)
    text('Told with a goose', 300, 475)
  } else if (counter == 1) {
    background(0)
    fill(255)
    textSize(120)
    textAlign(CENTER)
    textFont('Times New Roman')
    text('Introduction', 300, 100)
    imageMode(CENTER);
    image(img2, 300, 300, 350, 350)
    textSize(30)
    textAlign(LEFT)
    text('there once was a goose',50,523)
    text('named, Goose.',50, 550)
  } else if (counter == 2) {
    background(0)
    fill(255)
    textSize(107)
    textAlign(CENTER)
    textFont('Times New Roman')
    text('Rising Action', 300, 100)
    imageMode(CENTER);
    image(img, 300, 300, 350, 350)
    textSize(30)
    textAlign(LEFT)
    text('he was not a very smart goose',50,523)
    text('and often made bad decisions.',50, 550)
  } else if (counter == 3) {
    background(0)
    fill(255)
    textSize(120)
    textAlign(CENTER)
    textFont('Times New Roman')
    text('Climax', 300, 100)
    imageMode(CENTER);
    image(img3, 300, 300, 350, 350)
    textSize(30)
    textAlign(LEFT)
    text('like that time he put all his savings',50,523)
    text('into gamestop.',50,550) 
  } else if (counter == 4) {
    background(0)
    fill(255)
    textSize(103)
    textAlign(CENTER)
    textFont('Times New Roman')
    text('Falling Action', 300, 100)
    imageMode(CENTER);
    image(img5, 300, 300, 350, 350)
    textSize(30)
    textAlign(LEFT)
    text('gamestop crashed and he lost all',50,523)
    text('of his money.',50,550) 
  } else if (counter == 5) {
    background(0)
    fill(255)
    textSize(136)
    textAlign(CENTER)
    textFont('Times New Roman')
    text('Resolution', 300, 100)
    imageMode(CENTER);
    image(img4, 300, 300, 350, 350)
    textSize(30)
    textAlign(LEFT)
    text('now he is a very broke goose.',50,523) 
  } else if (counter == 6) {
    background(0)
    imageMode(CENTER);
    image(img1,300,300,450,337.5)
  } 
} 
function mousePressed(){
    counter += 1;

  if (counter > 6) {
    counter = 0;
  } 
}