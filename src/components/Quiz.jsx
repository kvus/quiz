import { useState, useEffect } from "react";
import Result from "./Result";
const quizData = [
  {
    question: "Biến nào sau đây là hợp lệ trong JavaScript?",
    options: ["1variable", "_variable", "var-name", "var name"],
    answer: "_variable",
  },
  {
    question:
      "Trong JavaScript, kiểu dữ liệu nào sau đây là kiểu dữ liệu nguyên thủy (primitive)?",
    options: ["object", "array", "string", "function"],
    answer: "string",
  },
  {
    question:
      "Thuật toán sắp xếp nào sau đây có độ phức tạp trung bình là O(n log n)?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Linear Sort"],
    answer: "Merge Sort",
  },
  {
    question: "Kết quả của `typeof null` trong JavaScript là gì?",
    options: ["'null'", "'undefined'", "'object'", "'number'"],
    answer: "'object'",
  },
  {
    question: "Bộ nhớ Stack dùng để làm gì?",
    options: [
      "Lưu trữ dữ liệu dạng hàng đợi",
      "Lưu trữ các lời gọi hàm (function calls)",
      "Lưu ảnh",
      "Lưu video",
    ],
    answer: "Lưu trữ các lời gọi hàm (function calls)",
  },
  {
    question: "Toán tử nào so sánh nghiêm ngặt giá trị và kiểu dữ liệu?",
    options: ["==", "===", "!=", "="],
    answer: "===",
  },
  {
    question: "JSON là viết tắt của gì?",
    options: [
      "Java Syntax Object Notation",
      "JavaScript Object Notation",
      "JavaScript Online Network",
      "Java Server Object Notation",
    ],
    answer: "JavaScript Object Notation",
  },
  {
    question:
      "Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Array", "Linked List"],
    answer: "Queue",
  },
  {
    question: "Câu lệnh nào in ra nội dung trong console trình duyệt?",
    options: ["print()", "console.log()", "echo()", "show()"],
    answer: "console.log()",
  },
  {
    question:
      "Khi bạn viết `let x;` trong JavaScript, giá trị ban đầu của x là gì?",
    options: ["null", "0", "undefined", "false"],
    answer: "undefined",
  },
  {
    question: "HTML là gì?",
    options: [
      "Ngôn ngữ lập trình để xử lý logic",
      "Ngôn ngữ đánh dấu để tạo cấu trúc website",
      "Framework của JavaScript",
      "Trình duyệt web",
    ],
    answer: "Ngôn ngữ đánh dấu để tạo cấu trúc website",
  },
  {
    question: "Trong thuật toán, Big O dùng để đo gì?",
    options: [
      "Tốc độ mạng",
      "Thời gian load ảnh",
      "Độ phức tạp của thuật toán",
      "Dung lượng RAM máy tính",
    ],
    answer: "Độ phức tạp của thuật toán",
  },
];
const Quiz = () => {
  const [optionSelected, setOptionSelected] = useState("");
  const [userAnswer, setUserAnswer] = useState(
    Array.from({ length: quizData.length }),
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [isQuizEnded, setIsQuizEnded] = useState(false);

  const handleSelectOption = (option, index) => {
    setOptionSelected(option);
    const newUserAnswer = [...userAnswer];
    newUserAnswer[currentQuestion] = index;
    setUserAnswer(newUserAnswer);
  };

  const goNext = () => {
    if (currentQuestion < quizData.length - 1)
      setCurrentQuestion((prev) => prev + 1);
    else setIsQuizEnded(true);
  };

  const goBack = () => {
    if (currentQuestion > 0) setCurrentQuestion((prev) => prev - 1);
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setUserAnswer(Array.from({ length: quizData.length }));
    setIsQuizEnded(false);
    setOptionSelected("");
  };

  const reviewQuiz = () => {
    setIsQuizEnded(false);
    setCurrentQuestion(0);
  };

  useEffect(() => {
    const answer = Number(userAnswer[currentQuestion]);
    const pastOptionSelected = quizData[currentQuestion].options[answer];

    if (answer !== undefined) setOptionSelected(pastOptionSelected);
    else setOptionSelected("");
  }, [currentQuestion, userAnswer]);

  useEffect(() => {
    optionSelected === quizData[currentQuestion].answer &&
      setScore((prev) => prev + 1);
  }, [optionSelected, currentQuestion]);

  if (isQuizEnded) {
    return (
      <Result
        score={score}
        totalQuestions={quizData.length}
        restartQuiz={restartQuiz}
        reviewQuiz={reviewQuiz}
      />
    );
  }
  return (
    <div>
      <h2>Câu {currentQuestion + 1}</h2>

      <p className="question">{quizData[currentQuestion].question}</p>

      {quizData[currentQuestion].options.map((option, index) => (
        <button
          className={`option ${optionSelected === option ? "selected" : ""}`}
          disabled={!!optionSelected && optionSelected !== option}
          key={option}
          onClick={() => handleSelectOption(option, index)}
        >
          {option}
        </button>
      ))}

      {optionSelected &&
        (optionSelected === quizData[currentQuestion].answer ? (
          <p className="correct-answer">Câu trả lời của bạn chính xác!</p>
        ) : (
          <p className="incorrect-answer">
            Câu trả lời của bạn không chính xác!
          </p>
        ))}

      <div className="nav-buttons">
        <button
          className="prev"
          onClick={goBack}
          disabled={currentQuestion === 0}
        >
          Quay lại
        </button>
        <button className="next" onClick={goNext} disabled={!optionSelected}>
          {currentQuestion === quizData.length - 1
            ? "Hoàn thành quiz"
            : "Kế tiếp"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
