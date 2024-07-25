import React from "react";
import "./Product.css";

function Product({title,image,price,rating}) {
  return (
    <div className="product">
      <div className="productinfo">
        <p className="product_">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        
        <div className="product_rating">
          <p>'🌟🌟</p>
        </div>
      </div>

      <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" />
    <button>Add to Basket</button>
    </div>

  );
}

export default Product;
