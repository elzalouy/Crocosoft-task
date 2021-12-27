import { QuestionCardProps } from "interface/components/Quiz";
import * as React from "react";
import Button from "./Button";
import "./style.css";

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  console.log("answer", props.Question.answers);
  if (props.Question.text.length === 0) return null;
  return (
    <div className="col QuestionCard m-2">
      <h1 className="CardTitle mt-3">{props?.Question?.text}</h1>
      {props?.Question?.answers?.length > 0 && (
        <p className="CardScore mt-3">
          <b>Answers</b>
        </p>
      )}
      {props?.Question?.answers?.map((item) => (
        <>
          {item.text.length > 0 && (
            <>
              <p className="CardQuestions mt-3">
                {item.text}
                {item.is_true ? "  true Answer" : "   Wrong"}
              </p>
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default QuestionCard;
