import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import About from './components/about';
import Work from "./components/works";
import Navbar from "./components/navbar";
import { getDeviceInfo, getModels } from "./detect-device";
//Framer Motion
import { AnimatePresence } from "framer-motion/dist/framer-motion"
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [message, setMessage] = useState("")

  const { glRenderer, models, resolution } = getDeviceInfo();

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
      setMessage(JSON.stringify(navigator.userAgentData))
      console.log(JSON.stringify(navigator.userAgentData))
    }
    fetchDeviceInfo();


  }, [])
  return (
    <>
      <div style={{ color: "red", background: "white", height: "50px", display: "flex", direction: "row" }}><p>OpenGL Renderer: {glRenderer}</p>
        <p>Supported Models: {models?.join(", ")}</p>
        <p>Resolution: {resolution}</p>
        <p>Model {getModels()?.join(" or ")}</p></div>
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
