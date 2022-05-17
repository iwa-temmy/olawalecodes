import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import About from './components/about';
import Work from "./components/works";
import Navbar from "./components/navbar";

//Framer Motion
import { AnimatePresence } from "framer-motion/dist/framer-motion"

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/work" component={Work} exact />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
