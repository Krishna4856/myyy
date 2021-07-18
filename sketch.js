var iss,issImg,spct,spct1,spct2,spct3,spct4,space,spacebg;
var spct_Img1,spct_Img2,spct_Img3,spct_Img4 
function preload(){
  issImg=loadImage("iss.png");
  space=loadImage("spacebg.jpg");
  spct_Img1=loadImage("spacecraft1.png");
  spct_Img2=loadImage("spacecraft2.png");
  spct_Img3=loadAnimation("spacecraft3.png");
  spct_Img4=loadImage("spacecraft4.png");


}


function setup() {
  createCanvas(windowWidth,windowHeight);

  spct=createSprite(1000,800,50,50);
  spct.addImage(spct_Img1);
  //spct1.addAnimation(spct_Img1);
  //spct.addImage(spct_Img2);
  //spct3.addAnimation(spct_Img3);
  //spct.addImage(spct_Img4);
  
  spct.scale=0.3;
  //spct3=createSprite(1000,800,50,50);
  spct2.addImage(spctImg3);
  //spct3.scale=0.3;
  iss=createSprite(400, 330, 50, 50);
  iss.addImage(issImg);
  iss.scale=1.5
}


function draw() {
  background(space); 
  if(keyDown("left")){
spct.x=spct.x-3;
spct2=changeImage(spct_Img2);
  }
if(keyDown("right")){
spct.x=spct.x+3;
}
if(keyDown("up")){
spct.y=spct.y-3;
}
if(keyDown("down")){
spct.y=spct.y+3;
}
  drawSprites();
}