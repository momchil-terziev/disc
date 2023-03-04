function correctionFactorMethod() {
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

  CF = (pow(r21, p) - 1) / (pow(r21, 2) - 1);
  if (CF > 0.875 && CF <= 1.125) {
    Ucf = abs(delta) * (9.6 * pow((1 - CF), 2) + 1.1);
  } else {
    Ucf = abs(delta) * (1 + 2 * abs(1 - CF));
  }
  //
  // console.log(abs(delta) * ( 2 * abs(1 - CF)+1))
  //
  plabel.html("Order of accuracy: " + p);
  Rlabel.html("Refinement ratio: " + R);
  e21label.html("e21: " + e21);
  e32label.html("e32: " + e32);
  fextlabel.html("Extrapolated solution: " + fext);
  deltalabel.html("Error: " + delta);
  uncertaintylabel.html("Uncertainty: " + Ucf/f*100 + "%");
  CFlabel.html("CF: " + CF);
  Plabel.html(" ");
  if (r21v.value() == r32v.value()) {
    CFlabel.position(5, 430);
  } else {
    CFlabel.position(5, 450);
  }
  //
  console.log(Ucf)
}
