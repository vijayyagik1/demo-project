import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuestionsTable from "../components/QuestionsTable";

function AdminPage() {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [rightAns, setRightAns] = useState("");
  const [isUpdation, setIsUpdation] = useState(false);
  const [image, setImage] = useState("");
  const [updationId, setUpdationId] = useState("");
  const questionsFromLocal =
    JSON.parse(localStorage.getItem("questions")) || [];

  const handleQuesionsubmission = () => {
    if (
      question != "" &&
      option1 != "" &&
      option2 != "" &&
      option3 != "" &&
      option4 != "" &&
      rightAns != "" &&
      image != ""
    ) {
      if (isUpdation == false) {
        const qna = {
          id: new Date(),
          question: question,
          option1: option1,
          option2: option2,
          option3: option3,
          option4: option4,
          rightAns: rightAns,
          image: image,
        };
        localStorage.setItem(
          "questions",
          JSON.stringify([...questionsFromLocal, qna])
        );
        alert("Submitted The Question");
        setQuestion("");
        setOption1("");
        setOption2("");
        setOption3("");
        setOption4("");
        setRightAns("");
        setImage("");
      } else {
        const qna = questionsFromLocal.map((item) => {
          if (item.id == updationId) {
            return {
              id: item.id,
              question: question,
              option1: option1,
              option2: option2,
              option3: option3,
              option4: option4,
              rightAns: rightAns,
              image: image,
            };
          }
          return item;
        });

        localStorage.setItem("questions", JSON.stringify([...qna]));
        setIsUpdation(false);
        alert("Updated The Question");
      }
    } else {
      alert("Please Fill the Empty field.");
    }
  };

  const handleUpdation = (id, qna, op1, op2, op3, op4, rightAns1, image1) => {
    setUpdationId(id);
    setQuestion(qna);
    setOption1(op1);
    setOption2(op2);
    setOption3(op3);
    setOption4(op4);
    setRightAns(rightAns1);
    setImage(image1);
    setIsUpdation(true);
  };

  // const handleFileInputChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file && file.type.startsWith("image/")) {
  //     setImage(URL.createObjectURL(file));
  //   } else {
  //     alert("Please Select a valid image file");
  //   }
  //   console.log(image);
  // };

  return (
    <div>
      <Link to="/student">Go to student page</Link>
      <div
        className="border"
        style={{
          width: "80%",
          padding: "50px",
          margin: "auto",
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-primary">ADMIN PAGE</h1>

        <input
          className="form-control"
          style={{ width: "40%" }}
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
        />
        <input
          className="form-control m-2"
          style={{ width: "40%" }}
          type="text"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
          placeholder="Option 1"
        />
        <input
          className="form-control m-2"
          style={{ width: "40%" }}
          type="text"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
          placeholder="Option 2"
        />
        <input
          className="form-control m-2"
          style={{ width: "40%" }}
          type="text"
          value={option3}
          onChange={(e) => setOption3(e.target.value)}
          placeholder="Option 3"
        />
        <input
          className="form-control m-2"
          style={{ width: "40%" }}
          type="text"
          value={option4}
          onChange={(e) => setOption4(e.target.value)}
          placeholder="Option 4"
        />
        <input
          className="form-control m-2"
          style={{ width: "40%" }}
          type="text"
          value={rightAns}
          onChange={(e) => setRightAns(e.target.value)}
          placeholder="Right Answer"
        />
        <input
          className="form-control m-2"
          style={{ width: "40%" }}
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter the URL images"
        />

        {/* <input
        className="form-control m-2"
        style={{ width: "40%" }}
        type="file"
        onChange={handleFileInputChange}
        placeholder="Choose Image"
      />
      {image && <img src={image} width={300} height={200} />} */}
        <button className="btn btn-primary" onClick={handleQuesionsubmission}>
          {isUpdation ? "Update" : "Submit"}
        </button>
      </div>
      <div>
        <QuestionsTable handleUpdation={handleUpdation} />
      </div>
    </div>
  );
}

export default AdminPage;