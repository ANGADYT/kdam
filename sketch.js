var taxi
var backgroundImage,taxiImage;
var fuelImage,CoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var coin,coinGroup,fuel,fuelGroup;


function preload() {
  backgroundImage=loadImage("./road.png");
  taxiImage=loadImage("./taxi.png");
  blastImage=loadImage("./blast.png");
  fuelImage=loadImage("./fuel.png");
  coinImage=loadImage("./goldCoin.png");
  lifeImage=loadImage("./life.png");
  obstacle1Image=loadImage("./obstacle1.png");
  obstacle2Image=loadImage("./obstacle2.png");
}

function setup() {
createCanvas(2000,9190);

taxi=createSprite(1000,8900);
taxi.addImage(taxiImage)



coinGroup = new Group();
fuelGroup = new Group();

}

function draw() {
  background(backgroundImage)

  //taxi.x=taxi.x+5

  if(keyDown("SPACE")){
    taxi.velocity.y=-10

  }

  if(keyDown("right_arrow")){
    taxi.position.x = taxi.position.x +15
  }

  if(keyDown("left_arrow")){
    taxi.position.x = taxi.position.x -15
  }
  spawnFuel();
  spawnCoins();
  //if(taxi.isTouching(coinGroup)){
    //coinGroup.destroyEach()
  //}

  //if(taxi.isTouching(fuelGroup)){
  //  fuelGroup.destroyEach()
//  }



  drawSprites();
}


function spawnCoins(){
  if(frameCount % 60 === 0 ){
coin=createSprite(10,10);
coin.addImage(coinImage);
coin.scale=0.5
coin.position.y =Math.round(random(100,6000));
coin.position.x =Math.round(random(1000,8060));

coinGroup.add(coin)
  }
}
function spawnFuel(){
  if (frameCount % 60 === 0) {
fuel=createSprite(100,100);
//fuel.velocityY=5
fuel.addImage(fuelImage);
fuel.position.y = Math.round(random(100,6000))
fuel.position.x =Math.round(random(100,100));
fuel.scale=0.1
fuelGroup.add(fuel)
  }
}
