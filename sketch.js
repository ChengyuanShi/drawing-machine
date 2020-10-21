let array = [];
// let backgroundColor = 250;
let noiseOffset = 0.0;
let strokeWidth = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);

    background(150,200,250);


  // noFill();
}

function draw() {


      background(150,200,250,5);

      strokeWeight(strokeWidth);
      noiseOffset += 0.1;
      strokeWidth = noise(noiseOffset) * 50;

      stroke(map(mouseX,0,0,0,250,true));
      // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
      line(mouseX, mouseY, pmouseX, pmouseY);


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

function mousePressed() {
  array = [];


}
