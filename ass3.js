function setup() {
  createCanvas(600, 400);
  background(177, 206, 251);
}

function draw() {
  let c =
    frameCount % 50 > 25
      ? 20 - (frameCount % 50) / 2.5
      : (frameCount % 50) / 2.5;
  strokeWeight(1);
  fill(0); //앞머리
  stroke(0);
  arc(300, 150, 150, 100, PI, 0);
  quad(225, 150, 375, 150, 430, 600, 180, 600);

  noStroke();
  fill(255); //입술

  rect(180, 300, 240, 150, 50); //몸
  fill(251, 206, 177); //얼굴
  ellipse(300, 200, 150, 162.5); //머리
  rect(275, 250, 50, 80); //목
  arc(300, 300, 150, 100, 0, PI);

  arc(235, 200, 50, 50, PI / 2, (PI / 2) * 3); //귀
  arc(365, 200, 50, 50, (PI / 2) * 3, PI / 2);
  stroke(1);
  fill(183, 125, 74); // 안 귀
  arc(225, 200, 10, 15, PI / 2, (PI / 2) * 3);
  arc(375, 200, 10, 15, (PI / 2) * 3, PI / 2);

  fill(255, 204, 0); //귀고리
  circle(375, 225, 10);
  circle(225, 225, 10);

  stroke(186); //팔
  line(220, 360, 220, 400);
  line(380, 360, 380, 400);

  stroke(0);
  fill(251, 206, 177);
  arc(300, 220, 10, 10, PI / 2, (PI / 2) * 3); //코

  arc(333, 189, 40, 30, PI * 0.9, PI * 1.89); //쌍꺼풀라인
  arc(267, 189, 40, 30, PI * 1.11, PI * 1.9);

  fill(255); // 바깥눈
  noStroke();
  ellipse(330, 190, 40, 30);
  ellipse(270, 190, 40, 30);

  fill(0); // 안눈
  ellipse(325 + c, 190, 25, 30);
  ellipse(275 + c - 10, 190, 25, 30);

  fill(255); // 안광
  ellipse(330 + c, 180, 5, 5);
  ellipse(280 + c - 10, 180, 5, 5);

  fill(249, 149, 132); //입술

  let ratio =
    3 *
    (frameCount % 40 > 20
      ? 1 - (frameCount % 40) * 0.025
      : (frameCount % 40) * 0.025);

  arc(300, 250, 30 * ratio, 10 * ratio, PI, 0);
  arc(300, 250, 30 * ratio, 15 * ratio, 0, PI);

  line(285, 250, 315, 250);

  fill(0); //앞머리
  stroke(0);
  arc(250, 130, 70, 70, 1.8 * PI, 0.7 * PI);

  arc(360, 130, 160, 80, 0.4 * PI, 1.1 * PI);
}
function keyPressed() {
  if (key === "s") {
    saveGif("mySketch", 10);
  }
}

function mouseClicked() {
  ellipse(170, 200, 100, 100);
  // 오른쪽 원
  ellipse(230, 200, 100, 100);
  // 아래 삼각형
  triangle(130, 220, 270, 220, 200, 320);
}
function mouseClicked() {
  heart(mouseX, mouseY, 100);
}

function heart(x, y, size) {
  noStroke();
  fill(255, 0, 0);
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);

  endShape();
}
