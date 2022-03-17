import {gsap} from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);

// export const grayHoverTL = new gsap.timeline({paused:true});
//     gsap.to("graylink",{scale:2, duration:0.2});
    
// export const redHoverTL = new gsap.timeline({paused:true});
//     gsap.to("redlink",{scale:2, duration:0.2});

// export const blueHoverTL = new gsap.timeline({paused:true});
//     gsap.to("bluelink",{scale:2, duration:0.2});

// export const violetHoverTL = new gsap.timeline({paused:true});
//     gsap.to("violetlink",{scale:2, duration:0.2});

// export const yellowHoverTL = new gsap.timeline({paused:true});
//     gsap.to("yellowlink",{scale:2, duration:0.2});


let navLinks = gsap.utils.toArray("nav-links");
let navlinkText = ["Gray","Red","Blue","Violet","Yellow"];
let currentLink = 0;
let textArray = gsap.utils.toArray(".nav-links");

export function NavMouseEvents(){

    navLinks.forEach((link, i) => {
        link.addEventListener("mouseenter", e => {
            e.preventDefault();
            if(i != currentLink){
                gsap.to(textArray[i], {duration: 0.2, scrambleText: navlinkText[i], ease: "none"});
            }
        });
    });
}