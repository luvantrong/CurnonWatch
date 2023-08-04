var i = 0;
var t, g;

var li1 = [
  "#COLOSSEUM #CURNONWATCH",
  "#WEIMAR #CURNONWATCH",
  "#JACKSON #UNBREAKABLE",
];

var li2 = ["COLOSSEUM COLLECTION", "WEIMAR COLLECTION", "JACKSON COLLECTION"];

var li3 = [
  "Đại diện cho sự mạnh mẽ và phiêu lưu",
  "Ngôn ngữ thiết kế Bauhaus",
  "Dòng đồng hồ lặn đầu tiên từ một thương hiệu Việt",
];

/*------slideshow Ảnh------*/
var bnImg = document.getElementById("BannerImg");
var context = document.getElementById("textshow");
function fNext() {
  i++;
  if (i > 2) i = 0;
  context.children[0].children[0].innerHTML = li1[i];
  context.children[0].children[1].innerHTML = li2[i];
  context.children[0].children[2].innerHTML = li3[i];
  bnImg.src = "/images/VD" + i + ".webp";
}

function fBack() {
  i--;
  if (i < 0) i = 2;
  bnImg.src = "/images/VD" + i + ".webp";
  context.children[0].children[0].innerHTML = li1[i];
  context.children[0].children[1].innerHTML = li2[i];
  context.children[0].children[2].innerHTML = li3[i];
}
/* -----onLoad----*/
function start() {
  t = window.setInterval(fNext, 2000);
  borDer();
  borDer2();
}

/* Thay đổi ảnh trang chi tiết sản phẩm*/

var allImg = document.querySelectorAll(".picture-detail");
var linkthaydoi = document.getElementById("add-picture");

function borDer() {
  allImg.forEach(function (item) {
    if (item.getAttribute("src") === linkthaydoi.getAttribute("src")) {
      item.style.border = "1px solid black";
    } else {
      item.style.border = "none";
    }
  });
}

allImg.forEach(function (item) {
  item.addEventListener("click", function () {
    var link = item.getAttribute("src");
    linkthaydoi.src = link;
    borDer();
  });
});

var allIn4 = document.querySelectorAll(".in4");
console.log(allIn4);
var setIf = document.getElementById("setIf");

/* Trượt div ảnh trang index */

var itemsp = document.querySelectorAll(".item-product");
console.log(itemsp);

itemsp.forEach(function (item) {
  item.children[2].addEventListener("click", function () {
    location.replace("chitietsanpham.html");
  });
});

var trai = document.querySelector(".left11");
var phai = document.querySelector(".right11");
var tongtruot = document.querySelectorAll(".slider-product-one-content-items");
var index = 0;
trai.addEventListener("click", function () {
  index++;
  if (index > tongtruot.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-product-one-content-items-all").style.right =
    index * 100 + "%"; //đặt vị trí bên phải theo chiều rộng phần tử mẹ
});

phai.addEventListener("click", function () {
  index = index - 1;
  if (index < 0) {
    index = tongtruot.length - 1;
  }
  document.querySelector(".slider-product-one-content-items-all").style.right =
    index * 100 + "%";
});
/* login  */

var login = document.querySelector("#login-dk");
console.log(login);
login.addEventListener("click", function () {
  var ov = (document.getElementById("login-form").style.display = "block");
});

var cl_login = document.querySelector("#close-login");
cl_login.addEventListener("click", function () {
  var ov = (document.getElementById("login-form").style.display = "none");
});

/* Ẩn hiện giỏ hàng */
var cards = document.getElementById("card-click");
var showcard = document.getElementById("cards");
var overlay = document.getElementById("overlay");

overlay.addEventListener("click", function () {
  showcard.style.display = "none";
  overlay.style.display = "none";
});

console.log(cards);
console.log(showcard);
cards.addEventListener("click", function () {
  showcard.style.display = "block";
  overlay.style.display = "block";
});

showcard.children[0].children[1].addEventListener("click", function () {
  showcard.style.display = "none";
  overlay.style.display = "none";
});

var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i];
  button.addEventListener("click", function () {
    var button_remove = event.target;
    button_remove.parentElement.parentElement.remove();
    updatecart();
  });
}

function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i];
    var price_item = cart_row.getElementsByClassName("cart-price ")[0];
    var quantity_item = cart_row.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(price_item.innerText);
    var quantity = quantity_item.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total-price")[0].innerText =
    total + "VNĐ";

  if (cart_rows.length == 0) {
    var show = document.querySelector(".card-content");
    show.children[0].style.display = "none";
    show.children[1].style.display = "none";
    show.children[2].style.display = "block";
  }
}

// thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart();
  });
}

// Thêm vào giỏ
var add_cart = document.getElementsByClassName("insert-card");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {
    var show = document.querySelector(".card-content");
    show.children[0].style.display = "block";
    show.children[1].style.display = "block";
    show.children[2].style.display = "none";
    overlay.style.display = "block";
    var button = event.target;
    var product = button.parentElement;
    var img = product.children[2].getAttribute("src");
    var title = product.children[3].children[1].children[0].innerHTML;
    var price =
      product.children[3].children[2].children[0].children[0].getAttribute(
        "price"
      );

    addItemToCart(title, price, img);
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị giỏ hàng
    showcard.style.display = "block";

    updatecart();
  });
}

function addItemToCart(title, price, img) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cart_title = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert("Sản Phẩm Đã Có Trong Giỏ Hàng");
      return;
    }
  }

  var cartRowContents = `
                          <div class="cart-item cart-column">
                              <img class="cart-item-image" src="${img}" width="100" height="100">
                              <span class="cart-item-title">${title}</span>
                          </div>
                          <span class="cart-price cart-column">${price}đ </span>
                          <div class="cart-quantity cart-column">
                              <input class="cart-quantity-input" type="number" value="1">
                              <button class="btn btn-danger" type="button">Xóa</button>
                          </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", function () {
      var button_remove = event.target;
      button_remove.parentElement.parentElement.remove();
      updatecart();
    });
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", function (event) {
      var input = event.target;
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      updatecart();
    });
}

var afk = document.querySelector(".click-showw");

afk.addEventListener("click", function () {
  document.querySelector(".overlay-all-clock").style.display = "block";
});

var afk2 = document.getElementById("afd");

afk2.addEventListener("click", function () {
  document.querySelector(".overlay-all-clock").style.display = "none";
});
