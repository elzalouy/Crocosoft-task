import { QuizCardProps, QuizesProps } from "interface/components";
import { Quiz } from "interface/store";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "src/components/header";
import Card from "src/components/QuizCard";
import { getQuizes } from "../../store/Quiz/actions";

export const Quizes: React.FC<QuizesProps> = (props) => {
  const state = useSelector((state: any) => state.Quiz);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getQuizes());
  }, []);
  return (
    <>
      <Header title="Quizes" />
      <div className="row align-items-center justify-content-center">
        {state?.Quizes?.length > 0 &&
          state?.Quizes.map((item: Quiz, index: number) => (
            <Card
              questions={item?.questions_answers?.length}
              key={index}
              title={item?.title}
              description={item?.description}
              url={item?.url}
              score={item?.score}
            />
          ))}
      </div>
    </>
  );
};
