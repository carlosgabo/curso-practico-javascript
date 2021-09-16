// const list = [
//  1,
//  2,
//  3,
//  2,
//  4,
//  2,
//  2,
//  4,
//  3,
//  2,
//  2,
// ];

function moda(list){
 const listCount = {};

 list.map(
  function(element){
   if(listCount[element]) {
    listCount[element] += 1;  
   } else {
    listCount[element] = 1;
   }
  }
 );

 const listArray = Object.entries(listCount).sort(
  function (a, b){
    return a[1] - b[1];
  }
 );

 const moda = listArray[listArray.length - 1];
 return moda;
}