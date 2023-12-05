// TODO: Add a picker to select the data visualazation
// TODO: Add some nice hover animations.

// Assets
let fullrinkIMG;
let halfrinkIMG;
let font;

// Global Variables
var gpPerSeasonAvgDataVisualazationSelection = "GPPERSEASONAVG"
var weightavgDataVisualazationSelection = "WEIGHTAVG"
var heightavgDataVisualazationSelection = "HEIGHTAVG"

var dataVisualazationSelection = gpPerSeasonAvgDataVisualazationSelection


function setup() {
    createCanvas(600, 400);

    fullrinkIMG = loadImage('assets/rink.png');
    halfrinkIMG = loadImage('assets/halfrink.png');

    font = loadFont("inter.ttf");
    table = loadTable("data.csv", "csv", "header");
}

function draw() {
    
    


    // background(240);
    textFont(font);
    var rows = table.getRows();

    var c_gpperseasonavg;
    var g_gpperseasonavg;
    var d_gpperseasonavg;
    var r_gpperseasonavg;
    var l_gpperseasonavg;

    var c_weightavg;
    var g_weightavg;
    var d_weightavg;
    var r_weightavg;
    var l_weightavg;

    var c_heightavg;
    var g_heightavg;
    var d_heightavg;
    var r_heightavg;
    var l_heightavg;

    for (var r = 0; r < rows.length; r++) {
        var position = rows[r].getString("POSITION");
        var gpperseasonavg = Math.round(Number(rows[r].getString("GPPERSEASONAVG")));
        var weightavg = Math.round(Number(rows[r].getString("WEIGHTAVG")));
        var heightavg = Math.round(Number(rows[r].getString("HEIGHTAVG")));
        var displayPosition = rows[r].getString("DISPLAYPOSITION");
        console.log(position, gpperseasonavg, weightavg, heightavg, displayPosition);
        if (position == "C") {
            c_gpperseasonavg = gpperseasonavg;
            c_weightavg = weightavg;
            c_heightavg = heightavg;
        } else if (position == "G") { 
            g_gpperseasonavg = gpperseasonavg;
            g_weightavg = weightavg;
            g_heightavg = heightavg;
        } else if (position == "D") {
            d_gpperseasonavg = gpperseasonavg;
            d_weightavg = weightavg;
            d_heightavg = heightavg;
        } else if (position == "R") {
            r_gpperseasonavg = gpperseasonavg;
            r_weightavg = weightavg;
            r_heightavg = heightavg;
        } else if (position == "L") {
            l_gpperseasonavg = gpperseasonavg; 
            l_weightavg = weightavg;
            l_heightavg = heightavg;
        }
    }

    if (dataVisualazationSelection == gpPerSeasonAvgDataVisualazationSelection) {
        players_singleteam(c_gpperseasonavg, r_gpperseasonavg, l_gpperseasonavg, d_gpperseasonavg, g_gpperseasonavg);
    } else if (dataVisualazationSelection == weightavgDataVisualazationSelection) {
        players_singleteam(c_weightavg, r_weightavg, l_weightavg, d_weightavg, g_weightavg);
    } else if (dataVisualazationSelection == heightavgDataVisualazationSelection) {
        players_singleteam(c_heightavg, r_heightavg, l_heightavg, d_heightavg)
    }
}


function players_singleteam(cSize, rwSize, lwSize, dSize, gSize) {
    noStroke();
    
    ximgsize = 300;
    yimgsize = 251;

    image(halfrinkIMG, 0, 0, ximgsize, yimgsize);

    ypos = 52
    xpos = 76

    color = "blue"

    // Team1 Center

    playerCircle(ximgsize - 30, yimgsize / 2, cSize, color)
    
    playerCircle(xpos - 30, yimgsize / 2, gSize, color)

    // Team1 Defense
    playerCircle(xpos, ypos, dSize, color);


    playerCircle(xpos, yimgsize - ypos, dSize, color);
    
    // Team1 Wings
    wingXpos = ximgsize - 60;
    playerCircle(wingXpos, ypos, lwSize, color);
    playerCircle(wingXpos, yimgsize - 55, rwSize, color);
}

function playerCircle(x, y, size, color) {
    fill(color)
    circle(x, y, size)
    fill("white")
    textSize(size * 0.5)
    text(size, x - size * 0.3, y + size * 0.2);
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