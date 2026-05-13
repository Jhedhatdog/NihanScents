let cart = [];
let total = 0;

function addToCart(name, price){

  cart.push({
    name:name,
    price:price
  });

  total += price;

  updateCart();

}

function updateCart(){

  const cartItems = document.getElementById("cartItems");

  cartItems.innerHTML = "";

  cart.forEach((item,index)=>{

    cartItems.innerHTML += `
    
      <div class="cart-item">

        <span>${item.name}</span>

        <span>$${item.price}</span>

      </div>

    `;

  });

  document.getElementById("total").innerText =
  "Total: $" + total;

}

function checkout(){

  if(cart.length === 0){

    alert("Your cart is empty.");

  }

  else{

    alert("Purchase Successful!");

    cart = [];

    total = 0;

    updateCart();

  }

}

function scrollCollection(){

  document.getElementById("collection")
  .scrollIntoView({
    behavior:"smooth"
  });

}