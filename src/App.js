import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />

          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>


      </Router>
    </>
  );
}

export default App;
