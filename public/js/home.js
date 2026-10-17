function onClickCart(name) {
  const consoleIFrameEl = document.getElementById("console_iframe");
  consoleIFrameEl.src = `https://pico8.lloy.dev/carts/${name}.html`;
  consoleIFrameEl.scrollIntoView({ behavior: "smooth", block: "center" });
}
