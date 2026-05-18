// Update this to change or add more carts in the list
const CARTS = [
  {
    name: "Dragon Hop",
    dateTime: "30 Mar 22:56",
    href: "carts/dragon_hop.html",
  },
  {
    name: "Lander",
    dateTime: "31 Mar 08:28",
    href: "carts/lander.html",
  },
  {
    name: "Simple Snakes",
    dateTime: "03 Apr 03:31",
    href: "carts/simple_snakes.html",
  },
];

function buildCartList({ name, dateTime, href }) {
  const permissionEl = document.createElement("span");
  permissionEl.className = "ls-permissions";
  permissionEl.innerText = ".r-xr-xr-x";

  const userEl = document.createElement("span");
  userEl.className = "ls-user";
  userEl.innerText = "user";

  const dateTimeEl = document.createElement("span");
  dateTimeEl.className = "ls-datetime";
  dateTimeEl.innerText = dateTime;

  const fileEl = document.createElement("a");
  fileEl.className = "ls-filename";
  fileEl.innerText = name;
  fileEl.href = href;

  const elements = [permissionEl, " - ", userEl, " ", dateTimeEl, " ", fileEl];
  const listEl = document.createElement("li");
  elements.forEach((el) => {
    listEl.append(el);
  });

  return listEl;
}

function displayCarts() {
  const cartListEl = document.getElementById("pico-8-cart-list");

  CARTS.forEach((cart) => {
    cartListEl.append(buildCartList(cart));
  });
}

window.onload = function () {
  displayCarts();
};
