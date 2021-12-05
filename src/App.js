import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import About from './components/about';
import Work from "./components/works";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/work" component={Work} exact />
      </Switch>
    </div>
  );
}

export default App;
