import { QuizProps } from "interface/components";
import { Questions_answers } from "../../interface/store";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Header from "src/components/header";
import Button from "../../../src/components/Button";
import { RootState } from "store";
import { QuizActions } from "../../store/Quiz";

export const Quiz: React.FC<QuizProps> = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const { Quiz, Quizes } = useSelector((state: RootState) => state.Quiz);
  React.useEffect(() => {
    let index = Quizes.findIndex(
      (i: any) => i.id === parseInt(props?.match?.params?.id)
    );
    let Quiz = Quizes[index];
    dispatch(QuizActions.setQuiz(Quiz));
  }, [dispatch, props?.match?.params?.id]);
  return (
    <div>
      <Header title={Quiz?.title} />
      <h1>{Quiz?.description}</h1>
      {Quiz?.questions_answers?.length > 0 &&
        Quiz?.questions_answers?.map((item: Questions_answers, i: number) => (
          <div key={i}>
            <h5>Question: {item?.text}</h5>
            {item?.answers?.map((answer, index) => (
              <div key={index}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={answer.text}
                    id="exampleRadios1"
                    value="option1"
                    checked={answer.is_true === true ? true : false}
                    onChange={() => null}
                    disabled={answer.is_true === true ? false : true}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    {answer.text}
                  </label>
                </div>
              </div>
            ))}
          </div>
        ))}
      <div className="row justify-content-center">
        <div className="col-sm-2">
          <Button
            title="Edit Quiz"
            link={`/editQuiz/${Quiz?.id}`}
            className="AddQuizBtn btn"
          />
        </div>
      </div>
    </div>
  );
};
