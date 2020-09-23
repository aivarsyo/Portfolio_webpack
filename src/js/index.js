import "../scss/style.scss";
import { gsap } from "gsap";
import "@lottiefiles/lottie-player";
import Glide from '@glidejs/glide';
import carousel from '@glidejs/glide';
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

window.addEventListener("DOMContentLoaded", start);

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

const urlParams = new URLSearchParams(window.location.search);
const work = urlParams.get("work");

function start() {
    if (document.querySelector("body").dataset.title === "Home") {
        startHome();
    } else if (document.querySelector("body").dataset.title === "Works") {
        startWorks();
    } else if (work) {
        startWork();
    } else if (document.querySelector("body").dataset.title === "About") {
        console.log("about");
    }
}

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
    
            slideMount();

}

function slideMount() {
    const config = {
        type: carousel,
        perView: 1
    }

    var glide = new Glide('.glide', config);

    /* data.forEach(checkSlide);

    function checkSlide(data) {
        glide.on('run', function () {
            var currentIndex = glide.index;

            if (data.id == currentIndex) {
                document.querySelector("#worksContainer").style.background = data.bodyBck;
            }
        })
    } */

    glide.mount();
}

function importSlideData(data) {
    const li = document.createElement("li");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const lottie = document.createElement("lottie-player");
    const workTitle = document.createElement("p");
    const a = document.createElement("a");

    li.classList.add("glide__slide");
    document.querySelector(".glide__slides").appendChild(li);

    li.appendChild(svg);
    svg.appendChild(circle);

    if (window.innerWidth < 680) {
        circle.setAttribute("r", "35vw");
    }
    else {
        circle.setAttribute("r", "250px");
    }

    circle.setAttribute("cx", "50%");
    circle.setAttribute("cy", "50%");
    circle.setAttribute("fill", data.circleFill);

    lottie.setAttribute("src", data.lottieSrc);
    lottie.setAttribute("background", "transparent");
    lottie.setAttribute("speed", "1");
    lottie.setAttribute("loop", "");
    lottie.setAttribute("autoplay", "");
    li.appendChild(lottie);

    li.appendChild(a);
    a.href = "work.html?work=" + data.aHref;
    a.appendChild(workTitle);
    workTitle.innerHTML = data.workTitle;

}

async function startWork() {
    let response = await fetch("assets/svg/button.svg");

    let mySvgData = await response.text();

    document.querySelector("#buttonSvg").innerHTML = mySvgData;

    fetch('json/projectInfo.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            data.forEach(showProject);
        });

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

function showProject(data) {

    if (data.name == work) {
        document.querySelector("#descOfWork > p:nth-child(1)").textContent = data.title;
        document.querySelector("#descOfWork > p:nth-child(1)").style.color = data.titleColor;
        document.querySelector("#underPart > img").src = "assets/images/" + data.name + ".png";
        document.querySelector("#descOfWork > p:nth-child(4)").textContent = data.idea;
        document.querySelector("#descOfWork > p:nth-child(5)").textContent = data.result;
        document.querySelector("#buttonSvg").href = data.buttonLink;
    }
}





