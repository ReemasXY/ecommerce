const products = [
   {
    category:"Watches",
    imageUrl:"https://m.media-amazon.com/images/I/61CrR6uVQ4L._AC_UL320_.jpg",
    info:"SEIKO SRPD51 5 Sports Men's Watch Silver-Tone 42.5mm Stainless Steel, Blue",
    ratings: "4.5",
    Price: "$222"
   },
   {
    category:"Watches",
    imageUrl:"https://m.media-amazon.com/images/I/712pZaKiUOL._AC_UL320_.jpg",
    info:"Bulova Men's Classic Maquina Automatic Open Aperture Watch",
    ratings: "5",
    Price: "$441"
   },
   {
    category:"Watches",
    imageUrl:"https://m.media-amazon.com/images/I/61nHUVwR65L._AC_UL320_.jpg",
    info:"Casio Men's MDV106-1AV 200 M WR Black Dive Watch (MDV106-1A)",
    ratings: "4.5",
    Price: "$52"
   },
   {
    category:"Watches",
    imageUrl:"https://m.media-amazon.com/images/I/81tlaUHO2kL._AC_UL320_.jpg",
    info:"Gucci SYNC XXL Stainless Steel Watch with Black Rubber Bracelet(Model:YA137101)",
    ratings: "4.5",
    Price: "$450"
   },
   {
    category:"Watches",
    imageUrl:"https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UL320_.jpg",
    info:"Casio F91W-1 Classic Resin Strap Digital Sport Watch",
    ratings: "3.5",
    Price: "$150"
   },
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
    category: "Polo Shirt",
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
const cat= document.querySelector(".category")

// Showing all products in html
const featuredProducts = document.querySelector(".showProducts");
function display(pro)
{
    featuredProducts.innerHTML=''
    pro.forEach(product => {
        featuredProducts.innerHTML += `<div class="col-sm-12 col-md-6 col-xl-4">
       <div class="main position-relative  overflow-hidden h-100 shadow-sm">
       
       <div class="card h-100 border ">
           <img src=${product.imageUrl} class="card-img-top    mx-auto mt-3 img-fluid imgh" alt="..." >
           <div class="card-body pb-0">
         <p class=" text-secondary mb-0" style="font-size: 1rem;"> ${product.category}</p>
             <p class="card-text mb-1 text-danger ">${product.info}</p>
             </div>
        <div class="card-footer border border-0" style="background-color:white">
           <div class="ratings">
               
           
           </div>
           <div class="price d-flex justify-content-between mt-2 align-items-center">
               <h5 class="danger mb-0">${product.Price}</h5>
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
}
    display(products)
//setting the category price and rating dynamically
const categoryContainer= document.querySelector(".Cat");
// a single function to implement all the required value
const implementHtml = (obj,element)=>{
obj.forEach(obj =>{
    element.innerHTML+=` <button type="button" class="list-group-item list-group-item-action">${obj}</button>`
})
}

const categories= products.map(product => product.category)
categories.unshift("All")
const categoryFilter= new Set(categories)
console.log(categoryFilter)
implementHtml(categoryFilter,categoryContainer)

//Ratings 

// Showing the ratings star in html dynamically

function showRating(products){
    const ratingContainer = Array.from(document.querySelectorAll(".ratings"));
    console.log(ratingContainer)
products.forEach((product, index) => {
    for (let i = 0; i < parseInt(product.ratings); i++) {
        ratingContainer[index].innerHTML += `<i class="fa-solid fa-star" style="color: #eae32a;"></i>`
    }
    if (product.ratings.indexOf('.') != -1) {
        ratingContainer[index].innerHTML += `<i class="fa-solid fa-star-half" style="color: #eae32a;"></i>`
    }
})
}
showRating(products);

const rating= document.querySelector(".Rating")
for(let i=1; i<=5;i++)
{ 
const div= document.createElement('div')
div.setAttribute('class','d-flex');
div.classList.add('py-1', 'align-items-center','justify-content-between')    
const p= document.createElement('p')
// p.setAttribute('class','m-0');
p.classList.add('m-0','d-flex','justify-content-center','mx-auto')
div.append(p)
for(let j=1; j<=i;j++)
{
    p.innerHTML+=`<i class="fa-solid fa-star text-center" style="color: #eae32a;"></i>`
}
div.innerHTML+=`<p class='m-0 ps-1 align-self-end'>${i}& Above`
rating.append(div)
}


//showing the clicked products of category
const categoriesBtns= categoryContainer.querySelectorAll('button')
console.log(categoriesBtns)
categoriesBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        window.scrollTo(0,0)
        cat.classList.remove('width')

       if(btn.innerText === 'All')
       {
        display(products)
        showRating(products)

       }
       else{
        const selecteditems= products.filter(product=> {
          
            if(btn.innerText=== product.category)
            {
                return product
            }
        })
       display(selecteditems)
       showRating(selecteditems) 
       window.scrollTo(0,0)

       }

    })
})

window.addEventListener('resize',()=>{
    if(window.innerWidth >=1000)
    {
        cat.classList.remove('width')
    }
})
const filterbtn= document.querySelector('.filter')
filterbtn.addEventListener("click",()=>{
cat.classList.add('width')
})