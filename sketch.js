let welcomePage = true;
let characterPage = false;
let savePage = false;
let dogPage = false;
let catPage = false;
let bunnyPage = false;
let mousePage = false;
let frogPage = false;

let dogOptions = [];
let catOptions = [];
let bunnyOptions = [];
let mouseOptions = [];
let frogOptions = [];

let weather1 = ["Sunny", "Clear", "Stormy", "Dark", "Rainy"];
let weather2 = ["cold", "cool", "fair", "warm", "hot"];
let info1;
let info2;

let dogBase;
let catBase;
let bunnyBase;
let mouseBase;
let frogBase;

let topCount = 0;
let bottomCount = 6;
let shoeCount = 12;
let accessoryCount = 18;

let rand1;
let rand2;
let rand3;
let rand4;

let hennyPenny;
let buttonClick;
let bratzMagicHair;
let flashCassanova;

let click = false;
let info = false;
let sound = true;

let speaker1;
let speaker2;

let closetm;
let closetc;
let closetb;
let closetd;
let closetf;

let sparklePage;

let mouseCloset;
let catCloset;
let bunnyCloset;
let dogCloset;
let frogCloset;

let loud;
let mute;

function preload() {
  hennyPenny = loadFont("./HennyPenny-Regular.ttf");
  buttonClick = loadSound("./buttonClick.wav");
  bratzMagicHair = loadSound("./bratzMagicHair.mp3");
  flashCassanova = loadSound("./flashCassanova.mp3");
  
  loud = loadImage("./loud.PNG");
  mute = loadImage("./mute.PNG");

  closetm = loadImage("./closetm.PNG");
  closetb = loadImage("./closetb.PNG");
  closetc = loadImage("./closetc.PNG");
  closetd = loadImage("./closetd.PNG");
  closetf = loadImage("./closetf.PNG");

  sparklePage = loadImage("./sparklePage.PNG");

  dogBase = loadImage("./animals/dog.PNG");
  catBase = loadImage("./animals/cat.PNG");
  bunnyBase = loadImage("./animals/bunny.PNG");
  mouseBase = loadImage("./animals/mouse.PNG");
  frogBase = loadImage("./animals/frog.PNG");

  //0, 6, 12, and 18 are the pjs
  
  for (let i = 0; i <= 5; i++) {
    dogOptions[i] = loadImage("./dog outfits/tops/dog" + i + ".PNG");
    catOptions[i] = loadImage("./cat outfits/tops/cat" + i + ".PNG");
    bunnyOptions[i] = loadImage("./bunny outfits/tops/bunny" + i + ".PNG");
    mouseOptions[i] = loadImage("./mouse outfits/tops/mouse" + i + ".PNG");
    frogOptions[i] = loadImage("./frog outfits/tops/frog" + i + ".PNG");
  }

  for (let j = 6; j <= 11; j++) {
    dogOptions[j] = loadImage("./dog outfits/bottoms/dog" + j + ".PNG");
    catOptions[j] = loadImage("./cat outfits/bottoms/cat" + j + ".PNG");
    bunnyOptions[j] = loadImage("./bunny outfits/bottoms/bunny" + j + ".PNG");
    mouseOptions[j] = loadImage("./mouse outfits/bottoms/mouse" + j + ".PNG");
    frogOptions[j] = loadImage("./frog outfits/bottoms/frog" + j + ".PNG");
  }

  for (let k = 12; k <= 17; k++) {
    dogOptions[k] = loadImage("./dog outfits/shoes/dog" + k + ".PNG");
    catOptions[k] = loadImage("./cat outfits/shoes/cat" + k + ".PNG");
    bunnyOptions[k] = loadImage("./bunny outfits/shoes/bunny" + k + ".PNG");
    mouseOptions[k] = loadImage("./mouse outfits/shoes/mouse" + k + ".PNG");
    frogOptions[k] = loadImage("./frog outfits/shoes/frog" + k + ".PNG");
  }

  for (let p = 18; p <= 21; p++) {
    dogOptions[p] = loadImage("./dog outfits/accessories/dog" + p + ".PNG");
    catOptions[p] = loadImage("./cat outfits/accessories/cat" + p + ".PNG");
    bunnyOptions[p] = loadImage("./bunny outfits/accessories/bunny" + p + ".PNG");
    mouseOptions[p] = loadImage("./mouse outfits/accessories/mouse" + p + ".PNG");
    frogOptions[p] = loadImage("./frog outfits/accessories/frog" + p + ".PNG");
  }
  
}

function setup() {
  let canvas = createCanvas(1450, 750);
  canvas.parent("sketch");

  rand1 = int(random(1, 6));
  rand2 = int(random(7, 12));
  rand3 = int(random(13, 18));
  rand4 = int(random(19, 23));

  flashCassanova.play();
  info1 = int(random(weather1.length));
  info2 = int(random(weather2.length));


  dogCloset = new background(closetd);
  catCloset = new background(closetc);
  bunnyCloset = new background(closetb);
  mouseCloset = new background(closetm);
  frogCloset = new background(closetf);
  sparkle = new background(sparklePage);
}

class background {
  constructor(image){
    this.image = image;
  }

  display() {
    image(this.image, 0, 0, 1450, 750);
  }
}

function draw() {
  if (welcomePage) {
    drawWelcomePage();

    fill(255);
    textSize(60);
    textFont(hennyPenny);
    text("~ fashion friends ~", width*0.310344828, height*0.15625-10);
    textSize(40);
    text("select a character to start!",width*0.310344828, height*0.95+10);

    if (!flashCassanova.isPlaying() && sound) {
      flashCassanova.play();
      bratzMagicHair.stop();
    }

  } else if (characterPage) {
    if (dogPage) {
      dogCloset.display();
      drawDogPage();
    } else if (catPage) {
      catCloset.display();
      drawCatPage();
    } else if (bunnyPage) {
      bunnyCloset.display();
      drawBunnyPage();
    } else if (mousePage) {
      mouseCloset.display();
      drawMousePage();
    } else if (frogPage) {
      frogCloset.display();
      drawFrogPage();
    }
    drawPage();

    if (!flashCassanova.isPlaying() && sound) {
      flashCassanova.play();
      bratzMagicHair.stop();
    }
  } else if (savePage) {
    sparkle.display();
    drawSavePage();

    if (!bratzMagicHair.isPlaying() && sound) {
      flashCassanova.stop();
      bratzMagicHair.play();
    }
  } else {
    drawWelcomePage();
  }

  textSize(30);
  fill(0);
  if (sound) {
    image(loud,width*0.916666667+30,height*0.0625-20,50,50);
  } else {
    image(mute,width*0.916666667+30,height*0.0625-20,50,50);
    flashCassanova.stop();
    bratzMagicHair.stop();
  }
}

function drawDog(x, y) {
  image(dogBase, x, y, 750, 750);
}

function drawCat(x, y) {
  image(catBase, x, y, 750, 750);
}

function drawBunny(x, y) {
  image(bunnyBase, x, y, 750, 750);
}

function drawMouse(x, y) {
  image(mouseBase, x, y, 750, 750);
}

function drawFrog(x, y) {
  image(frogBase, x, y, 750, 750);
}

function drawWelcomePage() {
  sparkle.display();

  push();
  scale(0.8);
  drawDog(width*-0.1875+50, height*0.25-30);
  rand1 = 2;
  rand2 = 9;
  rand3 = 15;
  rand4 = 18;
  drawOutfit(dogOptions, width*-0.1875+50, height*0.25-30);

  drawCat(width*0.0625+50, height*0.25-30);
  rand1 = 2;
  rand2 = 9;
  rand3 = 15;
  rand4 = 21;
  drawOutfit(catOptions, width*0.0625+50, height*0.25-30);

  drawBunny(width*0.3125+50, height*0.25-30);
  rand1 = 2;
  rand2 = 10;
  rand3 = 15;
  rand4 = 19;
  drawOutfit(bunnyOptions, width*0.3125+50, height*0.25-30);

  drawMouse(width*0.5625+50, height*0.25-30);
  rand1 = 2;
  rand2 = 8;
  rand3 = 16;
  rand4 = 20;
  drawOutfit(mouseOptions, width*0.5625+50, height*0.25-30);

  drawFrog(width*0.8125+100, height*0.25-30);
  rand1 = 1;
  rand2 = 7;
  rand3 = 17;
  rand4 = 19;
  drawOutfit(frogOptions, width*0.8125+100, height*0.25-30);

  pop();

  topCount = 0;
  bottomCount = 6;
  shoeCount = 12;
  accessoryCount = 18;
}

function drawDogPage(){
  drawDog(width*0.1875+100, 0);
  drawOutfit(dogOptions, width*0.1875+100, 0);
}

function drawCatPage() {
  drawCat(width*0.1875+100, 0);
  drawOutfit(catOptions, width*0.1875+100, 0);
}

function drawBunnyPage() {
  drawBunny(width*0.1875+100, 25);
  drawOutfit(bunnyOptions, width*0.1875+100, 25);
}
 
function drawMousePage() {
  drawMouse(width*0.1875+100, 0);
  drawOutfit(mouseOptions, width*0.1875+100, 0);
}

function drawFrogPage() {
  drawFrog(width*0.1875+100, 0);
  drawOutfit(frogOptions, width*0.1875+100, 0);
}

function drawOutfit(arr, x, y) {
  if (welcomePage) {
    image(arr[rand3], x, y, 750, 750);
    image(arr[rand2], x, y, 750, 750);
    image(arr[rand1], x, y, 750, 750);
    image(arr[rand4], x, y, 750, 750);
  } else if (characterPage || savePage) {
    image(arr[shoeCount], x, y, 750, 750);
    image(arr[bottomCount], x, y, 750, 750);
    image(arr[topCount], x, y, 750, 750);
    image(arr[accessoryCount], x, y, 750, 750);
  }
}

function drawButtons() {
  noStroke();
  textSize(30);
  for (let r = 0; r < 600; r = r + 150) {
    fill(255);
    rect(width*0.25, height*0.1875 + r, 50, 30, 90);
    rect(width*0.708333333, height*0.1875 + r, 50, 30, 90);
    fill(0);
    text("<", width*0.2625, height*0.21875 + r);
    text(">", width*0.7225, height*0.21875 + r);
  }

  fill(255);
  rect(width*0.0208333333, height*0.84375, 150, 80, 70);
  rect(width*0.854166667, height*0.84375, 150, 80, 70);

  fill(0);
  text("home", (width*0.0541666667) - 5, height*0.9125);
  text("finish", (width*0.883333333) - 5, height*0.9125);
}

function speechBubble() {
  noStroke();
  textSize(25);
  fill(255);
  rect(width*0.583333333, height*0.125, 200, 200, 90);

  fill(0);
  rect(width*0.6375-15, height*0.3125, 75, 40, 70);

  text("Help me pick", width*0.6083333333-10, height*0.20625);
  text("out an outfit", width*0.604166667-10, height*0.25);
  text("for the day!", width*0.6125-10, height*0.29375);

  fill(250);
  text("ok!", (width*0.654166667) - 18, height*0.35);
}

function drawPage() {
  if (click) {
    drawButtons();

    fill(255);
    rect(width*0.0208333333, height*0.05625, 150, 80, 70);

    fill(0);
    textSize(30);
    text("info", width*0.0625-10, height*0.125);

    if (info) {
      fill(255);
      rect(width*0.333333333, (height*0.0625), 450, 650, 90);

      fill(0);
      circle((width*0.608333333) - 25, height*0.125, 50);
      text("Major:", width*0.375, height*0.225);
      text("Zodiac Sign:", width*0.375, height*0.525);
      text("Favorite Color:", width*0.375, height*0.6625);
      text("Favorite Food:", width*0.375, height*0.8);
      if (dogPage) {
        textSize(40);
        text("Dog!", width*0.458333333, height*0.15625);
        textSize(30);
        text("Business!", width*0.375, height*0.2875);
        text("Aries!", width*0.375, height*0.5875);
        text("Baby Blue!", width*0.375, height*0.725);
        text("T-bone steak!", width*0.375, height*0.8625);
      } else if (catPage) {
        textSize(40);
        text("Cat!", width*0.458333333, height*0.15625);
        textSize(30);
        text("Literature!", width*0.375, height*0.2875);
        text("Gemini!", width*0.375, height*0.5875);
        text("Burgundy!", width*0.375, height*0.725);
        text("Sushi!", width*0.375, height*0.8625);
      } else if (bunnyPage) {
        textSize(40);
        text("Bunny!", width*0.458333333, height*0.15625);
        textSize(30);
        text("Architecture!", width*0.375, height*0.2875);
        text("Cancer!", width*0.375, height*0.5875);
        text("Brown!", width*0.375, height*0.725);
        text("Carrot Cake!", width*0.375, height*0.8625);
      } else if (mousePage) {
        textSize(40);
        text("Mouse!", width*0.458333333, height*0.15625);
        textSize(30);
        text("Film!", width*0.375, height*0.2875);
        text("Aquarius!", width*0.375, height*0.5875);
        text("Pink!", width*0.375, height*0.725);
        text("Mac n' Cheese!", width*0.375, height*0.8625);
      } else if (frogPage) {
        textSize(40);
        text("Frog!", width*0.458333333, height*0.15625);
        textSize(30);
        text("Environmental Science!", width*0.375, height*0.2875);
        text("Pisces!", width*0.375, height*0.5875);
        text("Green!", width*0.375, height*0.725);
        text("Flies! (lol)", width*0.375, height*0.8625);
      }
      text("Today's Weather:", width*0.375, height*0.375);
      text("" + weather1[info1] + " and " + weather2[info2] + "!", width*0.375, height*0.4375);

      fill(255);
      text("X", (width*0.595833333) - 20, height*0.1375);
    } 
  } else {
    speechBubble();
  }
}

function drawSavePage() {
  if (dogPage) {
    drawDogPage();
  } else if (catPage) {
    drawCatPage();
  } else if (bunnyPage) {
    drawBunnyPage();
  } else if (mousePage) {
    drawMousePage();
  } else if (frogPage) {
    drawFrogPage();
  }

  fill(255);
  rect(width*0.0208333333, height*0.84375, 150, 80, 70);
  rect(width*0.854166667, height*0.84375, 150, 80, 70);
  rect(width*0.166666667, height*0.84375, 150, 80, 70);

  fill(0);
  text("home", (width*0.0541666667) - 5, (height*0.9125) + 5);
  text("save", (width*0.89166666) - 10, (height*0.90625));
  text("back", (width*0.204166667) - 10, (height*0.9125));

  textSize(30);
  fill(255);
  rect(width*0.583333333, height*0.125, 200, 200, 90);

  fill(0);
  text("Thanks for", (width*0.604166667) - 5, height*0.2375);
  text("your help!", (width*0.608333333) - 10, 230);
}

function mousePressed() {
  if (welcomePage) {
    if (mouseY >= height*0.29375 && mouseY <= height*0.8625) {
      if (mouseX >= width*0.00833333333 && mouseX <= width*0.191666667) {
        dogPage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
        buttonClick.play();
      } else if (mouseX >= width*0.208333333 && mouseX <= width*0.383333333) {
        catPage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
        buttonClick.play();
      } else if (mouseX >= width*0.408333333 && mouseX <= width*0.5875) {
        bunnyPage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
        buttonClick.play();
      } else if (mouseX >= width*0.605833333 && mouseX <= width*0.789166667) {
        mousePage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
        buttonClick.play();
      } else if (mouseX >= width*0.804166667 && mouseX <= width*0.993333333){
        frogPage = true;
        welcomePage = false;
        characterPage = true;
        savePage = false;
        buttonClick.play();
      }
    } 
  
  }

  if (characterPage && click) {
    if (mouseX >= (width*0.708333333) - 2 && mouseX <= (width*0.75) - 10) {
      if (mouseY >= height*0.1875 && mouseY <= height*0.225) {
        if (accessoryCount < 21) {
          accessoryCount++;
        } else if (accessoryCount == 21) {
          accessoryCount = 18;
        }
        buttonClick.play();
      } else if (mouseY >= (height*0.375) + 10 && mouseY <= (height*0.4125) + 10) {
        if (topCount < 5) {
          topCount++;
        } else if (topCount == 5) {
          topCount = 1;
        }
        buttonClick.play();
      } else if (mouseY >= (height*0.5625) + 20 && mouseY <= (height*0.6) + 20) {
        if (bottomCount < 11) {
          bottomCount++;
        } else if (bottomCount == 11) {
          bottomCount = 7;
        }
        buttonClick.play();
      } else if (mouseY >= (height*0.75) + 30 && mouseY <= (height*0.7875) + 30) {
        if (shoeCount < 17) {
          shoeCount++;
        } else if (shoeCount == 17) {
          shoeCount = 13;
        }
        buttonClick.play();
      } 
    } else if (mouseX >= width*0.25 && mouseX <= (width*0.291666667) - 10) {
      if (mouseY >= height*0.1875 && mouseY <= height*0.225) {
        if (accessoryCount > 18) {
          accessoryCount--;
        } else if (accessoryCount <= 18) {
          accessoryCount = 21;
        }
        buttonClick.play();
      } else if (mouseY >= (height*0.375) + 10 && mouseY <= (height*0.4125) + 10) { 
        if (topCount > 1) {
          topCount--;
        } else if (topCount <= 1) {
          topCount = 5;
        }
        buttonClick.play();
      } else if (mouseY >= (height*0.5625) + 20 && mouseY <= (height*0.6) + 20) {
        if (bottomCount > 7) {
          bottomCount--;
        } else if (bottomCount <= 7) {
          bottomCount = 11;
        }
        buttonClick.play();
      } else if (mouseY >= (height*0.75) + 30 && mouseY <= (height*0.7875) + 30) {
        if (shoeCount > 13) {
          shoeCount--;
        } else if (shoeCount <= 13) {
          shoeCount = 17;
        } 
        buttonClick.play();
      }
    }

    if (mouseX >= width*0.0208333333 && mouseX <= width*0.145833333 && mouseY >= height*0.05625 && mouseY <= height*0.15625 && !info) {
      info = true;
      buttonClick.play();
    } 

    if (mouseX >= (width*0.5875) - 25 && mouseX <= (width*0.629166667) - 30 && mouseY >= height*0.09375 && mouseY <= height*0.15625 && info) {
      info = false;
      buttonClick.play();
    }
  }

  if (characterPage && !click) {
    if (mouseX >= (width*0.6375) - 20 && mouseX <= (width*0.7) - 20 && mouseY >= height*0.3125 && mouseY <= height*0.3625) {
       click = true;
       buttonClick.play();
    }
  }

  if(characterPage || savePage) {
    if (mouseY >= height*0.84375 && mouseY <= height*0.94375 && mouseX >= width*0.0208333333 && mouseX <= (width*0.145833333) - 30) {
        welcomePage = true;
        savePage = false;
        characterPage = false;
        dogPage = false;
        catPage = false;
        bunnyPage = false;
        mousePage = false;
        frogPage = false;
        click = false;
        buttonClick.play();
        if (!flashCassanova.isPlaying()) {
          flashCassanova.play();
          bratzMagicHair.stop();
        }

        info1 = int(random(weather1.length));
        info2 = int(random(weather2.length));
    }
  }

  if (mouseY >= height*0.84375 && mouseY <= height*0.94375 && mouseX >= width*0.854166667 && (mouseX <= width*0.979166667 -30) ) {
    if (characterPage) {  
      welcomePage = false;
      savePage = true;
      characterPage = false;
      buttonClick.play();
      flashCassanova.stop();
      bratzMagicHair.play();
    } else if (savePage) {
      saveCanvas('myCharacter.jpg');
      buttonClick.play();
    }
  } 

  if (savePage) {
    flashCassanova.stop();
    bratzMagicHair.play();
    if (mouseX >= width*0.166666667 && mouseX <= (width*0.29166667) && mouseY >= height*0.84375 && mouseY <= height*0.94375){
      characterPage = true;
      savePage = false;
      buttonClick.play();

      bratzMagicHair.stop();
      flashCassanova.play();

    }
  }

  if (mouseX >= width*0.916666667+30 && mouseX <= width*0.958333333+30 && mouseY >= height*0.0625-20 && mouseY <= height*0.125-20){
    if (sound) {
      sound = false;
      buttonClick.play();
    } else {
      sound = true;
      buttonClick.play();
    }
  }
}