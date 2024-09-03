const width = 125;
const height = 125;

setDocDimensions(width, height);

const finalLines = [];

const rad = bt.randIntInRange(10, 30);
const len = bt.randIntInRange(10, 100);
const x_pos = bt.randIntInRange(10, 90);

drawLines([
  [
    [0,20],
    [125,20]
  ]
])

const building = new bt.Turtle()
  .jump([x_pos, 20])
  .left(90)
  .forward(len)
  .right(90)
  .forward(rad)
  .right(90)
  .forward(len)
  .right(90);

const bird = new bt.Turtle()
  .setAngle(bt.randIntInRange(-20, 20))
  .jump([rad, len+10])
  .arc(-35,8)
  .right(-45)
  .arc(-35,8);

const bird2 = new bt.Turtle()
  .setAngle(bt.randIntInRange(-20, 20))
  .jump([rad+60, len+20])
  .arc(-35,8)
  .right(-45)
  .arc(-35,8);


const building_path = building.path;
finalLines.push(building_path[0]);
const bird_path = bird.path;
const bird2_path = bird2.path;
finalLines.push(bird_path[0]);
finalLines.push(bird2_path[0]);
drawLines(finalLines);
