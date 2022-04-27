import React from "react";

function ProductIndu({ products, addToCart }) {
    const handleAddCarts = () => {
        console.log("add not carts", addToCart);
        addToCart(products);
    };
    return (
        <div className="container">
            <div className="row gap-4 justify-content-center">
                {products.map((items, index) => {
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
                                        <button
                                            class="dedcription-btn"
                                            onClick={handleAddCarts}
                                        >
                                            <span class="name-descripeion">
                                                Add Cart
                                            </span>
                                            <div class="btn-icon">
                                                <i class="far fa-lightbulb"></i>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductIndu;
