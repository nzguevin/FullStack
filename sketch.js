function setup() 
{
  createCanvas(1920, 1080);
}

function draw() 
{
  if (mouseIsPressed) 
  {
    fill(0,0,255);
  } 
  else 
  {
    fill(255,0,0);
  }
  quad(mouseX - 50, mouseY - 50, mouseX + 50, mouseY - 50, mouseX + 50, mouseY + 50, mouseX - 50, mouseY + 50);
}
