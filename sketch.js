var box;
var enemy;

function setup() {
    createCanvas(700, 700);
    box = createSprite(300, 300, 50, 50);
    box.shapeColor = "cyan";
    enemy = createSprite(300, 150, 25, 25);
    enemy.shapeColor = "red";
    Edges = createEdgeSprites();
    enemy.velocityY = -10;
    enemy.velocityX = 5;
}

function draw() {
    background("black");

    if (keyDown(LEFT_ARROW)) {
        box.x -= 5;
    }
    if (keyDown(RIGHT_ARROW)) {
        box.x += 5;
    }
    if (keyDown(UP_ARROW)) {
        box.y -= 5;
    }
    if (keyDown(DOWN_ARROW)) {
        box.y += 5;
    }

    enemy.bounceOff(Edges);

    drawSprites();
}