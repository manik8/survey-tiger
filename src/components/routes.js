import React from "react";
import { Route, Switch } from "react-router-dom";
import { CreateSurvey } from "./CreateSurvey";
import { Landing } from "./Landing";

export const routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/create-survey" component={CreateSurvey} />
      </Switch>
    </div>
  );
};
