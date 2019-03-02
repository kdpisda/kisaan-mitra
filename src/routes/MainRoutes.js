import React from "react";
import { Route, Switch } from "react-router";
import Home from "../containers/Home";
import AdvisoryDashboard from "../containers/AdvisoryDashboard";
import AdvisoryEdit from "../containers/AdvisoryEdit";
import AdvisoryCreate from "../containers/AdvisoryCreate";
import Auth from "../containers/Auth";

const MainRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/advisory/dashboard" component={AdvisoryDashboard} />
        <Route exact path="/advisory/edit" component={AdvisoryEdit} />
        <Route exact path="/advisory/create" component={AdvisoryCreate} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </React.Fragment>
  );
};

export default MainRoutes;
