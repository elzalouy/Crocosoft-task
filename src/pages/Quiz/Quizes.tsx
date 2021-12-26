import { QuizesProps } from "interface/components";
import { Quiz } from "interface/store";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "src/components/Button";
import Header from "src/components/header";
import Card from "src/components/QuizCard";
import { getQuizes } from "../../store/Quiz/actions";

export const Quizes: React.FC<QuizesProps> = (props) => {
  const state = useSelector((state: any) => state.Quiz);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getQuizes());
  }, [dispatch]);
  return (
    <>
      <Header title="Quizes" />
      <div className="row align-items-center justify-content-center">
        {state?.Quizes?.length > 0 &&
          state?.Quizes.map((item: Quiz, index: number) => (
            <Card
              id={item.id}
              questions={item?.questions_answers?.length}
              key={index}
              title={item?.title}
              description={item?.description}
              url={item?.url}
              score={item?.score}
            />
          ))}
      </div>
      <div className="row justify-content-center">
        <Button
          title="Add New Quiz"
          link={"/newQuiz"}
          className="AddQuizBtn btn col-sm-2 mt-5"
          children
        />
      </div>
    </>
  );
};
