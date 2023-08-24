var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons = document.getElementsByClassName("button");

var things = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];

function updateCart() {
  let cartItems = 0;
  for (i=0; i<things.length; i++) {
    cartItems = cartItems + things[i].quantity;
  }
  cartValue.innerHTML = cartItems
  ;
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = (e) => {
    things[i].quantity++;
    updateCart();
  };
}

var totaldollars = 0;
var totalcents = 0;
function updatePrice() {
  let totalPriceInCents = 0;

  for (index = 0; index < things.length; index++) {
    totalPriceInCents =
      totalPriceInCents +
      things[index].quantity * (things[index].dollars * 100 + things[index].cents);
  }
  totaldollars = Math.floor(totalPriceInCents / 100);
  totalcents = totalPriceInCents % 100;
}

cartButton.onclick = () => {
  updatePrice();
  for (let i=0; i<things.length;i++) {
    if (things[i].quantity != 0) {
      console.log("Item name: " +things[i].name +" - Quantity: " +things[i].quantity
      );
    }
  }
console.log("The total price is " + totaldollars + "$ and " + totalcents + " cents");
};