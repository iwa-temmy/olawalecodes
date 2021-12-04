import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import About from './components/about';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </div>
  );
}

export default App;
