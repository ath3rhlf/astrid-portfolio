/*=========================================
    PORTFOLIO JAVASCRIPT
=========================================*/

/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* ===========================
   STICKY NAVBAR
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("sticky");

    }else{

        navbar.classList.remove("sticky");

    }

});


/* ===========================
   ACTIVE MENU
=========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


/* ===========================
   TYPING EFFECT
=========================== */

const typingElement = document.querySelector(".typing");

const words = [

    "Graphic Designer",

    "UI / UX Designer",

    "Software Developer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingAnimation(){

    if(!typingElement) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typingAnimation,1500);

            return;

        }

    }else{

        typingElement.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingAnimation,deleting ? 60 : 120);

}

typingAnimation();


/* ===========================
   SCROLL REVEAL
=========================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>{

    observer.observe(el);

});


/* ===========================
   LOADER
=========================== */

window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");

    if(loader){

        loader.classList.add("hidden");

    }

});


/* ===========================
   BACK TO TOP
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ===========================
   COUNTER
=========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText = "0";

    const updateCounter = ()=>{

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 100;

        if(c < target){

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    }

    updateCounter();

});


/* ===========================
   SKILL BAR
=========================== */

const progressBars = document.querySelectorAll(".progress span");

window.addEventListener("load",()=>{

    progressBars.forEach(bar=>{

        const value = bar.dataset.width;

        bar.style.width = value;

    });

});


/* ===========================
   LIGHTBOX
=========================== */

const certificateImages = document.querySelectorAll(".certificate-card img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox img");

certificateImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImage.src=image.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});


/* ===========================
   DARK MODE
=========================== */

const darkButton = document.getElementById("darkMode");

if(darkButton){

    darkButton.addEventListener("click",()=>{

        document.body.classList.toggle("light");

    });

}


/* ===========================
   PARALLAX HERO
=========================== */

window.addEventListener("scroll",()=>{

    const heroImage = document.querySelector(".home-image");

    let value = window.scrollY;

    if(heroImage){

        heroImage.style.transform =
        "translateY("+ value * 0.15 +"px)";
    }

});


/* ===========================
   RIPPLE BUTTON
=========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(
            button.clientWidth,
            button.clientHeight
        );

        circle.style.width=
        circle.style.height=
        diameter+"px";

        circle.style.left=
        e.clientX-button.offsetLeft-diameter/2+"px";

        circle.style.top=
        e.clientY-button.offsetTop-diameter/2+"px";

        circle.classList.add("ripple");

        const ripple=
        button.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        button.appendChild(circle);

    });

});