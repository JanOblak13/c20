var fixed,moving;


function setup() {
  createCanvas(1200,800)
 fixed= createSprite(600, 400, 50, 80);
moving=createSprite(400,200,80,30);
fixed.shapeColor="green";
moving.shapeColor="green";
fixed.debug=true;
moving.debug=true;
}

function draw() {
  background("cyan");  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
if (moving.x-fixed.x<fixed.width/2+moving.width/2&&
fixed.x-moving.x<fixed.width/2+moving.width/2&&
moving.y-fixed.y<fixed.height/2+moving.height/2&&
fixed.y-moving.y<fixed.height/2+moving.height/2) {
fixed.shapeColor="white";
moving.shapeColor="white"; 
}
else{
fixed.shapeColor="green";
moving.shapeColor="green";
}

  drawSprites();
}