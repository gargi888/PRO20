var cat, cat_running, catLastImg;
var mouse, mouse_running, mouseLastImg;
var bg,bgImg;

function preload() {
    //load the images here
bgImg = loadImage("garden.png");
cat_running = loadAnimation("tomOne.png","tomTwo.png","tomThree.png");
catLastImg = loadImage("tomFour.png");
mouse_running = loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png");
mouseLastImg = loadImage("jerryFour.png");
}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here
    bg=createSprite(0,0,1200,800);
    bg.addImage(bgImg);

    cat=createSprite(500,400,10,10);
    cat.addAnimation(Running,"cat_running");

    mouse=createSprite(200,400,10,10);
    mouse.addAnimation(Running,"mouse_running");

}

function draw() {
    background("black");    
    
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catLastImg");
    cat.changeAnimation("catLastImg");
    mouse.addAnimation("mouseLastImg");
    mouse.changeAnimation("mouseLastImg");
}

    text(mouseX+','+ mouseY,10,45);
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("cat_running");
}
}
