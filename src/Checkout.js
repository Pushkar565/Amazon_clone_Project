import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="/checkout_img/banner-ad-example.jpg"
          alt="Ad"
        />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout-right">
        <h2>The subtotal</h2>
      </div>
    </div>
  );
};

export default Checkout;
