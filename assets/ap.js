function qtyWish() {
const qtyWish = document.querySelector('.quantity-total-wish');
++qtyWish.innerText;
}

function getBtnWish (product) {
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

function createWishItem (product2){
  const {idP,imgP,titleP,priceP} = product2;

const wishItem = 
`<li id="item-${idP}" >
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
        return wishItem;
}


const makeWishItem = document.querySelectorAll('.add-to-wish');
makeWishItem.forEach((element)=>{
element.addEventListener(('click') , (event)=>{
  const wishEmptyItem = document.querySelector('.empty-wish');
    wishEmptyItem.style.display = "none";
    qtyWish();

  const product = event.target.parentElement;
  const item = getBtnWish (product);
  
  const addItem = document.querySelector(`#item-${item.idP}`);

// ADD Item to WishCart
  if(addItem == null){
    document.querySelector('.wishes').innerHTML += createWishItem (item);
  }else{
      const qtyItemWish = document.querySelector('.quantity-item');
      ++qtyItemWish.innerText;
  }

  // DELETE Item to WishCart

const delBtn = document.querySelectorAll('.delete-item');

delBtn.forEach((element)=>{
  element.addEventListener('click' , (e)=>{

    const li = e.target.parentElement;
    
    const qtyTotal = document.querySelector('.quantity-total-wish');
    const qtyItem = li.querySelector('.quantity-item');
    qtyTotal.innerText = qtyTotal.innerText - qtyItem.innerText;
    
    li.remove();
    })
})


 

})
})



