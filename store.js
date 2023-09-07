let rb=document.getElementsByClassName('btn-danger');

let remove= (event)=>{
    let btnc=event.target;
    btnc.parentElement.parentElement.remove()
    total()
}
for(let i=0;i<rb.length;i++){
    let rem=rb[i];
    rem.addEventListener('click', remove)
}
let addtc=document.getElementsByClassName('shop-item-button')
for(let i=0;i<addtc.length;i++){
    let atc=addtc[i]
    atc.addEventListener('click',add)
}

let quantitychanged=document.getElementsByClassName('cart-quantity-input')

for(let i=0;i<quantitychanged.length;i++){
    let ip=quantitychanged[i]
    ip.addEventListener('change',qc)
}

function qc(event){
    let input=event.target
   if(isNaN(input.value) || input.value <=0) {
     input.value=1
   }  
   total()
}
function add(event){
    let ad=event.target
    let shopItem=ad.parentElement.parentElement
    let title=shopItem.getElementsByClassName('shop-item-title')[0].innerText
    let image=shopItem.getElementsByClassName('shop-item-image')[0].src
    let price=shopItem.getElementsByClassName('shop-item-price')[0].innerText
    addToCart(title,price,image)
    total()
    
}
let purchase=document.getElementsByClassName('btn-purchase')[0]
purchase.addEventListener('click',purchaseclicked)

function purchaseclicked(){
    alert('thank you')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
   total()
}
function addToCart(title,price,image){
    let cartRow=document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems=document.getElementsByClassName('cart-items')[0]
    let cartNames=cartItems.getElementsByClassName('cart-item-title')
    for(let i=0;i<cartNames.length;i++){
        let et=cartNames[i].innerText
        if(et==title){
            alert('already exists')
            return
        }
    }
    let  cartRowContents=`<div class="cart-item cart-column">
    <img class="cart-item-image" src="${image}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>`
 cartRow.innerHTML=cartRowContents
    
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',remove)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('click',qc)
}


function total(){
    let cartItems=document.getElementsByClassName('cart-items')[0]
    let cartRows=cartItems.getElementsByClassName('cart-row')
     let tot=0

    for(let i=0;i<cartRows.length;i++){
        let cartRow=cartRows[i]
        let priceItem =cartRow.getElementsByClassName('cart-price')[0]
       let quantityItem=cartRow.getElementsByClassName('cart-quantity-input')[0]
   
       let price = parseFloat(priceItem.innerText.replace('$',' '))

       let quantity=quantityItem.value
       tot=tot+ price*quantity
       
    }
    tot=Math.round(tot*100)/100
    document.getElementsByClassName('cart-total')[0].innerText='$'+tot
   
}











