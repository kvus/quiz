const Result = ({ score, totalQuestions, restartQuiz, reviewQuiz }) => {
  return (
    <div>
      <h2>Kết quả</h2>
      <p className="result">
        Bạn đã trả lời đúng {score}/{totalQuestions} câu hỏi.
      </p>
      <div className="resultButtonsContainer">
        <button className="result-button" onClick={reviewQuiz}>
          Xem lại
        </button>
        <button className="result-button" onClick={restartQuiz}>
          Làm lại
        </button>
      </div>
    </div>
  );
};

export default Result;
