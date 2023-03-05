function setup() {
  ypos = 150;
  yd = 30;
  i = 80;

  createCanvas(600, 600);
  title = createElement("h1", "Discretisation uncertainty estimator");
  title.position(5, 0);

  line(0, 80, 310, 80);
  stroke(126);
  line(310, 80, 310, 200);
  stroke(126);
  line(0, 200, 310, 200);
  stroke(126);
  line(0, 80, 0, 200);
  stroke(126);

  solProp = createElement("h3", "Solution properties");
  solProp.position(5, 62);

  f = createElement("h4", "Fine solution");
  f.position(5, 90);

  fine = createInput("1");
  fine.position(ypos, i + yd);

  m = createElement("h4", "Medium solution");
  m.position(5, 90 + 30);

  medium = createInput("2");
  medium.position(ypos, i + yd * 2);

  c = createElement("h4", "Coarse solution");
  c.position(5, 90 + yd * 2);
  coarse = createInput("5");
  coarse.position(ypos, i + yd * 3);

  analysisType = createElement("h3", "Type of analysis");
  analysisType.position(5, 90 + yd * 3.1);

  radial = createRadio();
  radial.option("1", "Grid Convergence Index");
  radial.option("2", "Correction Factor method");
  radial.option("3", "FSRE method");
  radial.position(0, 110 + yd * 4);
  radial.selected("1");

  rf = createElement("h4", "Refinement factors");
  rf.position(325, 60);

  line(320, 80, 490, 80);
  stroke(126);
  l = line(320, 80, 320, 170);
  l.stroke(126);
  line(320, 170, 490, 170);
  stroke(126);
  line(490, 170, 490, 80);

  rText12 = createElement("h4", "r21");
  rText12.position(330, 90);

  rText32 = createElement("h4", "r32");
  rText32.position(330, 120);

  r21v = createInput("1.41421356237");
  r21v.position(380, i + yd);
  r21v.size(90);
  r32v = createInput("1.41421356237");
  r32v.position(380, i + yd * 2);
  r32v.size(90);

  conv = createElement("h4", " ");
  conv.position(5, 270);
  e21label = createElement("h4", " ");
  e21label.position(5, 290);
  e32label = createElement("h4", " ");
  e32label.position(5, 310);
  reftype = createElement("h4", " ");
  reftype.position(100, 240);
  Rlabel = createElement("h4", " ");
  Rlabel.position(5, 330);
  plabel = createElement("h4", " ");
  plabel.position(5, 350);
  fextlabel = createElement("h4", " ");
  fextlabel.position(5, 370);
  deltalabel = createElement("h4", " ");
  deltalabel.position(5, 390);
  uncertaintylabel = createElement("h4", " ");
  uncertaintylabel.position(5, 410);
  qlabel = createElement("h4", " ");
  qlabel.position(5, 430);
  CFlabel = createElement("h4", " ");
  CFlabel.position(5, 430);
  Plabel = createElement("h4", " ");
  Plabel.position(5, 450);
  //
  button = createButton("Calculate");
  button.position(5, 260);
  button.mousePressed(calc);
}

function draw() {}
