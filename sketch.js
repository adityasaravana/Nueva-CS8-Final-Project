let fullrinkIMG;
let halfrinkIMG;

function setup() {
    createCanvas(600, 400);
    fullrinkIMG = loadImage('assets/rink.png');
    halfrinkIMG = loadImage('assets/halfrink.png');
}

function draw() {
    rinkWithPlayerPositions()
}

function rinkWithPlayerPositions() {
    players_singleteam(20, 20, 20, 20, 20);
}

function players_singleteam(cSize, rwSize, lwSize, dSize, gSize) {
    noStroke();
    background(240);
    ximgsize = 300;
    yimgsize = 251;
    image(halfrinkIMG, 0, 0, ximgsize, yimgsize);

    ypos = 52
    xpos = 76

    fill("blue")

    // Team1 Center
    circle(ximgsize - 30, yimgsize / 2, cSize)

    // Team1 Goalie
    circle(xpos - 30, yimgsize / 2, gSize)

    // Team1 Defense
    circle(xpos, ypos, dSize);
    circle(xpos, yimgsize - ypos, dSize);
    
    
    // Team1 Wings
    wingXpos = ximgsize - 60;
    circle(wingXpos, ypos, lwSize);
    circle(wingXpos, yimgsize - 55, rwSize);
}

function players_doubleteam() {
    // background(240);
    ximgsize = 450;
    yimgsize = 200;
    image(fullrinkIMG, 0, 0, ximgsize, yimgsize);

    ypos = 52
    xpos = 76

    fill("blue")

    // Team1 Center
    circle(ximgsize / 2 - 25, yimgsize / 2, 20)

    // Team1 Goalie
    circle(xpos - 30, yimgsize / 2, 20)

    // Team1 Defense
    circle(xpos, ypos, 20);
    circle(xpos, yimgsize - ypos, 20);

    // Team1 Wings
    circle(xpos + 100, ypos, 20);
    circle(xpos + 100, yimgsize - 55, 20);

    // ----------------------------------------------------------------

    fill("red")

    // Team2 Center
    circle(ximgsize / 2 + 25, yimgsize / 2, 20)

    // Team2 Goalie
    circle(ximgsize - xpos + 30, yimgsize / 2, 20)

    // Team2 Defense
    circle(ximgsize - xpos, ypos, 20);
    circle(ximgsize - xpos, yimgsize - ypos, 20);
    
    // Team2 Wings
    circle(ximgsize - xpos - 100, ypos, 20);
    circle(ximgsize - xpos - 100, yimgsize - 55, 20);
}