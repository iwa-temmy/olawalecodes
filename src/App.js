import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import About from './components/about';
import Work from "./components/works";
import Navbar from "./components/navbar";

//Framer Motion
import { AnimatePresence } from "framer-motion/dist/framer-motion"
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const res = await navigator.userAgentData
        .getHighEntropyValues([
          "architecture",
          "model",
          "platform",
          "platformVersion",
          "fullVersionList"
        ])
      console.log({ res })
      window.alert(`Your phone is ${res?.model} `)
    }
    fetchDeviceInfo();


  }, [])
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/work" component={Work} exact />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
