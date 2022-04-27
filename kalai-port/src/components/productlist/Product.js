import React from "react";
import ProductIndu from "../productindulist/ProductIndu";
import "./styles/Product.scss";
function Product({ products, addToCart }) {
    console.log("receivd data", products);

    return (
        <div className="container">
            {/* <div className="row gap-4 justify-content-center">
                {productsed.map((items, index) => {
                    return (
                        <div class="cards col-lg-3 col-md-6 col-sm-6 mb-4 mt-3">
                            <div className="left-card">
                                <div className="empty-box-image">
                                    <img
                                        src={items.url}
                                        class="card-img-top"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <div class="card-body">
                                <div className="card-left1">
                                    <h5 class="card-title">
                                        Title:{items.title}
                                    </h5>
                                    <h6 class="card-text">
                                        Description:{items.description}
                                    </h6>
                                    <p>Price:{items.price}</p>
                                </div>
                            </div>
                            <div>
                                <div class="hover-box">
                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                        <a
                                            class="dedcription-btn"
                                            onClick={handleAddCart}
                                        >
                                            <span class="name-descripeion">
                                                Add Cart
                                            </span>
                                            <div class="btn-icon">
                                                <i class="far fa-lightbulb"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div> */}
            <ProductIndu products={products} addToCart={addToCart} />
        </div>
    );
}

export default Product;
