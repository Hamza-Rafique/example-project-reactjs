import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Hello } from "../card/card";
import ProductMenu from "../productmenu/menu";
import './style.css';

const Product = () => {
  return (
    <>
      <ProductMenu />
      <MDBContainer>
        <h2 className="mt-4 mb-4 ml-4"> Top Working favorite Products</h2>
        <Hello />
      </MDBContainer>
    </>
  );
};

export default Product;
