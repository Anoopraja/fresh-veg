gsap.from("nav", {
    y: -10,
    opacity: 0,
    delay: 0,
    duration: 1,
    // stagger:0.5
})
gsap.from(".time-box, .product-box", {
    y: 50,
    opacity: 0,
    delay: 0,
    duration: 1,
    // stagger:0.5
    
})
gsap.from(".hero-right img", {
    y: 50,
    opacity: 0,
    delay: 0,
    duration: 1,
    // stagger:0.5
    
})

gsap.from(".hero-info h4, .hero-info h2, .hero-info p, .hero-info button", {
    y: 50,
    opacity: 0,
    delay: 0,
    duration: 1,
    stagger: 0.1
})

gsap.from(".cus-box h2,.cus-box h6", {
    y: 30,
    // scale:0,
    delay: 0,
    duration: 0.8,
    stagger: 0.1,
    scrollTrigger:".cus-box h2,.cus .cus-box h6"
})
gsap.from(".veg-box .box", {
    y: 50,
    opacity: 0,
    delay: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger:".veg-box .box"
})
gsap.from(".category-box .cat-veg", {
    y: 30,
    opacity: 0,
    delay: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger:".category-box .cat-veg"
})
gsap.from(".why .box", {
    y: 50,
    opacity: 0,
    delay: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger:".why .box"
    
})
gsap.from(".review-box .box", {
    y: 50,
    opacity: 0,
    delay: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger:".review-box .box"
})
gsap.from(".email-box h4,.email-box h2,.email-box p,.email-box .input", {
    y: 50,
    opacity: 0,
    delay: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger:".email-box h4,.email-box h2,.email-box p,.email-box .input"
})

const addButton = document.querySelectorAll(".category-box .cat-veg .inf .inf2");


addButton.forEach(button => {
    button.addEventListener("click", function () {
        button.innerHTML = "✓"


    });
});



