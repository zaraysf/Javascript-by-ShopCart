const btnSelect = document.querySelectorAll('.add-to-cart');
btnSelect.forEach((element)=>{
element.addEventListener("click",(event)=>{
const product = event.target.parentElement;
const qytTotal = document.querySelector('.quantity-total-cart');
++qytTotal.innerText;
const emptyCart = document.querySelector('.empty-cart');
  emptyCart.style.display = "none"; 
const idP= product.id;
const imgP=product.querySelector("img").src;
const titleP=product.querySelector('.t-product').innerHTML;
const priceP=product.querySelector('.p-product').innerHTML;
const addItem = document.querySelector(`#item-product1-${idP}`);

// ADD Item to ShopCart
if(addItem == null){
  const item = `<div class="item-product" id="item-product1-${idP}">
  <img src=${imgP}>
  <div class="properties-product">
    <h5 class="t-product">${titleP}</h5>
    <div>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
    </div>
    <div class="p-product">
      <span>قیمت :</span>
      <span class="price-product">${priceP}</span>
      <span class="fas fa-star qtyItem">1</span>
    </div>
    <i class="far fa-trash-alt deleteItem"></i>
  </div>
  </div>`
  document.querySelector('.items').innerHTML += item;
}else{
const addQtyItem = document.querySelector('.qtyItem');
++addQtyItem.innerText.addItem;
}

// Delete Item from ShopCart
const deleteBtn = document.querySelectorAll('.deleteItem');
deleteBtn.forEach((element)=>{
element.addEventListener( 'click' , (e)=>{
const li = e.target.parentElement;
const qtyItem = li.querySelector('.qtyItem');
qytTotal.innerText = qytTotal.innerText - qtyItem.innerText;
li.remove();

if(qytTotal.innerText == 0){
  emptyCart.querySelector('.empty-cart').style = "block";
}
});
});

});
});
