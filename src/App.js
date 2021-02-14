import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import { Header } from "./component/Header";
import { About } from "./container/About";
import { Home } from "./container/Home";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Route path="/" component={Home} exact />
        <Route path="/about" exact={true} component={About} />
      </Container>
    </div>
  );
}

export default App;
