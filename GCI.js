function GCI() {
  if (r21 == r32) {
    reftype.html("Constant refinement factor used");
    qlabel.html(" ");
    plabel.html("Order of accuracy: " + p);
    delta = e21 / (pow(r21, p) - 1);
    U = ((1.25 * delta) / f) * 100;
    deltalabel.html("Error: " + delta);
  } else {
    var i = 0;
    iteratePandQ(0, p);
    reftype.html("Variable refinement factor used " + " ");
    qlabel.html("q: " + q);
    plabel.html("Order of accuracy: " + pcor);

    delta = e21 / (pow(r21, pcor) - 1);
    U = ((1.25 * delta) / f) * 100;

    deltalabel.html("Error: " + delta);
  }

  fext = f - delta;

  // plabel.html("Order of accuracy: " + p);
  Rlabel.html("Refinement ratio: " + R);
  e21label.html("e21: " + e21);
  e32label.html("e32: " + e32);
  fextlabel.html("Extrapolated solution: " + fext);
  uncertaintylabel.html("Uncertainty: " + U + "%");
  Plabel.html(" ");
  CFlabel.html(" ");
}
