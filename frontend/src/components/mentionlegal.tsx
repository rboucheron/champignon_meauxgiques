import { useState } from "react";

function MentionLegal() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <footer>
            {/* Bouton pour ouvrir la popup */}
            <a
                href="#"
                className="mentionlegal"
                onClick={(e) => {
                    e.preventDefault(); // Empêche la navigation par défaut
                    openPopup();
                }}
                role="button"
            >
                Mentions légales
            </a>

            {/* Affichage conditionnel de la popup */}
            <div className={`popup ${isPopupOpen ? "show" : ""}`}>
                <div className="popup-content">
                    {/* Bouton pour fermer la popup */}
                    <span
                        className="close"
                        onClick={closePopup}
                        role="button"
                        aria-label="Fermer"
                    >
                        &times;
                    </span>
                    <h2>Mentions Légales</h2>
                    <p>
                        {/* Contenu des mentions légales */}
                        Éditeur<br />
                        Le site est conçu au sein de l'IUT de Meaux:<br />
                        Adresse : 17 Rue Jablinot, 77100 Meaux, France<br />
                        Numéro de téléphone : +33 1 64 36 44 15<br />
                        <br />
                        Hébergement du Site<br />
                        Le projet est hébergé par Hostinger :<br />
                        Adresse : PRIUS BERNHARDPLEIN 200, PAYS-BAS<br />
                        Numéro de contact : +1 877 448 4820<br />
                        Email pour la confidentialité : privacy@hostinger.com<br />
                        Site officiel : www.hostinger.com<br /><br />
                        Ce projet a été conçu et développé par:<br />
                        Elias Zerar, Caroline Doung, Tom Murphy, Thomas Vidal,
                        Anthony Stanislas, Yanis Wong, Raphaël Bouchron, étudiants
                        inscrits en BUT Métiers du Multimédia et de l'Internet (MMI)<br />
                        Illustrations et Design : Caroline Doung, Yanis Wong, Malick Thiam
                        <br />
                         Monteur : Eliot Marton
                        <br />  
                        Développement Web : Tom Murphy, Elias Zerar, Raphaël Bouchron, Thomas Vidal<br />
                        <br />
                        Politique de Confidentialité<br />
                        Dans le cadre de ce projet, aucune donnée personnelle ou
                        information sur les utilisateurs n’est collectée ni partagée.
                        Notre approche se fonde uniquement sur l’utilisation de données
                        issues de sources officielles, dans le but de concevoir des
                        graphiques et analyses informatifs. Nous nous engageons à
                        utiliser exclusivement des données provenant de sources
                        externes fiables, telles que celles fournies par l'INJEP, pour
                        la création de contenus à visée pédagogique. Aucune information
                        individuelle ou donnée additionnelle n’est donc ni collectée
                        ni exploitée.<br /><br />
                        Polices utilisées :<br />
                        Jockey One<br />
                        Poppins<br />
                        <br />
                        Collecte de données par Hostinger :
                        Ce site est hébergé sur Hostinger, un service fourni par Hostinger.
                        Hostinger peut collecter certaines données personnelles des visiteurs,
                        telles que l'adresse IP, le type de navigateur, le système d'exploitation,
                        et les interactions avec le site. Ces données sont utilisées par Hostinger
                        pour assurer le fonctionnement du service et améliorer ses performances.
                        <br />
                        Pour plus d'informations sur les pratiques de collecte et d'utilisation
                        des données par Hostinger, veuillez consulter leur Déclaration de confidentialité.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default MentionLegal;
