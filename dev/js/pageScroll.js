import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#graysection","#redsection","#bluesection", "#violetsection", "#yellowsection"];

export function scrollPage(index){
    gsap.to(window, {duration: 2, scrollTo:idArray[index]});
}