import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/dist/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/dist/EasePack";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin,MotionPathPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);



useGSAP(() => {
    gsap.to('#hippocampeGauche', { 
        x: -200,
        scrollTrigger:{
            // toggleActions:"restart pause reverse pause",
            start:"top center",
            end: "bottom 150px",
            trigger: '.chat',
            markers:true,
            scrub:2
        }
    });



});

