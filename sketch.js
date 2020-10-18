let array = [];
let backgroundColor = 250;
function setup() {
  createCanvas(windowWidth, windowHeight);

  background(backgroundColor);

  strokeWeight(5);
  noFill();
}

function draw() {

  if (mouseIsPressed){
    // stroke(map(mouseX,0,500,0,250,true));
      backgroundColor-= 5;
      background(backgroundColor);
      // line(mouseX, mouseY, pmouseX, pmouseY);
      array.push([mouseX, mouseY]);

      beginShape();
    for(let i = 0; i < array.length; i++){
    // line(array[i][0], array[i][1], array[i+1][0f], array[i+1][1]);
    curveVertex(array[i][0], array[i][1])
  }
  endShape();
  }
}

function keyTyped(){

  if(key === 's'){
    // save the image
    saveCanvas('Drawing','png');
  } else if (key === 'd'){
    // disply image
    background(250);

    beginShape();
  for(let i = 0; i < array.length; i++){
  // line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
  curveVertex(array[i][0], array[i][1])
}
endShape();
  return false;
}
}

function mousePressed() {
  array = [];
  backgroundColor = 250;

}
