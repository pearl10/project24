const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log,log2,log3,log4;

var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,380,50,50);
    box2 = new Box(900,380,50,50);
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(800,380);
    log=new Log(800,340,275,PI/2);

    box3= new Box(710,310,50,50);
    box4= new Box(890,310,50,50);
    pig2=new Pig(800,310);
    log2=new Log(800,290,275,PI/2);

    box5=new Box(800,270,50,50);
    log3=new Log(750,270,150,PI/6);
    log4=new Log(850,270,150,-PI/6);



    bird=new Bird(175,220);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log.display();
    bird.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
}