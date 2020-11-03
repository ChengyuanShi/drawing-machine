let array = [];
let backgroundColor = 250;
let noiseOffset = 0.0;
let strokeWidth = 5;
function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(1000, 300);    // background(150,200,250);
 pixelDensity(2);
  // drawGrid();

  noFill();
  noStroke();
}

function draw() {


      background(150,100,200,2);

loadPixels();
for(var y = 0; y < height; y++){
  for(var x = 0; x < width; x++){
    var index = (x + y * width) *20;
    pixels[index*0] = x;
    pixels[index*1] = 100;
    pixels[index*2] = y;
    pixels[index*3] = 255;
  }
}
updatePixels();

if (mouseIsPressed) {
      strokeWeight(strokeWidth);

      noiseOffset += 0.1;
      strokeWidth = noise(noiseOffset) * 15
      ;
      // var d = dist(x, y, mouseX, mouseY);

      stroke(map(mouseX,0,150,0,250,true));
      // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
      line(mouseX , mouseY, pmouseX, pmouseY);

       stepSize = textWidth();
}

  //     array.push([mouseX, mouseY]);
  //
  //     beginShape();
  //   for(let i = 0; i < array.length; i++){
  //   // line(array[i][0], array[i][1], array[i+1][0f], array[i+1][1]);
  //   curveVertex(array[i][0], array[i][1])
  // }
  // endShape();

}

function keyTyped(){

  if(key === 's'){
    // save the image
    saveCanvas('Drawing','png');
  } else if (key === 'c'){
    clear();

    // disply image
//     background(250);
//
//     beginShape();
//   for(let i = 0; i < array.length; i++){
//   // line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
//   curveVertex(array[i][0], array[i][1])
// }
// endShape();
  return false;
}
}
//
function mousePressed() {
  array = [];
 backgroundColor = 255;

}
// function drawGrid(){
//   numCells = 2;
//   fillColor = 0;
// strokeWeight(0);
//   for (let i = 0; i <= width; i += width/numCells){
//   for (let j = 0; j <= height; j += height/numCells){
//     if(fillColor === 255){
//       fillColor = 100;
//     } else{
//       fillColor = 255;
//     }
//     fill(fillColor);
//     rect(i, j, width/numCells, height/numCells);
//   }
//   }
// strokeWeight(5);
// }
