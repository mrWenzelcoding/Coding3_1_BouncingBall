

let ball;
let t=0;
let canvas2;
let canvas3;
let palette = ['#3375CC20','#FF6AA620','#40FFFF20','#CC00CC20','#44FF4420']
let palette2 = ['#3375CC','#FF6AA6','#40FFFF','#CC00CC','#44FF44']


function setup() {
  //World Setup Sprites
  new Canvas(500,500)
  noStroke();
  world.gravity.y = 5
  ball = new Group();

  //Canvas2&3 World Setup
  canvas2 = createGraphics(500,500);
  canvas3 = createGraphics(500,500);
  canvas2.background(0,20)
  canvas2.noStroke()
  canvas3.clear()

  //Setting Properties of Sprites
  for(let i = 0; i<200;i++){
    ball[i] = new Sprite()
    ball[i].d = 10
    ball[i].x = random(ball[i].d+2,canvas.w-ball[i].d-2)
    ball[i].y = random(ball[i].d+200,canvas.h-ball[i].d-2)
    ball[i].collider = 'dynamic'
    ball[i].color = color(200)
    ball[i].vel.x=random(-2,2)
    ball[i].vel.y=random(-2,2)
    ball[i].friction = 0
    ball[i].bounciness = 1
  }

  //Creating the colored Balls
  for(let i = 0; i<5; i++){
    ball[i].color = color(palette2[i])
  }
  allSprites.autoDraw = false;
}


function draw() {
  background(0,120);

  //Collisions with wall
  for(let i=0; i<ball.length;i++){
    if(ball[i].x<=0+ball[i].r){
      ball[i].x=ball[i].r
      ball[i].vel.x*=-1
    } else if(ball[i].x>=canvas.w-ball[i].r){
      ball[i].x=canvas.w-ball[i].r
      ball[i].vel.x*=-1
    }else if(ball[i].y<=0+ball[i].r){
      ball[i].y=ball[i].r
      ball[i].vel.y*=-1
    } else if(ball[i].y>=canvas.h-ball[i].r){
      ball[i].y=canvas.h-ball[i].r
      ball[i].vel.y*=-1
    }
  }

  //Time to switch sizes and clear background
  t++
  if(t>200){
    canvas2.background(0,10)
    if(t > 300){
      t=0
    }
  }
  //The MOON
  canvas2.background(0,3)
  for(let i = 0; i<100; i++){
    canvas3.fill(255,255-(i*3))
    canvas3.circle(100,100,i)
  }

  //Creating colored balls path
  for(let i = 0; i<5;i++){
    canvas2.fill(palette[i])
    canvas2.circle(ball[i].x,ball[i].y,ball[i].d)
  }
  //Must draw sprites as set autoDraw to false
 
  image(canvas2,0,0)
  image(canvas3,0,0)
  allSprites.draw();
}