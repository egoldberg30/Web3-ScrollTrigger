import { gsap } from "gsap";
import {burgerTL} from "./burgerAnimation";
import {menuAnimation} from "./mobileMenu";
import {NavMouseEvents} from "./navHover";
// import {grayHoverTL} from "./navHover";
// import {redHoverTL} from "./navHover";
// import {blueHoverTL} from "./navHover";
// import {violetHoverTL} from "./navHover";
// import {yellowHoverTL} from "./navHover";
// import {displayWindowSize} from "./mobileResizing.js"
// import {scrollPage} from "./pageScroll"

var burgerButton = document.querySelector("#hamburger_icon");
let canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        burgerTL.play();
        menuAnimation.play();
        canISeeMenu = true;
    }else{
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }
}

function burgerClose(){
    if(document.documentElement.clientWidth > 1024){
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);


let navButtons = document.querySelectorAll(".nav-links");

for (const button of navButtons){
    button.addEventListener("click", openCloseMenu);
    // button.addEventListener("click", checkScrolling);
    // button.addEventListener("click", textHighlight);
}


function displayNav(){
    if(document.documentElement.clientWidth > 1024){
        gsap.set("#nav-container",{alpha:1});
    }
    else{
        gsap.set("#nav-container",{alpha:0});
    }
}

window.addEventListener("resize", displayNav);
window.addEventListener("load", displayNav);
// window.addEventListener("load", displayNav);
window.addEventListener("resize", burgerClose);



// #graylink.addEventListener("hover", grayHoverTL);


window.addEventListener('load', function() {
    NavMouseEvents();
})








// function checkScrolling(e) {
//     // check to see which button was clicked
//     const indexValue = [].indexOf.call(navButtons, e.target)
//     if (indexValue != -1) {
//         scrollPage(indexValue);
//     }
// }




// // listen to window resize
// window.addEventListener("resize", displayWindowSize);

// // check the window size on load
// window.addEventListener('load', displayWindowSize);



// let canIseeRed = false;

// function textHighlight(){
//     if(canIseeRed === false){
//         gsap.to ("#redlink", {color:black});
//         // gsap.set("#nav-container",{x:0});
//         canIseeRed = true;
//     }else{
//         gsap.to ("#redlink", {color:$red});
//         canIseeRed = false;
//     }
// }