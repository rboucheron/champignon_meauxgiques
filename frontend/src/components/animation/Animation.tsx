import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import Plongeur from '../../assets/plongeur.png'
import BigPoisson from '../../assets/bigPoisson.png'
import SmallPoisson from '../../assets/smallPoisson.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/dist/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/dist/EasePack";


export const AnimationPoissonGauche = () => {

    gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin,MotionPathPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);


    useGSAP(() => {
        gsap.to('.poissonGauche', { 
            x: -250,
            scrollTrigger:{
                // toggleActions:"restart pause reverse pause",
                start:"top center",
                end: "bottom 150px",
                trigger: '.poissonGauche',
                markers:true,
                scrub:2
            }
        });
    });

    return (
        <img src={BigPoisson} id='bigPoisson' className='poissonGauche' style={{ position: 'absolute', top: '62rem', left: '14rem', height: '150px' }} alt="" />
    )
}
export const AnimationPoissonDroite = () => {

    gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin,MotionPathPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);


    useGSAP(() => {
        gsap.to('.poissonDroite', { 
            x:250,
            scrollTrigger:{
                // toggleActions:"restart pause reverse pause",
                start:"top center",
                end: "bottom 150px",
                trigger: '.poissonDroite',
                markers:true,
                scrub:2
            }
        });
    });

    return (
        <>
            <img src={SmallPoisson} id='smallPoisson' className='poissonDroite' style={{ position: 'absolute', right: '380px' }} alt="" />
            <img src={SmallPoisson} className='poissonDroite' style={{ position: 'absolute', top: '75rem', right: '18rem' }} alt="" />
        </>
    )
}
