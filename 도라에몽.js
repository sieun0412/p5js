function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255, 192, 203);

  let c = frameCount % 150;
  translate(c, c + 10);
  var gap = 25;
  var mid = 200;
  var eye_lotation = 75 / 2 + 5;
  stroke(0, 0, 0);
  fill(33, 171, 241);
  ellipse(200, 150, 300, 300);
  fill(245, 245, 245);

  arc(200, 160, 260, 210, PI, 0);
  arc(200, 160, 260, 300, 0, PI);
  ellipse(mid - gap, eye_lotation, 50, 65);
  ellipse(mid + gap, eye_lotation, 50, 65);
  fill(0, 0, 0);
  circle(mid - (gap - 15), eye_lotation + 15, 8);
  circle(mid + (gap - 15), eye_lotation + 15, 8);
  fill(255, 0, 0);
  circle(mid, mid - 125, 20);

  fill(245, 245, 245);
  noStroke();
  circle(mid + 2, mid - 128, 10);

  stroke(0, 0, 0);
  arc(mid, 125, 200, 90, PI / 15, PI - PI / 15);

  line(mid, mid - 115, mid, 170);
  var fur_location = 110;
  var fur_gap = 10;
  line(mid - 80, fur_location + fur_gap * 2, mid - 40, fur_location + fur_gap);
  line(mid - 80, fur_location, mid - 40, fur_location);
  line(mid - 80, fur_location - fur_gap * 2, mid - 40, fur_location - fur_gap);

  line(mid + 80, fur_location + fur_gap * 2, mid + 40, fur_location + fur_gap);
  line(mid + 80, fur_location, mid + 40, fur_location);
  line(mid + 80, fur_location - fur_gap * 2, mid + 40, fur_location - fur_gap);

  fill(255, 0, 0);
  rect(85, 250, (mid - 85) * 2, 10, 10);
  noStroke();
  fill(255, 192, 203);

  square(85, 260, 300);
}
