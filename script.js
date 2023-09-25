const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=> {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

/*-------scroll para as páginas------------ */

const AboutMe = document.querySelector("#about");

AboutMe.addEventListener("click", function() {
    if (window.innerWidth < 768) {
      return  window.scrollTo(0, 1997)
    } else{
        
     return   window.scrollTo(0, 1333);
                 
    }
});

const goToAboutMe = document.querySelector("#go-to-about-me");

goToAboutMe.addEventListener("click", function() {
    if (window.innerWidth < 768) {
      return  window.scrollTo(0, 1997)
    } else{
        
     return   window.scrollTo(0, 1333);
                 
    }
});

const goToArticles = document.querySelector("#go-to-articles");

goToArticles.addEventListener("click", function() {

    if(window.innerWidth < 768){
        return window.scrollTo(0, 433)
    }else {
       return window.scrollTo(0, 674);        
    }
    
});

const goToSubscribe = document.querySelector("#go-to-subscribe");

goToSubscribe.addEventListener("click", function() {
    if (window.innerWidth < 768) {
      return  window.scrollTo(0, 2450)
    } else {
        
     return   window.scrollTo(0, 1759);
                 
    }
});

/* -------mudar a cor do menu ao scroolar----- */ 

  window.addEventListener('scroll',function changeColor(){ 

    if (window.innerWidth >= 768) {
      return  navMenu.classList.remove("sticky")
    } 
    const navLink = document.querySelectorAll('.nav-link')
    const container = document.querySelector(".container")
    const bar = document.querySelectorAll(".bar")
    const navBrading = document.querySelector('.nav-brading')

    navBrading.classList.toggle("sticky", window.scrollY > 0)

    container.classList.toggle("sticky", window.scrollY > 0)
    bar[0].classList.toggle("sticky", window.scrollY > 0)
    bar[1].classList.toggle("sticky", window.scrollY > 0)
    bar[2].classList.toggle("sticky", window.scrollY > 0)
    navMenu.classList.toggle("sticky", window.scrollY > 0)
     

    navLink[0].classList.toggle("sticky", window.scrollY > 0)
    navLink[1].classList.toggle("sticky", window.scrollY > 0)
    navLink[2].classList.toggle("sticky", window.scrollY > 0) 
    
  })



var scrolltop = window.scrollY;
console.log(scrolltop)

var altura = window.screen.height;
var largura = window.screen.width
console.log(`Largura dá tela atual é ${largura}`)
console.log(`Altura dá tela atual é ${altura}`)

  



