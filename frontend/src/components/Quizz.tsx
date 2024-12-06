import { FormEvent, useState } from "react";

const Quizz = () => {
    const data = [
      {
          question: "Quel est le rôle des courants marins dans les océans, comparable à celui de quel système dans le corps humain ?",
          réponse1: "Système immunitaire ",
          réponse2: "Système digestif",
          réponse3: "Système circulatoire",
          réponse4: "Système nerveux",
          vraieréponse: "réponse3",
      },
      {
          question: "Quelle est une conséquence de la perturbation des courants marins sur les écosystèmes océaniques ?",
          réponse1: "Augmentation de la biodiversité",
          réponse2: "Réchauffement des eaux de surface",
          réponse3: "Stabilisation des températures globales",
          réponse4: "Réduction des émissions de CO2",
          vraieréponse: "réponse2",
      },
      {
          question: "Les poumons humains sont comparables à quelle fonction océanique ?",
          réponse1: "Courants marins",
          réponse2: "Photosynthèse océanique",
          réponse3: "Érosion côtière",
          réponse4: "Décomposition marine",
          vraieréponse: "réponse2",
      },
      {
          question: "Quelles sont les conséquences de l'acidification des océans sur la photosynthèse océanique ?",
          réponse1: "Déclin du phytoplancton",
          réponse2: "Augmentation de l'absorption de CO2",
          réponse3: "Stabilisation des niveaux d'oxygène",
          réponse4: "Accélération de la production d'oxygène",
          vraieréponse: "réponse1",
      },
      {
          question: "Quelle partie du corps humain est comparable à la surface de l'océan en termes de protection et régulation thermique ?",
          réponse1: "Coeur",
          réponse2: "Foie",
          réponse3: "Intestins",
          réponse4: "Peau",
          vraieréponse: "réponse4",
      },
      {
          question: "Quels sont les effets potentiels du réchauffement de la surface océanique sur le climat mondial ?",
          réponse1: "Augmentation des tempêtes et ouragans",
          réponse2: "Stabilisation des températures",
          réponse3: "Réduction des précipitations",
          réponse4: "Augmentation de la production d'oxygène",
          vraieréponse: "réponse1",
      },
      {
          question: "Le phytoplancton situé dans les océans capture le CO2 et produit de l'oxygène, quel est l'organe du corps humains qui effectue l'action inverse ?",
          réponse1: "Coeur",
          réponse2: "Intestins",
          réponse3: "Poumons",
          réponse4: "Estomac",
          vraieréponse: "réponse3",
      },
      {
          question: "Quelles sont les conséquences de la dégradation des récifs coralliens sur les écosystèmes côtiers ?",
          réponse1: "Protection accrue des côtes",
          réponse2: "Érosion côtière accrue",
          réponse3: "Amélioration de la biodiversité",
          réponse4: "Stabilisation des niveaux de CO2",
          vraieréponse: "réponse2",
      },
      {
          question: "Comment la circulation des nutriments dans les océans est-elle comparable à une fonction humaine ?",
          réponse1: "Elle protège le corps contre les infections",
          réponse2: "Elle décompose la nourriture pour extraire les nutriments",
          réponse3: "Elle transmet des signaux électriques",
          réponse4: "Elle est similaire à la circulation du sang transportant les nutriments aux cellules",
          vraieréponse: "réponse4",
      },
      {
          question: "Quelle est l'importance de la décomposition marine pour l'écosystème océanique ?",
          réponse1: "Production d'oxygène",
          réponse2: "Filtration de l'eau",
          réponse3: "Communication chimique",
          réponse4: "Recyclage des nutriments",
          vraieréponse: "réponse4",
      },
];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

 
  const isTrue = (e : FormEvent) => {
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
    <div className="form-container"></div>
      <form onSubmit={e => isTrue(e)}>
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
