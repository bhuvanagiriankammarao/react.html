
let product = [

    {name: "DSC ", description: "this is light weight ooil bat for youth,", price: 35, image:"dsc.png"  },
    {name: "MRF", description: "this is light weight ooil bat for youth,", price: 36, image:"mrf.png"}, 
    {name: "SS", description: "this is light weight ooil bat for youth,", price: 3, image:"ss.png"},
    {name: "KOOKABURA",  description: "this is light weight ooil bat for youth,", price:24, image:"kookaburra.png"},
   {name: "CEAT",description: "this is light weight ooil bat for youth,",price: 5,image:"ceat.png"},
   { name: "GM",description: "this is light weight ooil bat for youth,",price: 6,image:"gm.png"},

   ];

   // let  mycart = [
   // {name: "apple",description: "this is a dummy text,",price: 3,qty:3,},
   // {name: "mango",description: "this is a dummy text,",price: 3,qty:3,},
   
   //  ];

   let msg = "";
   product.forEach((value) => {
       msg= msg+`<div class="container">
   
                   <div><img class="image"  src=${value.image}></div>
                   <div>${value.name}</div>
                   <div>${value.description}</div>
                   <div>${value.price}</div> 
                   <div><button>Add</button></div>
               </div>`;
       });
products.innerHTML = msg;

// let txt="";
//cart.forEach((value)=>{
//     txt=txt+ `<ul> <li> ${value.name}-${value.price}-${value.qty}-${value.price *value.qty}</li></ul>`;
// });
// mycart.innerHTML = txt;
// let total = cart.reduce((sum,value)=>{
//        return sum + value.price*value.qty;
// },0);
// order.innerHTML="order value :"+total;

// {

// }

