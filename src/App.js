import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h2>Most required questions and answers</h2>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
