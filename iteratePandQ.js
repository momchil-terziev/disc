function iteratePandQ(i, p) {
  const m = medium.value();
  const f = fine.value();
  const c = coarse.value();
  const r21 = r21v.value();
  const r32 = r32v.value();
  i++;
  e21 = m - f;
  e32 = c - m;

  if (e32 / e21 < 0) {
    s = -1;
  } else {
    s = 1;
  }

  R = e21 / e32;
  if (i==0) {
    p = log(e32/e21)/log(r21);
  }
  
  q = log((pow(r21, p) - s) / (pow(r32, p) - s));

  pcor = (log(abs(e32 / e21)) + q) / log(r21);

  console.log("p:"+p+", iteration:" + i)
  console.log("q:"+q+", iteration:" + i)
  console.log("pcor"+pcor+",iteration"+i)
  
  if (abs(pcor - p) < 1e-5) {
    return pcor,q;

  } else {
    iteratePandQ(i, pcor);
  }
}
