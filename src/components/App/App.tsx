import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { NotAllowedPage } from "../NotAllowedPage";
import { AllowedPage } from "../AllowedPage";
import { PromptPage } from "../PromptPage";
import "./App.scss";

function App() {
  return (
    <div className="main">
      <div className="content">
        <nav className="nav">
          <NavLink className="nav-link" to="/" exact>
            Home Page
          </NavLink>
          <NavLink className="nav-link" to="/not-allowed-page">
            Not Allowed Page
          </NavLink>
          <NavLink className="nav-link" to="/allowed-page">
            Allowed Page
          </NavLink>
        </nav>
        <Switch>
          <Route path="/allowed-page" component={AllowedPage} />
          <Route path="/not-allowed-page" component={NotAllowedPage} />
          <Route path="/" exact component={PromptPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
