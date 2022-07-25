TweenMax.from(".logo", 2, {
    opacity: 0,
    y:-20,
    ease: Expo.easeInOut
});
TweenMax.to(".logo", 2, {
    opacity: 1,
    y:0,
    ease: Expo.easeInOut
});
TweenMax.staggerFrom(".menu ul li", 2, {
    opacity: 0,
    y:-20,
    
    ease: Power3.easeInOut
    
}, 0.10);
TweenMax.staggerFrom(".para", 2, {
    delay:1,
    opacity: 0,
    y:-20,
    
    ease: Power3.easeInOut
    
}, 0.10);
TweenMax.staggerFrom(".btn", 2, {
    delay:1.2,
    opacity: 0,
    y:-20,
    
    ease: Power3.easeInOut
    
}, 0.10);


TweenMax.from(".product img", 2, {
    delay: 2,
    
    
    scale: 0,
    ease: Power3.easeInOut
});
TweenMax.to(".product img", 2, {
    delay:2,
    
    
    scale: 1,
    ease: Power3.easeInOut
});