import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/header/header";

//Pages
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
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
        <div className="pages">
          <Routes>
            <Route exact='true' path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </BrowserRouter>
      
      <div className="App">
        <header className="App-header">
          <h1>Hey! Visiter</h1>
          <h2>We have some exited Product for you....</h2>
          <h3>Please Drop a Message bellow.</h3>
          <div className="links">
            <a
              className="link"
              href="https://api.whatsapp.com/send?phone=9203107242237"
            >
              WhatsApp
              <li className="fa fa-whatsapp"></li>
            </a>

            <a
              className="link"
              href="mailto:hamzarafique964@gamil.com?subject = Feedback&body = Message"
            >
              Email
              <li className="fa fa-envelope"></li>
            </a>
            <a
              className="link"
              href="https://web.facebook.com/Vicky-Impex-109714995216107"
            >
              Facebook
              <li className="fa fa-facebook"></li>
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/hamza-rafique-mehar/"
            >
              linkedin
              <li className="fa fa-linkedin"></li>
            </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
