const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];
//bt.setRandSeed(3848);
const rad = bt.randIntInRange(10, 30);
const len = bt.randIntInRange(10, 100)
// create a polyline
drawLines([
    [
      [0, 10],
      [125, 10]
    ]
  ])

const building = new bt.Turtle()
  .jump([50, 10])
  .left(90)
  .forward(len)
  .right(90)
  .forward(rad)
  .right(90)
  .forward(len)
  .right(90);

const bird = new bt.Turtle()
  .jump([rad, len+10])
  .arc(-35,8)
  .right(-45)
  .arc(-35,8);

const bird2 = new bt.Turtle()
  .jump([rad+60, len+20])
  .arc(-35,8)
  .right(-45)
  .arc(-35,8);

drawLines(building.lines(), {fill: "black", stroke: "red", width: "10"})
drawLines(bt.scale(bird.lines(), [4.0, 1.25]));
drawLines(bt.scale(bird2.lines(), [2.0, 8.25]));
