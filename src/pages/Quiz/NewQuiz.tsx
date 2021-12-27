import { QuizInfoProps, QuizQuestionsProps } from "../../interface/components";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "src/components/header";
import Input from "src/components/Input";
import TextArea from "src/components/TextArea";
import Quiz, { QuizActions, QuizState } from "../../store/Quiz";
import { Answer, Questions_answers } from "../../interface/store";
import QuestionCard from "src/components/QuestionCard";
import { RootState } from "store";
import { Link } from "react-router-dom";

export const NewQuiz: React.FC = () => {
  const [slide, setslide] = React.useState(0);
  const dispatch = useDispatch();
  const { newQuiz, Question, Answer } = useSelector(
    (state: RootState) => state.Quiz
  );
  const onHandleChange = (e: any) => {
    dispatch(
      QuizActions.editNewQuiz({ element: e.target.name, data: e.target.value })
    );
  };
  const onEditQuestion = (e: any) => {
    dispatch(
      QuizActions.editQuestion({ element: e.target.name, data: e.target.value })
    );
  };
  const onAddQuestion = (Question: Questions_answers) => {
    let Questions = [...newQuiz?.questions_answers];
    if (Questions[0].id === "") Questions = [];
    Questions.push(Question);
    dispatch(
      QuizActions.editNewQuiz({ element: "questions_answers", data: Questions })
    );
    dispatch(QuizActions.initializeQuestion({}));
  };
  const onAddAnswer = (Answer: Answer) => {
    let Answers = [...Question?.answers];
    Answers.push(Answer);
    dispatch(QuizActions.editQuestion({ element: "answers", data: Answers }));
    dispatch(QuizActions.initializeAnswer({}));
  };
  const onEditAnswer = (e: any) => {
    dispatch(
      QuizActions.editAnswer({
        element: e.target.name,
        data: e.target.type === "checkbox" ? e.target.checked : e.target.value,
      })
    );
  };
  const onAddQuiz = (e: any) => {
    console.log("entered");
    dispatch(QuizActions.newToQuizes({}));
    dispatch(QuizActions.initializeQuestion({}));
  };
  return (
    <>
      <Header title="New Quiz" />
      <div className="row justify-content-center">
        <QuizInfo
          setComplete={setslide}
          onChnage={onHandleChange}
          Quiz={newQuiz}
          completed={slide === 0 ? false : true}
        />
        <QuizQustions
          Question={Question}
          Answer={Answer}
          setComplete={setslide}
          onAddAnswer={onAddAnswer}
          onAddQuestion={onAddQuestion}
          onEditAnswer={onEditAnswer}
          onEditQuestion={onEditQuestion}
          onAddQuiz={onAddQuiz}
          completed={slide === 1 ? false : true}
        />
        <div className="col-md-4 mt-5 m-1 p-1">
          <div className="col">
            {newQuiz?.questions_answers?.map((item) => (
              <QuestionCard Question={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
const QuizInfo: React.FC<QuizInfoProps> = (props) => {
  if (props.completed) return null;
  return (
    <form className="col-6 mt-5">
      <Input
        name="title"
        type="text"
        title="Quiz Title"
        onChange={props.onChnage}
        small=""
        value={props?.Quiz?.title}
      />
      <Input
        name="url"
        type="text"
        title="Quiz Video"
        onChange={props.onChnage}
        small=""
        value={props?.Quiz?.url}
      />
      <TextArea
        name="description"
        title="Description"
        onChange={props.onChnage}
        value={props?.Quiz?.description}
      />
      <button
        className="btn btn-danger mt-2 w-100"
        onClick={() => props.setComplete(1)}
      >
        Next
      </button>
    </form>
  );
};
const QuizQustions: React.FC<QuizQuestionsProps> = (props) => {
  if (props.completed) return null;
  return (
    <>
      <form className="col-sm-6 mt-5 p-5">
        <Input
          name="text"
          type="text"
          title="Question"
          onChange={(e) => props.onEditQuestion(e)}
          small=""
          value={props?.Question?.text}
        />
        <div className="row justify-content-center align-items-center">
          <div className="col-8">
            <Input
              name="text"
              type="text"
              title="Answer"
              onChange={(e) => props.onEditAnswer(e)}
              small=""
              value={props?.Answer?.text}
            />
          </div>
          <div className="col pt-3 mt-3">
            <div className="row">
              <div className="col-8 pt-2">
                <p style={{ fontSize: 12 }}>Is True?</p>
              </div>
              <div className="col-4 pt-1">
                <input
                  type="checkbox"
                  name="is_true"
                  checked={props?.Answer?.is_true}
                  onChange={(e) => props.onEditAnswer(e)}
                />
              </div>
            </div>
          </div>
          <div className="col pt-3 mt-3">
            <i
              onClick={() => props.onAddAnswer(props?.Answer)}
              className="fas fa-plus-circle"
              style={{ cursor: "pointer", color: "#ff0f39", fontSize: 22 }}
              color="#ff0f39"
            ></i>
          </div>
        </div>
        <div className="row justify-content-center w-100 align-items-center">
          <button
            type="button"
            className="btn btn-danger mt-2 w-100 col m-2"
            onClick={() => {
              props.setComplete(1);
              props.onAddQuestion(props.Question);
            }}
          >
            add Question
          </button>
        </div>
        <div className="row">
          <button
            className="btn btn-warning mt-2 w-100 col m-2"
            onClick={() => props.setComplete(0)}
          >
            Back
          </button>
          <Link
            className="btn btn-danger mt-2 w-100 col m-2"
            onClick={() => props.onAddQuiz({})}
            to="/Quizes"
          >
            Submit
          </Link>
        </div>
        <QuestionCard Question={props.Question} />
      </form>
    </>
  );
};
