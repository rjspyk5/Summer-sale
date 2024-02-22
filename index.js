const titleContainer = document.getElementById("title-container");
let serial = 1;
const productOnCart = {};
let totalPrice = 0;

// /Add button on every card
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.innerText = "Add to cart";
  button.className = "btn btn-secondary addcart";
  card.appendChild(button);
}

// Push products details on a object

// Appending product name into the Product container
const appendProductIntoCart = (productName) => {
  const p = document.createElement("p");
  p.innerText = `${serial}. ${productName}`;
  serial++;
  titleContainer.appendChild(p);
  const quantityHeading = document.getElementById("quantity-heading");
  quantityHeading.classList.remove("hidden");
};

// Cheaking Quantity
const cheakingQuantity = () => {};
// Fuction about when someone click on add to cart
const handleAddCart = (e) => {
  const productName = e.target.previousElementSibling.children[1].innerText;
  const productPrice = parseFloat(
    e.target.previousElementSibling.children[2].innerText.split(" ")[1]
  );
  appendProductIntoCart(productName);
  totalPrice += productPrice;
  setTotalPrice(totalPrice);
  setGrandTotal(totalPrice);
};
// Set Total Price
const setTotalPrice = (totalPrice) => {
  document.getElementById("totalPrice").innerText = totalPrice;
};
// set grand total
const setGrandTotal = (totalPrice, copun = 0) => {
  document.getElementById("total").innerText =
    totalPrice - totalPrice * (copun * 0.2);
};

// Add event listener to every add to cart button
const addCarts = document.getElementsByClassName("addcart");
for (const addcart of addCarts) {
  addcart.addEventListener("click", handleAddCart);
}
