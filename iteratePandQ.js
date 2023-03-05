function iteratePandQ(i, p) {
  const m = medium.value();
  const f = fine.value();
  const c = coarse.value();
  const r21 = r21v.value();
  const r32 = r32v.value();
  i++;
  e21 = m - f;
  e32 = c - m;

  if (e21 - e32 < 0) {
    s = -1;
  } else {
    s = 0;
  }

  R = e21 / e32;
  q = log((pow(r21, p) - s) / (pow(r32, p) - s));

  pcor = log(abs(abs(e32 / e21) + q)) / log(r21);
 
  if (abs(pcor - p) < 1e-4) {
    return [i,pcor,q];

  } else {
    iteratePandQ(i, pcor);
  }
}
