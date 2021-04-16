import './App.css';
import Header from "./components/Header/Header"
import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Menu from "./components/Menu/Menu"
import Foq from "./components/Foq/Foq"
import Contact from "./components/Contact/Contact"
import { BrowserRouter, Route } from "react-router-dom";
function App() {  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Route exact path="/" >
          <Section1 />
          <Section2 />
        </Route>

        <Route exact path="/About">
          <About />
        </Route>

        <Route exact path="/menu">
          <Menu />
        </Route>

        <Route exact path="/foq">
          <Foq />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
