const carts = {
  dragon_hop: {
    label: "Dragon Hop",
    description: "Press up to hop.",
    imgSrc: "https://cdn.lloy.dev/images/gallery/pico_8/dragon_hop.p8.png",
  },
  lander: {
    label: "Lander",
    description:
      "Press up to slow down or ascend.\nPress left or right to steer.",
    imgSrc: "https://cdn.lloy.dev/images/gallery/pico_8/lander.p8.png",
  },
  simple_snakes: {
    label: "Simple Snakes",
    description: "Press the directional buttons to move.",
    imgSrc: "https://cdn.lloy.dev/images/gallery/pico_8/simple_snakes.p8.png",
  },
  the_dragon_and_the_exceed: {
    label: "The Dragon & The Exceed",
    description: "Still in progress.",
    imgSrc:
      "https://cdn.lloy.dev/images/gallery/pico_8/the_dragon_and_the_exceed.p8.png",
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

function loadCartList() {
  const cartListEl = document.getElementById("cart_list");
  Object.entries(carts).forEach(([key, cart]) => {
    const btnEl = document.createElement("button");
    btnEl.onclick = () => {
      onClickCart(key);
    };

    const imgEl = document.createElement("img");
    imgEl.src = cart.imgSrc;

    btnEl.appendChild(imgEl);
    cartListEl.appendChild(btnEl);
  });
}
