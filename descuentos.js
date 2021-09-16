// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
 const porcentajePrecioConDescuento = 100 - descuento;
 const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

 return precioConDescuento;
}

function onClickButtonPriceDiscount(){
 const inputPrice = document.getElementById("InputPrice");
 const priceValue = inputPrice.value;

 const inputDiscount = document.getElementById("InputDiscount");
 const discountValue = inputDiscount.value;

 const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
 const resultP = document.getElementById("ResultP");
 resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

//con cupon

 const coupons = [
  "JuanDC_es_Batman",
  "no_le_digas_a_nadie",
  "es_un_secreto",
 ];
 
 const inputCoupon = document.getElementById("InputCoupon");
 const couponValue = inputCoupon.value;

 let descuento;

 switch(couponValue) {
  case "JuanDC_es_Batman":
    descuento = 15;
  break;
  case "no_le_digas_a_nadie":
    descuento = 30;
  break;
  case "es_un_secreto":
    descuento = 25;
  break;
}
 
 const precioConCoupon = calcularPrecioConDescuento(priceValue, descuento);

 const resultC = document.getElementById("ResultC");
 resultC.innerText = "El precio con descuento por cupon es: $" + precioConCoupon;
}

// console.log({
//  precioOriginal, 
//  descuento,
//  porcentajePrecioConDescuento,
//  precioConDescuento,
// });