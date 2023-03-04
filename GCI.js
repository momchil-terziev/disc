function GCI() {

  if (r21 == r32) {
    reftype.html("Constant refinement factor used");
    qlabel.html(" ")
  } else {
    var i = 0;
    iteratePandQ(0,p);
    reftype.html("Variable refinement factor used " + " ");
qlabel.html("q: " + q)
  }

  delta = e21 / (pow(r21, p) - 1);
  fext = f - delta;
  U = ((1.25 * delta)/f) * 100;

  plabel.html("Order of accuracy: " + p);
  Rlabel.html("Refinement ratio: " + R);
  e21label.html("e21: " + e21);
  e32label.html("e32: " + e32);
  fextlabel.html("Extrapolated solution: " + fext);
  deltalabel.html("Error: " + delta);
  uncertaintylabel.html("Uncertainty: " + U + "%");
  Plabel.html(" ")
  CFlabel.html(" ")
}
