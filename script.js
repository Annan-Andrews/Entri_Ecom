let allProducts = []


fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(products=>{
  allProducts = products; 
  displayProducts(products); 
});




function displayProducts(products) {
  let productistEl = document.getElementById("product-list")
  let productist = ``


  for(let product of products){
    productist += ` <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                      <div class="card h-100">
                        <img src="${product.image}" class="card-img-top " alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${product.title}</h5>
                          <p class="text-success">$${product.price}</p>
                          <p class="card-text">${product.description}</p>
                          <button class="btn btn-warning">View Product</button>
                          <button class="btn btn-primary">Add to cart</button>
                        </div>
                      </div>
                    </div>  `
  }

  productistEl.innerHTML = productist
}

document.getElementById("search").addEventListener('click', (event) => {
  event.preventDefault();

  let input = document.getElementById("searchProduct").value.toLowerCase()

  let filteredProduct = allProducts.filter( product =>{
    return (product.title.toLowerCase().includes(input))
  }
  )

  displayProducts(filteredProduct)

})
