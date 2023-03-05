function FSREmethod() {
  if (r21 == r32) {
    reftype.html("Constant refinement factor used");
    qlabel.html(" ");
  } else {
    var i = 0;
    iteratePandQ(0, p);
    reftype.html("Variable refinement factor used " + " ");
    qlabel.html("q: " + q);
  }

  delta = e21 / (pow(r21, p) - 1);
  fext = f - delta;
  FS0 = 2.45;
  FS1 = 1.6;
  FS2 = 14.8;
  P = p / 2;
  if (P > 0 && P <= 1) {
    Ufs = (FS1 * P + FS0 * (1 - P)) * abs(delta);
  } else {
    Ufs = (FS1 * P + FS2 * (P - 1)) * abs(delta);
  }
  
   //
  plabel.html("Order of accuracy: " + p);
  Rlabel.html("Refinement ratio: " + R);
  e21label.html("e21: " + e21);
  e32label.html("e32: " + e32);
  fextlabel.html("Extrapolated solution: " + fext);
  deltalabel.html("Error: " + delta);
  uncertaintylabel.html("Uncertainty: " + Ufs + "%");
  Plabel.html("P: " + P);
  CFlabel.html(" ");
  if (r21v.value() == r32v.value()) {
    Plabel.position(5, 430);
  } else {
    Plabel.position(5, 450);
  }
  //
  
}
