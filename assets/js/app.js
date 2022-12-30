function increaseQtyTotal() {
  const qytTotal = document.querySelector('.quantity-total-cart');
  ++qytTotal.innerText;
}


function getProductInfo(product) {
  const idP = product.id;
  const imgP = product.querySelector("img").src;
  const titleP = product.querySelector('.t-product').innerText;
  const priceP = product.querySelector('.p-product').textContent;

  const productInfo = {
    idP,
    imgP,
    titleP,
    priceP
  };
  return productInfo;
}

function createItemCart(product2) {

  const { idP, imgP, titleP, priceP } = product2;

  const itemCart = `<li id="item-${idP}" >
                      <a href="#">
                          <img src=${imgP}>
                          <div class="properties-cart">
                              <span class="item-title">${titleP}</span>
                              <span class="item-price">${priceP}</span>
                              <span class="quantity-item">1</span>
                          </div>
                      </a>
                      <i class="far fa-trash-alt delete-item"></i>
                   </li>
                  `

  return itemCart;
}


const btnSelect = document.querySelectorAll('.add-to-cart');

btnSelect.forEach((element) => {
  element.addEventListener("click", (event) => {

    const emptyCart = document.querySelector('.empty-cart');
    emptyCart.style.display = "none";
    increaseQtyTotal();


    const product = event.target.parentElement;
    const item = getProductInfo(product);


    const addItem = document.querySelector(`#item-${item.idP}`);


    // ADD Item to ShopCart
    if (addItem == null) {
      document.querySelector('.items').innerHTML += createItemCart(item);

      // Delete Item from ShopCart
      const deleteBtn = document.querySelectorAll('.delete-item');
      deleteBtn.forEach((element) => {
        element.addEventListener('click', (e) => {
          const li = e.target.parentElement;
          const qtyItem = li.querySelector(".quantity-item");
  
  
          const qytTotal = document.querySelector('.quantity-total-cart');
          qytTotal.innerText = qytTotal.innerText - qtyItem.innerText
  
          if (qytTotal.innerText == 0) {
            emptyCart.style.display = "block";
          }
          li.remove();
        });
      });


    } else {
      const qtyItem = addItem.querySelector('.quantity-item');
      ++qtyItem.innerText;// qtyItem.innerText = qtyItem.innerText + 1
    }

    
    

  });
});





/*function AddBtn() {
  return `
<div>
  <button onclick='addItem(this)' class='add-btn'>Add <i class='fas fa-chevron-right'></i></button>
</div>`;
}

function QtyBtn(qty = 1) {
  if (qty == 0) return AddBtn();
  return `
<div>
  <button class='btn-qty' onclick="qtyChange(this,'sub')"><i class='fas fa-chevron-left'></i></button>
  <p class='qty'>${qty}</p>
  <button class='btn-qty' onclick="qtyChange(this,'add')"><i class='fas fa-chevron-right'></i></button>
</div>`;
}

function SwitchBtns(found) {
  let element = found.getElementsByClassName("btn-add")[0];
  element.classList.toggle("qty-change");
  let hasClass = element.classList.contains("qty-change");
  found.getElementsByClassName("btn-add")[0].innerHTML = hasClass
    ? QtyBtn()
    : AddBtn();
}

function ToggleBackBtns() {
  let btns = document.getElementsByClassName("btn-add");
  for (let btn of btns) {
    if (btn.classList.contains("qty-change")) {
      btn.classList.toggle("qty-change");
    }
    btn.innerHTML = AddBtn();
  }
}

function qtyChange(event, handler) {
  let btnClicked = event.parentElement.parentElement;
  let isPresent = btnClicked.classList.contains("btn-add");
  let itemName = isPresent
    ? btnClicked.parentElement.parentElement.getElementsByClassName(
        "product-name"
      )[0].innerText
    : btnClicked.parentElement.getElementsByClassName("name")[0].innerText;
  let productNames = document.getElementsByClassName("product-name");
  for (let name of productNames) {
    if (itemName == name.innerText) {
      let productBtn = name.parentElement.parentElement.getElementsByClassName(
        "qty-change"
      )[0];
      cartDetails.forEach((item, i) => {
        if (itemName == item.name) {
          if (handler == "add" && item.qty < 10) {
            item.qty += 1;
            btnClicked.innerHTML = QtyBtn(item.qty);
            productBtn.innerHTML = QtyBtn(item.qty);
          } else if (handler == "sub") {
            item.qty -= 1;
            btnClicked.innerHTML = QtyBtn(item.qty);
            productBtn.innerHTML = QtyBtn(item.qty);
            if (item.qty < 1) {
              cartDetails.splice(i, 1);
              productBtn.innerHTML = AddBtn();
              productBtn.classList.toggle("qty-change");
            }
          } else {
            document.getElementsByClassName("purchase-cover")[0].style.display =
              "block";
            document.getElementsByClassName("stock-limit")[0].style.display =
              "flex";
            sideNav(0);
          }
        }
      });
    }
  }
  RenderCart();
  CartIsEmpty();
  CartItemsTotal();
}*/





