const products = [
    {
        category: "Short_Sleevs",
        price: "$30",
        imageUrl: "https://m.media-amazon.com/images/I/81rlUrAQpUL._AC_UL400_.jpg",
        info: "Under Armour Men's Global Foundation Short-Sleeve T-Shirt",
        ratings: "4.5"

    },
    {
        category: "Shirts",
        price: "$30",
        imageUrl: "https://m.media-amazon.com/images/I/81GikFYy7cL._AC_UL400_.jpg",
        info: "Hanes Men’s X-Temp Short Sleeve Polo Shirt, Midweight Men's Shirt",
        ratings: "2.5"
    },

    {
        category: "Long Sleeve",
        price: "$30",
        imageUrl: "https://m.media-amazon.com/images/I/61H-9uvDqpL._AC_UL400_.jpg",
        info: "Port Authority Long Sleeve SuperPro React Twill Shirt. W808 ",
        ratings: "4"
    },
    {
        category: " Polo Shirt",
        price: "$30",
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/m/o/t/l-st1-vebnor-original-imagmsyxhvkrfjgz.jpeg?q=70",
        info: "Breast Cancer Pink Ribbon Men's Short Sleeve Polo Shirts Casual Zippered Golf Shirt Slim Fit T-Shirt Tops",
        ratings: '5'
    },
    {
        category: "Midi Dress",
        price: "$30",
        imageUrl: "https://m.media-amazon.com/images/I/61i+-r9TIcL._MCnd_AC_UL400_.jpg",
        info: "SheIn Women's Wrap Tie Side Scoop Neck Bodycon Midi Dress Sleeveless Asymmetrical Tank Dresses",
        ratings: '4'
    },
    {
        category: "Long dress",
        price: "$30",
        imageUrl: "https://m.media-amazon.com/images/I/51BlxPEDsUL._MCnd_AC_UL400_.jpg",
        info: "ANRABESS Women's Casual Loose Sundress Long Dress Sleeveless Split Maxi Dresses Summer Beach Dress with",
        ratings: '3.5'
    },
    {
        category: "satin Short",
        price: "$30",
        imageUrl: "https://m.media-amazon.com/images/I/71712pdTbTL._MCnd_AC_UL400_.jpg",
        info: "BTFBM Women Button Down Shirts Dresses Satin Short Sleeve V Neck Elastic Waist Self Tie Knot Club Party 2023 Summe",
        ratings: "1"
    },
    {
        category: "Long Satin Dress",
        price: "$30",
        imageUrl: "https://m.media-amazon.com/images/I/61IafvVLwVL._MCnd_AC_UL400_.jpg",
        info: "PRETTYGARDEN Women's Summer Long Satin Dress One Shoulder Sleeveless Ruched Twist Flowy Maxi Dresses",
        ratings: '3'
    },
    {
        category: "Pencil-Dress",
        price: "$30",
        imageUrl: "https://m.media-amazon.com/images/I/81M26LTs6jL._AC_UL400_.jpg",
        info: "GRACE KARIN Women's Business Pencil Dress Wedding Guest Office Work Dresses Cocktail",
        ratings: "4"
    },
]

// Showing featured products in html
const featuredProducts = document.querySelector(".featured");
products.forEach(product => {
    featuredProducts.innerHTML += `<div class="col-sm-6 col-lg-4 col-xl-3">
   <div class="main position-relative  overflow-hidden h-100 shadow-sm">
   <span
   class="position-absolute top-0 start-0 badge rounded-pill bg-danger sty"

 >
<p class="m-0">Hot Sales </p>
</span>
   <div class="card h-100 border-0 ">
       <img src=${product.imageUrl} class="card-img-top    mx-auto mt-3 img-fluid imgh" alt="..." >
       <div class="card-body pb-0">
     <p class=" text-secondary mb-0" style="font-size: 1rem;"> ${product.category}</p>
         <p class="card-text mb-1 text-danger ">${product.info}</p>
         </div>
    <div class="card-footer border border-0" style="background-color:white">
       <div class="ratings">
           
       
       </div>
       <div class="price d-flex justify-content-between mt-2 align-items-center">
           <h5 class="danger mb-0">${product.price}</h5>
           <button class="btn btn-outline-info rounded-5 p-0 d-flex justify-content-center align-items-center" style="height: 35px; width: 35px;">
               <lord-icon
               src="https://cdn.lordicon.com/slkvcfos.json"
               trigger="hover"
               colors="primary:#121331,secondary:#08a88a"
               style="width:30px;height:30px; ">
           </lord-icon>
           </button>
          
       </div>
     
     </div>
 </div>
   </div>`
})
// Showing the ratings star in html dynamically
const ratingContainer = document.querySelectorAll(".ratings");
products.forEach((product, index) => {
    for (let i = 0; i < parseInt(product.ratings); i++) {
        ratingContainer[index].innerHTML += `<i class="fa-solid fa-star" style="color: #eae32a;"></i>`
    }
    if (product.ratings.indexOf('.') != -1) {
        ratingContainer[index].innerHTML += `<i class="fa-solid fa-star-half" style="color: #eae32a;"></i>`
    }
})



