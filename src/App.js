import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import AdminLogin from "./pages/AdminLogin";
import StudentPage from "./pages/StudentPage";
import AdminPage from "./pages/AdminPage";

function App() {
  const questionsFromLocal =
    JSON.parse(localStorage.getItem("questions")) || [];
  const qna = [
    {
      id: "2023-05-07T14:31:01.902",
      question: "reactqna1",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
    {
      id: "2023-05-07T14:31:",
      question: "reactqna2",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
    {
      id: "2023-05-07T14:31:01.9",
      question: "reactqna3",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
    {
      id: "2023-05-07T14:31:01.",
      question: "reactqna4",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
  ];

  localStorage.setItem("questions", JSON.stringify([...qna]));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;