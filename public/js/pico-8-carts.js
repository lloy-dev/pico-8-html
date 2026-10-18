const carts = {
  dragon_hop: {
    label: "Dragon Hop",
    description: "Press up to hop.",
  },
  lander: {
    label: "Lander",
    description:
      "Press up to slow down or ascend.\nPress left or right to steer.",
  },
  simple_snakes: {
    label: "Simple Snakes",
    description: "Press the directional buttons to move.",
  },
  platformer_demo: {
    label: "Platformer Demo (WIP)",
    description: "Still in progress.",
  },
};

function loadCart(name) {
  const consoleIFrameEl = document.getElementById("console_iframe");
  const labelEl = document.getElementById("now_playing_title");
  const descriptionEl = document.getElementById("now_playing_description");
  const cart = carts[name];
  consoleIFrameEl.src = `https://pico8.lloy.dev/carts/${name}.html`;
  labelEl.textContent = cart.label;
  descriptionEl.textContent = cart.description;
}

function randomCart() {
  const cartKeys = Object.keys(carts);
  const randomCartKey = cartKeys[Math.floor(Math.random() * cartKeys.length)];
  loadCart(randomCartKey);
}

function onClickCart(name) {
  loadCart(name);

  const consoleIFrameEl = document.getElementById("console_iframe");
  consoleIFrameEl.scrollIntoView({ behavior: "smooth", block: "center" });

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) consoleIFrameEl.requestFullscreen();
}
