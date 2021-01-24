import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { surveySlice } from "../store/surveySlice";

function ConfirmSurvey() {
  const { surveyId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const survey = useSelector((globalStore) =>
    globalStore.surveys.find((s) => s.surveyId === surveyId)
  );

  const confirmAndPublishSurvey = () => {
    dispatch(surveySlice.actions.markPublished({ surveyId }));
    history.push("/");
  };

  return (
    <>
      {survey.questions.map((q) => (
        <div className="question-answer">
          <h4>{q.question}</h4>
          {q.type === "single" ? (
          <div className="radio-btn">
              <input className="input-btn" type="radio" for="choice1" name="choice" />
              <label>{q.options[0]}</label>
              <input className="input-btn2" type="radio" for="choice2" name="choice" />
              <label>{q.options[1]}</label>
              
            </div>
          ) : (
            <div className="checkbox-btn">
              <div>
             <input className="input-btn" type="checkbox" />
              <label>{q.options[0]}</label>
              </div>

              <div>
              <input className="input-btn" type="checkbox" />
              <label>{q.options[1]}</label>
              </div>
               <div>
              <input className="input-btn" type="checkbox" />
              <label> {q.options[2]}</label>
              </div>
              <div>
              <input className="input-btn" type="checkbox" />
              <label> {q.options[3]}</label>
              </div>
            </div>
          )}
          <hr/>
        </div>
      ))}
      <Button className="Main-btn" onClick={confirmAndPublishSurvey}>
        Confirm Survey
      </Button>
    </>
  );
}

export default ConfirmSurvey;