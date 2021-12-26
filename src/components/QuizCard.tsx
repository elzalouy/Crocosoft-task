import { QuizCardProps } from "interface/components/Quiz";
import * as React from "react";
import "./style.css";

const Card: React.FC<QuizCardProps> = (props) => {
  return (
    <div className="col-sm-2 Card m-2">
      <h1 className="CardTitle mt-3">{props.title}</h1>
      <h2 className="CardDesc mt-3">{props.description}</h2>
      <p className="CardScore mt-3">
        <b>Score : </b> {props.score}
      </p>
      <p className="CardQuestions mt-3">
        <b>No of questions : </b> {props.questions}
      </p>
    </div>
  );
};

export default Card;
