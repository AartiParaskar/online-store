// script.js
const products=[
{name:"Laptop",price:8000,category:"Electronics",rating:4.5,img:"https://th.bing.com/th/id/OIP.LNqBWDyJ5pypM1SU6LfmWwHaHa?w=191&h=191&c=7&r=0&o=7&pid=1.7&rm=3"},
{name:"Phone",price:6000,category:"Electronics",rating:4.2,img:"https://th.bing.com/th/id/OIP.e_kafCrQjiwQBzZHRzuRKAHaE8?w=278&h=185&c=7&r=0&o=7&pid=1.7&rm=3"},
{name:"Headphones",price:1200,category:"Electronics",rating:4.7,img:"data:image/webp;base64,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"},
{name:"T-Shirt",price:250,category:"Fashion",rating:3.8,img:"https://th.bing.com/th/id/OIP.s3bBOva2vOpLKBBpyJFuIwHaHa?w=158&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
{name:"Shoes",price:700,category:"Fashion",rating:4.1,img:"https://th.bing.com/th/id/OIP.P002dynaWZMy8Ak-p4aiBgHaHa?w=167&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
{name:"Jacket",price:1250,category:"Fashion",rating:4.6,img:"data:image/webp;base64,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"},
{name:"Book ",price:150,category:"Books",rating:4.9,img:"https://th.bing.com/th/id/OIP.r_jAEJWmd5xiv8DzcisJuwHaJ4?w=123&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
{name:"Book ",price:200,category:"Books",rating:3.5,img:"https://th.bing.com/th/id/OIP._KDFm8Qc1MeIcNOxGyBazQHaEK?w=319&h=180&c=7&r=0&o=7&pid=1.7&rm=3"}
];
const container=document.getElementById("products");

function render(list){
  container.innerHTML="";
  list.forEach(p=>{
    container.innerHTML+=`
    <div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p class="price">$${p.price}</p>
      <p>⭐ ${p.rating}</p>
      <button onclick="add('${p.name}')">Add to Cart</button>
    </div>`;
  });
}
function add(name){ alert(name+" added to cart!"); }

function update(){
  let search=document.getElementById("search").value.toLowerCase();
  let cat=document.getElementById("category").value;
  let rate=document.getElementById("rating").value;
  let max=document.getElementById("priceRange").value;
  let sort=document.getElementById("sort").value;

  let filtered=products.filter(p=>
    p.name.toLowerCase().includes(search) &&
    (cat==="all"||p.category===cat) &&
    p.price<=max &&
    p.rating>=rate
  );

  if(sort==="low") filtered.sort((a,b)=>a.price-b.price);
  if(sort==="high") filtered.sort((a,b)=>b.price-a.price);
  if(sort==="rating") filtered.sort((a,b)=>b.rating-a.rating);

  render(filtered);
}
["search","category","rating","sort"].forEach(id=>{
  document.getElementById(id).addEventListener("input",update);
});

document.getElementById("priceRange").addEventListener("input",e=>{
  document.getElementById("priceValue").innerText="Max: $"+e.target.value;
  update();
});

render(products);
