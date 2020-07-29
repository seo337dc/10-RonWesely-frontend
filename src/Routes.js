import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import BulkPackageSale from "./Pages/BulkPackageSale/BulkPackageSale";
import SignUp from "./Pages/Member/Signup";
import Login from "./Pages/Member/Login";
import Product from "./Pages/Product/Product";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/bulkpackagesale" component={BulkPackageSale} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product" component={Product} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
