var player;

function setup() {
  //Quick hack to prevent the canvas from overfilling the viewport
  createCanvas(windowWidth * .98, windowHeight * .98);
  player = new Player();
}

function draw() {
  clear();
  player.render();
}

//Called whenever the user resizes the window
function windowResized(){
  resizeCanvas(windowWidth * .98, windowHeight * .98);
}