function calc() {
  m = medium.value();
  f = fine.value();
  c = coarse.value();
  r21 = r21v.value();
  r32 = r32v.value();

  e21 = m - f;
  e32 = c - m;
  R = e21 / e32;

  if (abs(R) > 1) {
    conv.html("Type of convergence: Divergence");
  } else if (R < 1 && R > 0) {
    conv.html("Type of convergence: Monotonic convergence");
  } else if (R > -1 && R < 0) {
    conv.html("Type of convergence: Oscillatory convergence");
  }

  p = log(abs(e32 / e21)) / log(r21);

  if (radial.value() == 1) {
    GCI();
  } else if (radial.value() == 2) {
    correctionFactorMethod();
  } else if (radial.value() == 3) {
    FSREmethod();
  }
}
