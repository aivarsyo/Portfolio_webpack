import "../scss/style.scss";
import { gsap } from "gsap";
import "@lottiefiles/lottie-player";
import Glide from '@glidejs/glide';
import carousel from '@glidejs/glide';
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

window.addEventListener("DOMContentLoaded", start);

/* // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`); */

function start() {
    if (document.querySelector("body").dataset.title === "Home") {
        startHome();
    } else if (document.querySelector("body").dataset.title === "Works") {
        startWorks();
    } else if (document.querySelector("body").dataset.title === "About") {
        imageAnim();
    } else {
        startWork();
    }
}

const bck_color = document.querySelector("body").style.backgroundColor;
console.log(bck_color);

async function startHome() {

    animateLines();
    animateName(); 
}

function animateLines() {
    gsap.set("#upLines", {
        x: -220
    })

    gsap.set("#downLines", {
        x: 240
    })

    gsap.to("#upLines, #downLines", 2, {
        x: 0
    })

}

function animateName() {
    gsap.to("#homeContainer > p:nth-child(2)", 1, {
        text: {
            value: "艾瓦斯",
            delimiter: ""
        },
        ease: "none",
        delay: 2
    })
    gsap.to("#homeContainer > p:nth-child(2)", 1, {
        text: {
            value: "Айварс",
            delimiter: ""
        },
        ease: "none",
        delay: 4
    })
    gsap.to("#homeContainer > p:nth-child(2)", 1, {
        text: {
            value: "أفرس",
            delimiter: ""
        },
        ease: "none",
        delay: 6
    })
    gsap.to("#homeContainer > p:nth-child(2)", 1, {
        text: {
            value: "Aivars",
            delimiter: ""
        },
        ease: "none",
        delay: 8,
        onComplete: function () {
            animateName();
        }
    })
}

async function startWorks() {
    fetch('http://localhost:8888/Portfolio_webpack/wp-json/wp/v2/pages/13')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            slideMount(data);
        });

}

function slideMount(data) {
    const config = {
        type: carousel,
        perView: 1
    }

    var glide = new Glide('.glide', config);

    data.acf.all_my_works.forEach(checkSlide);

    function checkSlide(data) {
        glide.on('run', function () {
            var currentIndex = glide.index;
                if (data.button_id == currentIndex) {
                document.querySelector("#worksContainer").style.background = data.background_color;
            }
        })
    }

    glide.mount();
}

async function startWork() {
    animateButton();
}

function animateButton() {
    gsap.set("#buttonLines", {
        x: -75
    })

    gsap.to("#buttonLines > line:nth-child(1)", 2, {
        x: 80,
        repeat: -1
    })

    gsap.to("#buttonLines > line:nth-child(2)", 2, {
        x: 40,
        repeat: -1
    })

    gsap.to("#buttonLines > line:nth-child(3)", 2, {
        x: 120,
        repeat: -1
    })
}

function imageAnim(){

    intro();

    function intro(){

        gsap.from(".image_of_myself_2", 4, {
            xPercent: -100,
            delay:2
        })
    
        gsap.to(".image_of_myself_3", 4, {
            xPercent: 100,
            delay: 2
        })

        .then(middle)

    }

    function middle(){

        gsap.to(".image_of_myself_2", 4, {
            yPercent: -100,
            delay: 2
        })

        gsap.from(".image_of_myself", 4, {
            yPercent: 100,
            delay: 2
        })

        .then(conclusion)

    }

    function conclusion(){

        const tl = gsap.timeline();

        tl.fromTo(".image_of_myself_2", 4, {
            xPercent: -100,
            yPercent: 0
        }, {
            xPercent: 0,
            delay: 2
        })

        tl.fromTo(".image_of_myself_3", 4, {
            xPercent: 0,
            yPercent: 100
        }, {
            yPercent: 0,
            delay: 2,
            onComplete: function(){
                intro();
            }
        })

        return tl;
    }

}
