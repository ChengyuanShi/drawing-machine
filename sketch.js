let array = [];
function setup() {
  createCanvas(600, 600);
  background(220, 150, 150);

  strokeWeight(5);
  noFill();
}

function draw() {

  if (mouseIsPressed){
    // stroke(map(mouseX,0,500,0,250,true));
    // line(mouseX, mouseY, pmouseX, pmouseY);
      background(0);
    array.push([mouseX, mouseY]);
  }
}

function keyTyped(){

  if(key === 's'){
    // save the image
    saveCanvas('Drawing','png');
  } else if (key === 'd'){
    // disply image
    background(220, 150, 150);
    beginShape();
  for(let i = 0; i < array.length; i++){
  // line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
  curveVertex(array[i][0], array[i][1])
}
endShape();
  return false;
}
}
