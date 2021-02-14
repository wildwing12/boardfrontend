import { Route } from "react-router-dom";
import { About } from "./container/About";
import { Home } from "./container/Home";

function App() {
  return (
    <div>
     쥬드러스뽕따이
      <Route path="/" component={Home} exact />
      <Route path="/about" exact={true} component={About} />
    </div>
  );
}

export default App;
