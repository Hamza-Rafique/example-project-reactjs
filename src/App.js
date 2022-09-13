import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey! Visiter</h1>
        <h2>We have some exited Product for you....</h2>
        <h3>Please Drop a Message bellow.</h3>
        <div className="links">
          <a href="https://api.whatsapp.com/send?phone=9203107242237">
            WhatsApp
            <li className="fa fa-whatsapp"></li>
          </a>

          <a href="mailto:hamzarafique964@gamil.com?subject = Feedback&body = Message">
            Email
            <li className="fa fa-envelope"></li>
          </a>
          <a href="https://web.facebook.com/Vicky-Impex-109714995216107">
            Facebook
            <li className="fa fa-facebook"></li>
          </a>
          <a href="https://www.linkedin.com/in/hamza-rafique-mehar/">
            linkedin
            <li className="fa fa-linkedin"></li>

          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
