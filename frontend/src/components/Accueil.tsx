import BullesGauche from '../assets/bullesGauche.svg'
import Hippocampes from '../assets/hippocampes.png'
import CorailGauche from '../assets/CorailGauche.png'
import CorailDroite from '../assets/CorailDroite.png'
import BigPoisson from '../assets/bigPoisson.png'
import SmallPoisson from '../assets/smallPoisson.png'
import SmallBulles from '../assets/smallBulles.png'
import Plongeur from '../assets/plongeur.png'
import { Animation } from './animation/Animation'
import HippocampesDroite from '../assets/hippocampesDroite.png'
import CorailCaillou from '../assets/corailDesign.png'
import Homard from '../assets/homard.png'
import GroupeHippocampes from '../assets/groupHippocampes.png'
import PlongeurGauche from '../assets/plongeurGauche.png'


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
                <img src={BigPoisson} style={{ position: 'absolute', bottom: '-40rem', width:'11rem', right: '55rem', zIndex: '11'  }} alt="" />
                <img src={BigPoisson} style={{ position: 'absolute', width: '13rem', left: '5rem', bottom: '-55rem'  }} alt="" />
                <img src={SmallPoisson} className='poissonDroite' style={{ position: 'absolute', bottom: '-75rem', right: '8rem' }} alt="" />
                <img src={SmallPoisson} className='poissonDroite' style={{ position: 'absolute', bottom: '-79rem', right: '15rem' }} alt="" />
                <img src={HippocampesDroite} id='hippocampesDroite' style={{ position: 'absolute', bottom: '-66rem', right: '22rem' }} alt="" />
                <img src={CorailCaillou} id='corailCaillou' style={{ position: 'absolute', top: '133rem', right: '0', width: '14rem' }} alt="" />
                <img src={Homard} id='homard' style={{ position: 'absolute', bottom: '-97rem', right: '110px', width: '14rem', zIndex: '11' }} alt="" />
                <img src={GroupeHippocampes} id='groupeHomard' style={{ position: 'absolute', width: '14rem', bottom: '-147rem', left: '7rem' }} alt="" />
                <img src={PlongeurGauche} id='plongeurGauche' style={{ position: 'absolute', bottom: '-120rem', left: '34rem' }} alt="" />
                




                {/* BULLES */}
                <div className='boiteDiscussion' style={{ bottom: '-36rem', right: '20rem' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
                <div className='boiteDiscussion' id='boite2' style={{ bottom: '-86rem', right: '14rem', zIndex: '10' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
                <div className='boiteDiscussion' id='boite2' style={{ bottom: '-102rem', right: '13rem', zIndex: '10', padding: '1rem 12rem' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
            </div>
        </section>
    )
}

export default Accueil;