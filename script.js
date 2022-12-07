window.sr = ScrollReveal({reset: true});

sr.reveal('.area-1', { duration: 2000})

sr.reveal('.area-2', { 
            rotate: {x:0, y:80, z:0},
            duration: 3000
        })

sr.reveal('.area-3', { 
            rotate: {x:100, y:100, z:0},
            duration: 2000
        })






const linksMenu = document.querySelectorAll('.menu a[href="#"]');


function getDistanceTop(element){
    const id = element.getAttribute('href');
    return document.querySelectorAll(id).offsetTop;
}

function propScroll(distanceTop){
    window.scroll({
        top: distanceTop,
        behavior: "smooth",
    })
}

function scrollSection (event){
    event.preventDefault();  
   const distanceTop = getDistanceTop(event.target) - 60;
   propScroll(distanceTop);
}

linksMenu.forEach((link) =>{
    link.addEventListener('click', scrollSection);
})






const menu = document.querySelector('.menu');
const closes = document.querySelector('.close');

function openMenu(){
    if(menu.classList.contains('menu')){
        menu.classList.add('open');
    }
}

function closeMenu(){
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
    }
}