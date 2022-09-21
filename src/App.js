import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/header/header";
import Hero from "./components/herosection/hero";
import Footer from "./components/footer/footer.js";
import Product from "./components/product/product";
// import ChoiceUs from "./components/whychoiceus/choiceus";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Hero />
          <Routes>
            <Route exact='true' path="/" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Routes>
          {/* <ChoiceUs /> */}
          <Product />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
