import React from 'react'

function ProductDetail() {
    return (
        <div className='cont my-5'>
            <div class="row">
                <div class="col-md-8">
                    <div class="product-image">
                        <img src="images/featured/7.jpg" alt="" />
                    </div>
                    <div class="product-information">
                        <h2 style={{fontWeight: 800, fontSize: 30}}>Product Title Goes Here</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, esse, excepturi, sint ut et numquam reiciendis nulla in deserunt quaerat provident 
                            obcaecati reprehenderit iusto ab neque corporis id temporibus architecto quia adipisci? Officia, aliquam, eveniet, molestias, voluptate porro assumenda 
                            error soluta ab blanditiis voluptatum nisi voluptates debitis doloribus. Asperiores, provident fuga quibusdam id tenetur!<br></br><br></br>Nostrum quis quo 
                            earum enim suscipit molestiae cupiditate reprehenderit? Atque, numquam nostrum adipisci suscipit exercitationem sed ullam. Odio, laborum, obcaecati 
                            harum nostrum pariatur ipsam itaque minima atque expedita at amet dignissimos odit quisquam laboriosam eius officiis ratione alias sint rerum distinctio. 
                            Quidem, veritatis consequuntur voluptas sunt quo deleniti reprehenderit deserunt atque minus non.
                        </p>
                        <p class="product-infos">
                            <span>Bundle Price: $450</span>
                            <span>Discount: 30%</span>
                        </p>
                        <ul class="product-buttons">
                            <li>
                                <a href="#" class="main-btn">Add to Cart</a>
                            </li>
                        </ul>
                    </div> 
                </div> 
                <div class="col-md-4 col-sm-8">
                    <div class="product-item-2">
                        <div class="product-thumb">
                            <img src="images/featured/1.jpg" alt="Product Title" />
                        </div>
                        <div class="product-content overlay">
                            <h5><a href="#">Name Of Shirt</a></h5>
                            <span class="tagline">Partner Name</span>
                            <span class="price">$30.00</span>
                            <p>Doloremque quo possimus quas necessitatibus blanditiis excepturi. Commodi, sunt tenetur deleniti labore!</p>
                        </div> 
                    </div>
                    <div class="product-item-2">
                        <div class="product-thumb">
                            <img src="images/featured/2.jpg" alt="Product Title" />
                        </div>
                        <div class="product-content overlay">
                            <h5><a href="#">Name Of Shirt</a></h5>
                            <span class="tagline">Partner Name</span>
                            <span class="price">$40.00</span>
                            <p>Doloremque quo possimus quas necessitatibus blanditiis excepturi. Commodi, sunt tenetur deleniti labore!</p>
                        </div> 
                    </div>
                    <div class="product-item-2">
                        <div class="product-thumb">
                            <img src="images/featured/8.jpg" alt="Product Title" />
                        </div>
                        <div class="product-content overlay">
                            <h5><a href="#">Name Of Shirt</a></h5>
                            <span class="tagline">Partner Name</span>
                            <span class="price">$50.00</span>
                            <p>Doloremque quo possimus quas necessitatibus blanditiis excepturi. Commodi, sunt tenetur deleniti labore!</p>
                        </div> 
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default ProductDetail
