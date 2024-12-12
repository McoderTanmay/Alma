// DiscussionForum.js
import React, { useState } from "react";
import ModalForm from "../../components/ModalForm";
import { FaUserCircle, FaClock, FaCommentDots, FaPlus, FaHeart } from "react-icons/fa";
import "./DiscussionForum.css";

const DiscussForum = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      username: "Alice",
      time: "2 hours ago",
      question: "How does React manage state?",
      details: "I'm trying to understand how state works in React. Any insights?",
      answers: [
        { id: 1, text: "React uses hooks like useState to manage state effectively." },
        { id: 2, text: "State in React can be local, shared, or global." },
      ],
      likes: 5,
    },
    {
      id: 2,
      username: "Bob",
      time: "3 hours ago",
      question: "What is the Virtual DOM?",
      details: "Can someone explain the concept of the Virtual DOM?",
      answers: [{ id: 1, text: "The Virtual DOM is a lightweight copy of the real DOM." }],
      likes: 3,
    },
    {
      id: 3,
      username: "Charlie",
      time: "1 day ago",
      question: "How to use useEffect in React?",
      details: "I'm not sure when to use useEffect. Any examples?",
      answers: [
        { id: 1, text: "useEffect is used for side effects, like fetching data." },
        { id: 2, text: "It replaces lifecycle methods like componentDidMount." },
      ],
      likes: 8,
    },
    {
      id: 4,
      username: "Diana",
      time: "5 minutes ago",
      question: "What are React fragments?",
      details: "What is the purpose of using React fragments?",
      answers: [{ id: 1, text: "Fragments let you group elements without adding extra nodes." }],
      likes: 2,
    },
    {
      id: 5,
      username: "Eve",
      time: "4 days ago",
      question: "How to handle forms in React?",
      details: "What are the best practices for handling forms in React?",
      answers: [
        { id: 1, text: "Use controlled components for managing form state." },
        { id: 2, text: "Libraries like Formik or React Hook Form are very helpful." },
      ],
      likes: 6,
    },
  ]);
  

  // Modal toggle
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Add a new question
  const addQuestion = (newQuestion, newDetails) => {
    const newQuestionEntry = {
      id: questions.length + 1,
      username: "You",
      time: "Just now",
      question: newQuestion,
      details: newDetails,
      answers: [], // Ensure answers is always an array
      likes: 0, // Track likes
    };
    setQuestions([newQuestionEntry, ...questions]);
  };

  // Like a question
  const likeQuestion = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, likes: q.likes + 1 } : q
      )
    );
  };
  
  // Add an answer
  const addAnswer = (id, answerText) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              answers: Array.isArray(q.answers)
                ? [...q.answers, { id: q.answers.length + 1, text: answerText }]
                : [{ id: 1, text: answerText }], // Initialize if not an array
            }
          : q
      )
    );
  };
  

  return (
    <div className="discuss-forum">
      <div className="container">
        <div className="header">
          <h1>Questions</h1>
          <div className="categories">
            <span className="category">Most Recent</span>
            <span className="category">Most Upvoted</span>
            <span className="category">Trending</span>
          </div>
          <button className="post-question-button" onClick={toggleModal}>
            <FaPlus style={{ marginRight: "8px" }} /> Post Question
          </button>
        </div>

        <div className="content">
          <div className="question-list">
            {questions.map((q) => (
              <div key={q.id} className="question-card">
                <div className="question-header">
                  <FaUserCircle size={24} style={{ marginRight: "10px" }} />
                  <span className="username">{q.username}</span>
                  <FaClock size={16} style={{ margin: "0 8px" }} />
                  <span className="time">{q.time}</span>
                </div>
                <p className="question-text">{q.question}</p>
                {q.details && <p className="question-details">{q.details}</p>}
                <div className="question-footer">
                  <button
                    className="like-button"
                    onClick={() => likeQuestion(q.id)}
                  >
                    <FaHeart size={16} style={{ marginRight: "5px" }} /> {q.likes} Likes
                  </button>
                  <button
                    className="answer-button"
                    onClick={() => {
                      const answer = prompt("Enter your answer:");
                      if (answer) addAnswer(q.id, answer);
                    }}
                  >
                    Answer
                  </button>
                  <FaCommentDots size={13} style={{ marginLeft: "10px" }} />
                  <span>{q.answers.length} answers</span>
                </div>

                {/* Display answers */}
                {q.answers.map((a) => (
                  <div key={a.id} className="answer-card">
                    <p>{a.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalForm
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        onAddQuestion={addQuestion}
      />
    </div>
  );
};

export default DiscussForum;

