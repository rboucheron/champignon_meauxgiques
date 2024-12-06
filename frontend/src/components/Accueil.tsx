import BullesGauche from '../assets/bullesGauche.svg'
import Hippocampes from '../assets/hippocampes.png'
import CorailGauche from '../assets/CorailGauche.png'
import CorailDroite from '../assets/CorailDroite.png'
import BigPoisson from '../assets/bigPoisson.png'
import SmallPoisson from '../assets/smallPoisson.png'
import SmallBulles from '../assets/smallBulles.png'
import Plongeur from '../assets/plongeur.png'

import HippocampesDroite from '../assets/hippocampesDroite.png'
import CorailCaillou from '../assets/corailDesign.png'
import Homard from '../assets/homard.png'
import PlongeurGauche from '../assets/plongeurGauche.png'

import { AnimationPoissonGauche } from './animation/Animation'
import { AnimationPoissonDroite } from './animation/Animation'


import RocherDroit from '../assets/rocherdroit.png'
import CorailHippo from '../assets/corailHippo.png'
import RockCorail from '../assets/rockCorail.png'
import River from '../assets/river.png'
import PlongeurLateral from '../assets/PlongeurLateral.png'
import ReunionPoisson from '../assets/reunionPoisson.png'
import ReunionDroite from '../assets/reunionDroite.png'
import River2 from '../assets/river2.png'
import VideoRemplacement from '../assets/videoRemplacement.png'
import BullesFinal from '../assets/bulleFinal.png'
import PlongeurFinLateral from '../assets/plongeurFinLateral.png'
import Vegetation from '../assets/vegetation.png'
import Boule from '../assets/boule.png'
import RocheFooter from '../assets/rocheFooter.png'

const Accueil = () => {
    return (
        <section className="accueil">
            <div className="container">
                <div className="title-accueil">
                    <h1 style={{ fontSize: '2.5rem' }}>Bienvenue dans l'eau</h1>
                    <p>Lalala on est dans l'eau</p>
                </div>
                <img src={BullesGauche} id='bullesGauche' style={{ position: 'absolute', left: '60px', top: '350px' }} alt="" />
                < AnimationPoissonGauche />
                <img src={Hippocampes} id='hippocampesDroite' style={{ position: 'absolute', left: '37rem', top: '34rem', height: '60px' }} alt="" />
                <img src={Hippocampes} className='hippocampesDroite' style={{ position: 'absolute', left: '37rem', top: '34rem', height: '60px' }} alt="" />
                <img src={CorailGauche} id='corailGauche' style={{ position: 'absolute', left: '0', top: '27rem', height: '380px' }} alt="" />
                <img src={CorailDroite} id='corailDroite' style={{ position: 'absolute', right: '0', top: '29rem' }} alt="" />
                <img src={BigPoisson} id='bigPoisson' style={{ position: 'absolute', top: '62rem', left: '14rem', height: '150px' }} alt="" />
                <img src={SmallPoisson} id='smallPoisson' className="poissonDroite" style={{ position: 'absolute', right: '380px' }} alt="" />
                < AnimationPoissonDroite/>
                <img src={SmallBulles} id='smallBulles' style={{ position: 'absolute', right: '10rem', top: '66rem' }} alt="" />
                < AnimationPoissonDroite/>
                <img src={BigPoisson} id='bigPoisson' className='poissonGauche' style={{ position: 'absolute', top: '62rem', left: '14rem', height: '150px' }} alt="" />
                < AnimationPoissonDroite />
                <img src={SmallBulles} id='smallBulles' style={{ position: 'absolute', right: '10rem', top: '66rem' }} alt="" />
                < AnimationPoissonDroite />
                <img src={Plongeur} style={{ position: 'absolute', right: '60px', top: '90rem' }} alt="" />
                <img src={SmallPoisson} className='poissonDroite' style={{ position: 'absolute', top: '75rem', right: '18rem' }} alt="" />
                <img src={Plongeur} className='plongeur' style={{ position: 'absolute', right: '60px', top: '90rem' }} alt="" />
                <img src={BigPoisson} style={{ position: 'absolute', bottom: '-40rem', width:'11rem', right: '55rem', zIndex: '11'  }} alt="" />
                <img src={BigPoisson} style={{ position: 'absolute', width: '13rem', left: '5rem', bottom: '-55rem'  }} alt="" />
                <img src={SmallPoisson} className='poissonDroite' style={{ position: 'absolute', bottom: '-75rem', right: '8rem' }} alt="" />
                <img src={SmallPoisson} className='poissonDroite' style={{ position: 'absolute', bottom: '-79rem', right: '15rem' }} alt="" />
                <img src={HippocampesDroite} className='hippocampesDroite' style={{ position: 'absolute', bottom: '-66rem', right: '22rem' }} alt="" />
                <img src={CorailCaillou} id='corailCaillou' style={{ position: 'absolute', top: '133rem', right: '0', width: '14rem' }} alt="" />
                <img src={Homard} id='homard' style={{ position: 'absolute', bottom: '-97rem', right: '110px', width: '14rem', zIndex: '11' }} alt="" />
                <img src={PlongeurGauche} className='plongeur' id='plongeurGauche' style={{ position: 'absolute', bottom: '-120rem', left: '34rem' }} alt="" />
                <img src={RocherDroit} id='rocherdroit' style={{ position: 'absolute', width: '40rem', bottom: '-135rem', right: '0', zIndex: '-1'}} alt="" />
                <img src={CorailHippo} id='corailHippo' style={{ position: 'absolute', bottom: '-136rem', width: '20rem', left: '0', zIndex: '11' }} alt="" />
                <img src={RockCorail} id='rockCorail' style={{ position: 'absolute', bottom: '-175rem', width: '40rem', left: '0', zIndex: '11' }} alt="" />
                <img src={Plongeur} className='plongeur' style={{ position: 'absolute', bottom: '-166rem', right: '10rem' }} alt="" />
                <img src={River} id='river' style={{ position: 'absolute', bottom: '-300rem', left: '0', width: '100%' }} alt="" />
                <img src={PlongeurLateral} className='plongeur' id='plongeurLateral' style={{ position: 'absolute', bottom: '-275rem' }} alt="" />
                <img src={ReunionPoisson} id='reunionPoisson' style={{ position: 'absolute', bottom: '-396rem', left: '0' }} alt="" />
                <img src={ReunionDroite} id='reunionDroite' style={{ position: 'absolute', bottom: '-396rem', right: '0', zIndex: '11' }} alt="" />
                <img src={River2} id='river2' style={{ position: 'absolute', bottom: '-520rem', left: '0', width: '100%' }} alt="" />
                <div className="video-container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={VideoRemplacement} id='video' style={{ position:'absolute', bottom: '-560rem', width: '50rem' }} alt="" />
                </div>
                <img src={BullesFinal} id='bulleFinal' style={{ position: 'absolute', bottom: '-575rem', right: '380px' }} alt="" />
                <img src={PlongeurFinLateral} className='plongeur' id='plongeurFinLateral' style={{ position: 'absolute', bottom:'-484rem', right: '12rem' }}></img>
                <img src={PlongeurGauche} style={{ position: 'absolute', bottom: '-615rem', left: '10rem' }} alt="" />
                <img src={Vegetation} style={{ position: 'absolute', bottom: '-720rem', width: '100%', left: '0' }} alt="" />
                <div className="video-container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={VideoRemplacement} style={{ position: 'absolute', bottom: '-760rem', width: '50rem' }} alt="" />
                </div>
                <img src={Boule} style={{ position: 'absolute', bottom: '-880rem', width: '210rem', left: '20rem' }} alt="" />
                <img src={RocheFooter} style={{ position: 'absolute', bottom: '-892rem', left: '0', width: '100%' }} alt="" />







                {/* BULLES */}
                <div className='boiteDiscussion' style={{ bottom: '-36rem', right: '20rem' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
                <div className='boiteDiscussion' id='boite2' style={{ bottom: '-86rem', right: '14rem', zIndex: '10' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
                <div className='boiteDiscussion' id='boite3' style={{ bottom: '-102rem', right: '13rem', zIndex: '10', padding: '1rem 12rem' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
                <div className='boiteDiscussion' id='boite4' style={{ bottom: '-147rem', right: '21rem', zIndex: '10', padding: '1rem 8rem' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
                <div className='boiteDiscussion' id='boite5' style={{ bottom: '-257rem', right: '43rem', zIndex: '10', padding: '1rem 8rem' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
                <div className='boiteDiscussion' id='boite6' style={{ bottom: '-324rem', right: '47rem', zIndex: '10', padding: '1rem 8rem' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
                <div className='boiteDiscussion' id='boite7' style={{ bottom: '-358rem', right: '28rem', zIndex: '10', padding: '2rem 8rem' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
                <div className='boiteDiscussion' id='boite8' style={{ bottom: '-488rem', right: '19rem', zIndex: '10', padding: '1rem 8rem' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
                <div className='boiteDiscussion' id='boite9' style={{ bottom: '-594rem', right: '30rem', zIndex: '10', padding: '1rem 17rem' }}>
                    <p className='textDiscussion'>Discussion</p>
                </div>
            </div>
            {/* < Quizz/> */}
        </section>
    )
}


export default Accueil;