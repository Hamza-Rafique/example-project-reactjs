import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/header/header";
import Hero from "./components/herosection/hero";
import Footer from "./components/footer/footer.js";
import Product from "./components/product/product";
import ChoiceUs from "./components/whychoiceus/choiceus";
import CustomDesign from './components/customdesign/custom';

function App() {
  return (
    <>
        <NavBar />
        <Hero />
        <ChoiceUs />
        <Product />
        <CustomDesign />
        <Footer />
    </>
  );
}

export default App;
