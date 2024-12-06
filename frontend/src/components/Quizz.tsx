import { useState } from "react";

const Quizz = () => {
  const [data, setData] = useState([
    {
      question:
        "Quel est le rôle des courants marins dans les océans, comparable à celui de quel système dans le corps humain ?",
      réponse1: "Système immunitaire ",
      réponse2: "Système digestif",
      réponse3: "Système circulatoire",
      réponse4: "Système nerveux",
      vraieréponse: "réponse3",
    },
    {
      question:
        "Quelle est une conséquence de la perturbation des courants marins sur les écosystèmes océaniques ?",
      réponse1: "Augmentation de la biodiversité",
      réponse2: "Réchauffement des eaux de surface",
      réponse3: "Stabilisation des températures globales",
      réponse4: "Réduction des émissions de CO2",
      vraieréponse: "réponse2",
    },

  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

 
  const isTrue = (e) => {
    e.preventDefault();
  

    setTimeout(() => {
      setFeedback("");
      setSelectedAnswer(""); 
      setCurrentQuestionIndex((prevIndex) =>
        prevIndex + 1 < data.length ? prevIndex + 1 : 0 
      );
    }, 10); 
  };

  const currentQuestion = data[currentQuestionIndex];

  return (
    <>
      <form onSubmit={isTrue}>
        <ul>
          <div className="question">
            <h3>{currentQuestion.question}</h3>
          </div>
          <div className="response">
            <li>
              <label htmlFor="reponse1">
                <input
                  type="radio"
                  id="reponse1"
                  name="reponse"
                  value="réponse1"
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  checked={selectedAnswer === "réponse1"}
                />
                {currentQuestion.réponse1}
              </label>
            </li>
            <li>
              <label htmlFor="reponse2">
                <input
                  type="radio"
                  id="reponse2"
                  name="reponse"
                  value="réponse2"
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  checked={selectedAnswer === "réponse2"}
                />
                {currentQuestion.réponse2}
              </label>
            </li>
            <li>
              <label htmlFor="reponse3">
                <input
                  type="radio"
                  id="reponse3"
                  name="reponse"
                  value="réponse3"
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  checked={selectedAnswer === "réponse3"}
                />
                {currentQuestion.réponse3}
              </label>
            </li>
            <li>
              <label htmlFor="reponse4">
                <input
                  type="radio"
                  id="reponse4"
                  name="reponse"
                  value="réponse4"
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  checked={selectedAnswer === "réponse4"}
                />
                {currentQuestion.réponse4}
              </label>
            </li>
            <input type="submit" value="Valider" />
          </div>
        </ul>
      </form>
      {feedback && <p>{feedback}</p>}
    </>
  );
};

export default Quizz;
