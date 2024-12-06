import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Hippocampes from '../../assets/hippocampes.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/dist/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/dist/EasePack";


export const Animation = () => {

    gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin,MotionPathPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);



useGSAP(() => {
    gsap.to('#hippocampesGauche', { 
        x: -200,
        scrollTrigger:{
            // toggleActions:"restart pause reverse pause",
            start:"top center",
            end: "bottom 150px",
            trigger: '#hippocampesGauche',
            markers:true,
            scrub:2
        }
    });



});

return (
    <img src={Hippocampes} id='hippocampesGauche' style={{ position: 'absolute', left: '30rem', top: '35rem' }} alt="" />
)

}

