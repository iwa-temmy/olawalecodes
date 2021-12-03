import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/" exact render={() => <Home />} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
