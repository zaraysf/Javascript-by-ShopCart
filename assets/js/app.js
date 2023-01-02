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

function totalPrice(priceItem){
  const totalPrice = document.querySelector('.total-price');
  const priceNumber = Number(priceItem.replace(/,/g,"")) ;
  
    totalPrice.innerText = Number(totalPrice.innerText) + priceNumber;
     
}


const btnSelect = document.querySelectorAll('.add-to-cart');

btnSelect.forEach((element) => {
  element.addEventListener("click", (event) => {

    const emptyCart = document.querySelector('.empty-cart');
    emptyCart.style.display = "none";
    increaseQtyTotal();


    const product = event.target.parentElement;
    const item = getProductInfo(product);

     /////////////////// Total Price
    totalPrice(item.priceP);


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



