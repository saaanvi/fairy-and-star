var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
	bgImg = loadImage("images/starnight.png");


}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.setCollider('rectangle',500,10,100,100);
	fairy.debug=true;
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.debug=true;
	
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
  keyPressed();

 
	
if(star.y > 470 && starBody.position.y > 470 ){
	if(fairy.isTouching(star)){
		Matter.Body.setStatic(starBody,true);
		
	  }

	}
  drawSprites();

}

function keyPressed() {
	if(keyDown('left')){
		fairy.x=fairy.x - 5;
	}
	if(keyDown('right')){
	  fairy.x=fairy.x + 5;
  }
  
  if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(starBody,false); 
	console.log(star.y);
}
}
