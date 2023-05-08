import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

function StudentPage() {
  const questionsFromLocal =
    JSON.parse(localStorage.getItem("questions")) || [];
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const [question, setQuestion] = useState([questionsFromLocal[index]]);
  const [allAnswer, setAllAnswer] = useState([]);
  const count = useRef(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [score, setScore] = useState(0);

  const handleStartExam = () => {
    setIsSubmit(false);
    count.current = 0;

    setQuestion([questionsFromLocal[index]]);
    setIndex(0);
  };

  const handleSubmit = (qnaId, submittedAns) => {
    setAllAnswer([...allAnswer, { qnaId, submittedAns }]);
    setQuestion([questionsFromLocal[index]]);
    count.current += 1;
    for (let j = 0; j < questionsFromLocal.length; j++) {
      if (qnaId == questionsFromLocal[j].id) {
        if (submittedAns == questionsFromLocal[j].rightAns) {
          setScore(score + 1);
          //   console.log("score increased", questionsFromLocal[j].rightAns);
        } else {
          setScore(score);
        }
      }
    }
    setIndex(index + 1);
    alert(" Go to Next Question");
    if (count.current <= 2) {
    } else {
      setIsSubmit(true);
    }
  };
  //   const handleCheckAnswer = () => {
  //     for (let i = 0; i < allAnswer.length; i++) {
  //       for (let j = 0; j < questionsFromLocal.length; j++) {
  //         if (allAnswer[i].qnaId == questionsFromLocal[j].id) {
  //           if (allAnswer[i].submittedAns == questionsFromLocal[j].rightAns) {
  //             setScore(score + 1);
  //             console.log("score increased");
  //           }
  //         }
  //       }
  //     }

  //     alert("Submitted", score);
  //   };
  //   console.log(allAnswer, score);
  return (
    <div>
      <h1 className="">STUDENT PAGE</h1>
      <button className="btn btn-info me-5" onClick={() => navigate("/admin")}>
        ADMIN
      </button>
      <button className="btn btn-success" onClick={handleStartExam}>
        Start Exam
      </button>
      <h3 className="text-danger">Score: {score}</h3>
      {!isSubmit && (
        <div>
          {question.map((qna) => (
            <div key={qna.id}>
              <Question qna={qna} handleSubmit={handleSubmit} />
            </div>
          ))}
          {/* {isSubmit && <button onClick={handleCheckAnswer}>Submit</button>} */}
          {isSubmit && <h1>Exam Completed</h1>}
        </div>
      )}
    </div>
  );
}

export default StudentPage;