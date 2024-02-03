const cel = document.getElementById("input1");
const fah = document.getElementById("input2");

cel.addEventListener("input", (e) => {
  let c = e.target.value;
  let f = c * 1.8 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  fah.value = f;
});

fah.addEventListener("input", (e) => {
  let f = e.target.value;
  let c = (f - 32) * 0.56;
  if (!Number.isInteger(c)) {
    c = c.toFixed(4);
  }
  cel.value = c;
});
