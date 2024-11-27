export function criarPontosDeLuz(t, e) {
  let l = [];
  for (let o = 0; o < e; o++) {
    let r = !1,
      n,
      i;
    for (; !r; ) {
      (n = Math.random() * window.innerWidth),
        (i = Math.random() * window.innerHeight),
        (r = !0);
      for (let p = 0; p < l.length; p++) {
        let d = Math.sqrt(Math.pow(n - l[p].x, 2) + Math.pow(i - l[p].y, 2));
        if (d < 100) {
          r = !1;
          break;
        }
      }
    }
    let s = document.createElement("div");
    s.classList.add("ponto-luz"),
      (s.style.left = `${n}px`),
      (s.style.top = `${i}px`),
      (s.style.width = `${Math.random()}px`),
      (s.style.height = s.style.width),
      t.appendChild(s),
      l.push({ x: n, y: i });
  }
  setInterval(() => {
    let t = document.querySelectorAll(".ponto-luz");
    t.forEach((e) => {
      let l = !1,
        o,
        r;
      for (; !l; ) {
        (o = Math.random() * window.innerWidth),
          (r = Math.random() * window.innerHeight),
          (l = !0);
        for (let n = 0; n < t.length; n++)
          if (e !== t[n]) {
            let i = Math.sqrt(
              Math.pow(o - t[n].x, 2) + Math.pow(r - t[n].y, 2)
            );
            if (i < 100) {
              l = !1;
              break;
            }
          }
      }
      (e.style.left = `${o}px`), (e.style.top = `${r}px`);
    });
  }, 130);
}
