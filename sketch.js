var player;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player();
}

function draw() {
  clear();
  player.render();
}
