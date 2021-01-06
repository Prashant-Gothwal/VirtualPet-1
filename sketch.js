var dogHappy;
var dogImage;

var foodS,foodStock;

var database;

function preload() {
  //Loading Dog Images
  dogHappy = loadImage("images/happydog.png");
  dogImage = loadImage("images/Dog.png");
  //
}

function setup() {
  createCanvas(800, 700);

  database = firebase.database();


  //Creating Dog
  dog = createSprite(390,400);
  dog.addImage(dogImage);
  dog.scale = 0.3;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
  

}


function draw() {

  //Setting Background Color
  background("Green");
  //

  //Displaying Text On Screen
  fill("Black");
  textSize(20);
  text("Note: Press Up Arrow To Feed Drago Milk", 220, 50);
  text("food remaning :",+foodS,300,250);
  //

  if(keyWentDown(UP_ARROW)){
    // writeStock(foodS);
    dog.addImage(dogHappy);
  }


  //Displaying Sprites
  drawSprites();
  //


}



function readStock(data){
  foodS = data.val();
  }
  
  function writeStock(x){
    if(x <= 0){
      x = 0;
    }
    else{
      x = x-1;
    }
      database.ref("/").update({
        Food : x,
      })
    }


