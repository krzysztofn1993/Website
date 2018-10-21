 class Drop{
  constructor(){
    this.loc = createVector(random(0,width),random(-0.75*height,0));
    this.vel = createVector(0,floor(random(5,20)));
    this.acc = createVector(0.02,0);
    this.reject = createVector(0.1,5);
    this.distance = createVector(0,0);
    this.powerRange = 20;
  }
  draw(w,r,g,b){
    stroke(r,g,b);
    strokeWeight(w);
    point(this.loc.x,this.loc.y);
  }
  behave(w,r,g,b){
    this.move();
    this.checkBoundaries();
    this.draw(w,r,g,b);
  }
  move(){
    this.loc.add(this.vel);
  }
  checkBoundaries(){
    if(this.loc.x >= width){
      this.vel.x = width;
    }
    if(this.loc.x <= 0){
      this.loc.x = 0;
    }
    if(this.loc.y >= height){
      this.loc.set(random(0,width),random(-0.75*height,0));
      this.vel.set(0,floor(random(5,20)));
    }
  }
  force(){
    this.distance.set(this.loc.x-mouseX,this.loc.y-mouseY);
    if(abs(this.distance.x) < this.powerRange && abs(this.distance.y) < this.powerRange){
      if(this.distance.x < 0){
        this.vel.x -= this.reject.x;
      }else{
        this.vel.x += this.reject.x;
      }
    }
  }
}
