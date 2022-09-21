import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import ProductMenu from "../productmenu/menu";
import { ProductCard } from "../card/card";
import "./style.css";

const Product = () => {
  return (
    <>
      <MDBContainer>
        <h1 className="my-4">Click below to Check our Gloves Products.</h1>
      </MDBContainer>
      <ProductMenu />
      <MDBContainer>
        <h2 className="mt-4 mb-4 ml-4"> Top Working favorite Products</h2>
        <ProductCard />
      </MDBContainer>
    </>
  );
};

export default Product;
