// TODO: Fix scaling issues with other data selections, efficiency improvemnets.

// Assets
let halfrinkIMG;
let font;

let picker;

var c = ["C", "", "", ""];
var d = ["D", "", "", ""];
var g = ["G", "", "", ""];
var r = ["R", "", "", ""];
var l = ["L", "", "", ""];

var gp_per_season_avg_selection = "GP per Season";
var weight_avg_selection = "Weight";
var height_avg_selection = "Height";

var dataSelection = gp_per_season_avg_selection;
var positions = [c, d, g, r, l];

function changeVals() {
    print("changeVals")
    let val = picker.value();

    if (val == gp_per_season_avg_selection) {
        dataSelection = gp_per_season_avg_selection
    } else if (val == weight_avg_selection) {
        dataSelection = weight_avg_selection
    } else if (val == height_avg_selection) {
        dataSelection = height_avg_selection
    }
}

function setup() {
    createCanvas(600, 300);

    picker = createSelect();
    picker.option(gp_per_season_avg_selection);
    picker.option(weight_avg_selection);
    picker.option(height_avg_selection);
    picker.changed(changeVals);

    halfrinkIMG = loadImage('assets/halfrink.png');

    font = loadFont("inter.ttf");
    table = loadTable("data.csv", "csv", "header");
}

function debugText(val) {
    fill("black")
    textSize(11)
    text(val, 11, 300)
}

function draw() {
    background(10000000000000000000000);

    var rows = table.getRows();

    for (var r = 0; r < rows.length; r++) {
        var position = rows[r].getString("POSITION");
        var gpperseasonavg = Math.round(Number(rows[r].getString("GPPERSEASONAVG")));
        var weightavg = Math.round(Number(rows[r].getString("WEIGHTAVG")));
        var heightavg = Math.round(Number(rows[r].getString("HEIGHTAVG")));
        
        for (var i = 0; i < positions.length; i++) {
            if (position == positions[i][0]) {
                positions[i][1] = gpperseasonavg
                positions[i][2] = weightavg
                positions[i][3] = heightavg
            }
        }
    }

    

    textFont(font);
    
    //debugText(positions);

    var selection = 1;

    if (dataSelection == gp_per_season_avg_selection) {
        selection = 1

    } else if (dataSelection == weight_avg_selection) {
        selection = 2
    } else if (dataSelection == height_avg_selection) {
        selection = 3
    }

    
    players_singleteam(positions[0][selection], positions[1][selection], positions[2][selection], positions[3][selection], positions[4][selection]);
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
    let sizeLimit = 60

    if (size <= sizeLimit) {
        var localSize = size;
    } else {
        localSize = sizeLimit
    }

    var textXOffsetMultiplier;

    if (dataSelection == gp_per_season_avg_selection) {
        textXOffsetMultiplier = 0.3
    } else if (dataSelection == weight_avg_selection) {
        textXOffsetMultiplier = 0.4
    } else if (dataSelection == height_avg_selection) {
        textXOffsetMultiplier = 0.25
    }

    


    if (mouseX > x - localSize && mouseX < x + localSize && mouseY > y - localSize && mouseY < y + localSize) {
        localSize += 10
    } 

    fill(color)

    // fill(color)
    circle(x, y, localSize)

    fill("white")
    textSize(localSize * 0.5)
    text(size, x - localSize * textXOffsetMultiplier, y + localSize * 0.2);
}

