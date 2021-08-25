import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Switch>
          <Route exact path="/Portfolio-project/">
            <Home />

          </Route>

          <Route path="/Portfolio-project/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
