import logo from "./logo.png";
import { Button } from "reactstrap";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import CreateSurvey from "./components/create-survey";
import TakeSurvey from "./components/take-survey";
import ConfirmSurvey from "./components/confirm-survey";
import { useDispatch } from "react-redux";
import { surveySlice, createSurvey } from "./store/surveySlice";
import { unwrapResult } from "@reduxjs/toolkit";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectToNewSurvey = () => {
    
 
    dispatch(createSurvey())
      .then(unwrapResult)
      .then((newSurveyId) => history.push("/create/" + newSurveyId));

    
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {}
      <Switch>
        <Route path="/create/:surveyId">
          <CreateSurvey />
        </Route>
        <Route path="/confirm/:surveyId">
          <ConfirmSurvey />
        </Route>
        <Route path="/take">
          <TakeSurvey />
        </Route>
        <Route path="/">
          <Button className="Main-btn" onClick={redirectToNewSurvey}>
            Create Survey
          </Button>
          <Link to="/take">
            <Button className="Main-btn">Take Survey</Button>
          </Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
