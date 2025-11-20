let startTime;
function setup() {
  createCanvas(600, 400);
  background(139, 0, 0);
  startTime = millis();
}

function init() {
  clear();
  background(139, 0, 0);
}
function keyPressed() {
  if (key === "s") {
    saveGif("mySketch", 20);
  }
}
function draw() {
  init();
  let scope = Math.sin(frameCount / 20);
  let elapsed = millis() - startTime;
  let seconds = Math.floor(elapsed / 2000);
  scope = Math.abs(scope);
  // scope = (scope * (5000 - elapsed)) / 5000;
  scope = (scope * elapsed) / 10000;
  let dx = scope * 50 - 15;
  let dy = scope * 25 - 15;
  let backgroundR = map(scope, 0, 1, 40, 255);
  background(backgroundR, 0, 0);

  let leftCircleColor = map(scope, 0, 1, 255, 0);
  // 250, 300, 80
  let rightCircleColor = [
    map(scope, 0, 1, 250, 0),
    map(scope, 0, 1, 300, 0),
    map(scope, 0, 1, 80, 0),
  ];
  stroke(255, 215, 0);

  line(0, 0, 600, 400);
  line(0, 400, 600, 0);

  fill(139, 0, 0);
  circle(300, 200, 300 * scope); //중간원
  fill(leftCircleColor, 0, 0); //왼쪽 빨강 배경 설정
  stroke(random(255), 0, 0); //왼쪽 빨강 배경설정
  ellipse(100 + dx, 80 + dy, 100, 100); //왼쪽 위
  ellipse(100 + dx, 300 - dy, 100, 100); //왼쪽 아래
  fill(rightCircleColor[0], rightCircleColor[1], rightCircleColor[2]); //오른쪽 노란 배경 설정
  stroke(rightCircleColor[0], rightCircleColor[1], rightCircleColor[2]); //오른쪽 노란 선 설정

  ellipse(500 - dx, 80 + dy, 100, 100); //오른쪽 위
  ellipse(500 - dx, 300 - dy, 100, 100); //오른쪽 아래
  //   fill(245, 245, 245);
  fill(0, 200, 100); // 초록 반원 설정
  stroke(0, 200, 100); // 초록 반원 선 설정

  arc(225, 200, 150, 100, PI * scope, 0); //왼쪽 초록 반원
  arc(525, 200, 150, 100, PI + PI * scope, 0); //오른쪽 초록 반원
  fill(0, 0, 255); //파란원 색 설정
  arc(375, 200, 150, 100, 0, PI + PI * scope); //오른쪽 파란 반원
  arc(75, 200, 150, 100, 0, PI * scope); //왼쪽 파란 반원

  stroke(148, 0, 211); //위 원 X선 색
  line(75 + dx, 55 + dy, 125 + dx, 105 + dy); //왼쪽 위
  line(75 + dx, 105 + dy, 125 + dx, 55 + dy); //왼쪽 위

  line(475 - dx, 55 + dy, 525 - dx, 105 + dy); //오른쪽 위
  line(475 - dx, 105 + dy, 525 - dx, 55 + dy); //오른쪽 위
}
