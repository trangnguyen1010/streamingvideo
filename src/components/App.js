import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import VideoPlayer from "./VideoPlayer";

import "../App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/:id"} component={VideoPlayer} />
      </Switch>
    </div>
  );
}

export default App;
