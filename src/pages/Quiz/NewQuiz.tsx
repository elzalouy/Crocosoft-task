import * as React from "react";
import Header from "src/components/header";

export const NewQuiz: React.FC = () => {
  return (
    <>
      <Header title="New Quiz" />
      <div className="row justify-content-center">
        <form className="col-6 mt-5">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Quiz Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="title"
              placeholder="Quiz Title"
            />
            <small id="title" className="form-text text-muted">
              You Should have a quiz title to display
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="description">description</label>
            <input
              type="textarea"
              className="form-control"
              id="description"
              placeholder="Description"
              multiple={true}
            />
          </div>
          <button className="btn btn-primary mt-2 w-100">Next</button>
        </form>
      </div>
    </>
  );
};
