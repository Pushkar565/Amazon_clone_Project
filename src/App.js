import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { StateContext } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PhqXBHHKI24l480HEGC5cXFOiGFMqstfJJcjj9nbIesWzLiA93NoCRJwT9YljvsPU4zMi1p3rBrWRuTL61kKRwX00sdkDyZZk"
);

function App() {
  const [, dispatch] = useContext(StateContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
