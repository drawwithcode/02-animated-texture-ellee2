let diameter = 10;
let growAmount;
let grow = true;
let i;
let slider;
const colorList = ['#F75C03',
 '#D90368',
 '#820263',
 '#291720'
];


function setup() {
  createCanvas(windowWidth, windowHeight); 
  frameRate(10);
  slider = createSlider(0.001, 4, 1, 0.010);
  slider.position(windowWidth/2 - 40, windowHeight - 40);
  slider.style('width', '80px');
}


function draw() {
 growAmount = slider.value();
 background("black");
    if (keyIsDown(DOWN_ARROW)){
    Dynamic();
  }
    else {
      Static();
   }
   
push();
textSize(20);
noStroke();
fill("white");
textStyle(BOLD);
textAlign(CENTER);
textFont();
text("Press key down arrow and create chaos!", windowWidth/2, 50);
pop();

push();
textSize(15);
noStroke();
fill("white");
textAlign(CENTER);
textFont();
text("Discover the slider!", windowWidth/2, windowHeight-55);
pop();


  
}
 
    
function Static(){ 

  for(let x = 500; x < windowWidth - 500 ; x+=25)
  {
    
  for(let y = 90; y < windowHeight - 90; y+=25) 
  {
	
  
 noStroke();
  	
 if (diameter <=10) {
  grow = true
 }
 if (diameter >=20) {
  grow = false
 }

 if (grow == true ) {
  diameter += growAmount
}
  else {
    diameter -= growAmount
 }
  	
 let colorHex = random(colorList);
   fill(color(colorHex));

 ellipse(x, y, diameter);

    
	}
  }
}

function Dynamic() {
 	
  for (let i = 0; i < 464; i++) {
    fill(random(colorList));
    ellipse(random(windowWidth), random(windowHeight), random(25));

    
}
}