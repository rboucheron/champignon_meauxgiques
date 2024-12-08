import BullesGauche from '../assets/bullesGauche.svg'
import Hippocampes from '../assets/hippocampes.png'
import CorailGauche from '../assets/CorailGauche.png'
import CorailDroite from '../assets/CorailDroite.png'
import BigPoisson from '../assets/bigPoisson.png'
import SmallPoisson from '../assets/smallPoisson.png'
import SmallBulles from '../assets/smallBulles.png'
import Plongeur from '../assets/plongeur.png'
import { Animation } from './animation/Animation'
import Quizz from './Quizz'


const Accueil = () => {
    return (
        <section className="accueil">
            <div className="container">
                <div className="title-accueil">
                    <h1 style={{ fontSize: '2.5rem' }}>Bienvenue dans l'eau</h1>
                    <p>Lalala on est dans l'eau</p>
                </div>
                <img src={BullesGauche} id='bullesGauche' style={{ position: 'absolute', left: '60px', top: '350px' }} alt="" />
                < Animation />
                <img src={Hippocampes} id='hippocampesDroite' style={{ position: 'absolute', left: '37rem', top: '34rem', height: '60px' }} alt="" />
                <img src={CorailGauche} id='corailGauche' style={{ position: 'absolute', left: '0', top: '27rem', height: '380px' }} alt="" />
                <img src={CorailDroite} id='corailDroite' style={{ position: 'absolute', right: '0', top: '29rem' }} alt="" />
                <img src={BigPoisson} id='bigPoisson' className='poissonGauche' style={{ position: 'absolute', top: '62rem', left: '14rem', height: '150px' }} alt="" />
                <img src={SmallPoisson} id='smallPoisson' className='poissonDroite' style={{ position: 'absolute', right: '380px' }} alt="" />
                <img src={SmallBulles} id='smallBulles' style={{ position: 'absolute', right: '10rem', top: '66rem' }} alt="" />
                <img src={SmallPoisson} className='poissonDroite' style={{ position: 'absolute', top: '75rem', right: '18rem' }} alt="" />
                <img src={Plongeur} style={{ position: 'absolute', right: '60px', top: '90rem' }} alt="" />
                <div className='boiteDiscussion'>
                    <p className='textDiscussion'>Nous voici tout d'abord à la surface de l'eau. Toutcomme notre peau qui protège nos organes en régulant notre température corporelle, la surface protège les écosystèmes marins sous-jacents et régule les échanges thermiques entre l'atmosphère et l'eau</p>
                </div>
            </div>
            < Quizz/>




        </section>
    )
}


export default Accueil;