import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import ProductMenu from "../productmenu/menu";
import { ProductCard } from "../card/card";
import "./style.css";

const Product = () => {
  return (
    <>
      <MDBContainer id="products">
        <h1 className="my-4 box-heading">Our Products</h1>
      </MDBContainer>
      <ProductMenu />
      <MDBContainer>
        <ProductCard />
      </MDBContainer>
    </>
  );
};

export default Product;
