const padding = 50;
const rows = 20;
const cols = 20;
const cellSize = 10;
const cellColor = '#222';
const canvasWidth = 2*padding+cellSize*cols;
const canvasHeight = 2*padding+cellSize*rows;
const canvasColor = '#000';
const highlightColor = 'ffee32';
var im = initiateImage();


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(canvasColor);
  noStroke();

}

function draw(){
    drawImage();
    staticNoise(1000,60);
}


function drawImage() {
  fill(cellColor)
  for(let i = 0; i< rows; i++){
    for(let j=0; j<cols; j++){
      
      if(im[i][j] == 1){
        fill(highlightColor)
      }
      rect(padding+i*cellSize,padding+j*cellSize,cellSize-2)
      fill(cellColor)
    }
  }
}
  
function highlightRowCol(r,c){
  fill(cellColor)
  rect(padding+i*cellSize,padding+j*cellSize,cellSize-2)
}
  
function highlightMatrix(m){
  
}

function highlightIndex(i){
  
}

function initiateImage(){
  const im0 = Array.from({ length: rows }, () => Array(cols).fill());
  return im0
}

function randomizeImage(){
  const imR = Array.from({ length: rows }, () =>
  Array.from({ length: cols }, () => Math.round(Math.random()))
);
  return imR
}

function staticNoise(iterations, tempFrameRate){
  frameRate(tempFrameRate)
  for(i = 0; i<iterations; i++){
    im = randomizeImage()
    drawImage()
  }
}
