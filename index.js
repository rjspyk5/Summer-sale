const titleContainer = document.getElementById("title-container");
let serial = 1;

// /Add button on every card
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  const button = document.createElement("button");

  button.setAttribute("type", "button");
  button.innerText = "Add to cart";
  button.className = "btn btn-secondary addcart";
  card.appendChild(button);
}

// Appending product name into the Product container
const appendProductIntoCart = (productName) => {
  //  Create new p tag for append into title-container
  const p = document.createElement("p");
  p.innerText = `${serial}. ${productName}`;
  serial++;
  //append prodcut name into title-container
  titleContainer.appendChild(p);
  //   Quantity-heading display shown
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
};

// Add event listener to every add to cart button
const addCarts = document.getElementsByClassName("addcart");
for (const addcart of addCarts) {
  addcart.addEventListener("click", handleAddCart);
}
