import React, { useState } from "react";

function QuestionsTable({ handleUpdation }) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const questionsFromLocal =
    JSON.parse(localStorage.getItem("questions")) || [];

  const handleDeletion = (id) => {
    const tempQna = questionsFromLocal.filter((qna) => qna.id != id);
    localStorage.setItem("questions", JSON.stringify([...tempQna]));
    setIsTaskCompleted(!isTaskCompleted);
    alert("deleted");
  };

  return (
    <div>
      <h1>All Questions</h1>
      <table
        className="table table-hover table-striped table-bordered"
        style={{ width: "80%", margin: "auto" }}
      >
        <thead>
          <tr>
            <th>Question</th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Option 3</th>
            <th>Option 4</th>
            <th>Right Answer</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questionsFromLocal.map((qna) => (
            <tr key={qna.id}>
              <td>{qna.question}</td>
              <td>{qna.option1}</td>
              <td>{qna.option2}</td>
              <td>{qna.option3}</td>
              <td>{qna.option4}</td>
              <td>{qna.rightAns}</td>
              <td>
                <img src={qna.image} width={100} height={100} />
              </td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() =>
                    handleUpdation(
                      qna.id,
                      qna.question,
                      qna.option1,
                      qna.option2,
                      qna.option3,
                      qna.option4,
                      qna.rightAns,
                      qna.image
                    )
                  }
                >
                  update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeletion(qna.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuestionsTable;