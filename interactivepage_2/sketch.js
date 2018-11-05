var system;
var state = false;
var img;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  system = new ParticleSystem(createVector(width/2, 50));

}


function draw() {
  // put drawing code here
   background(255,0);
  //clear();
  // if (mouseReleased){
    
  // }
  // else {
  // }
  if(state == true){
    system.addParticle();
    system.run();
  }
  
}

function mouseReleased(){
  //this is where you change your mouse click area !!! 
  if(mouseX < 600 && mouseX > 0 && mouseY < 600 && mouseY > 0) return;
  state = !state;
}

function keyPressed() {
  if (key == 'c') {
    clear();
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(255,0,0, this.lifespan);
  strokeWeight(3);
  fill(255, this.lifespan);
  /*fill(127, this.lifespan);*/
  ellipse(this.position.x, this.position.y, 40, 40);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(createVector(random(screen.width),50)));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

