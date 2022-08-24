/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const nodeList = document.querySelectorAll("section"); //list of section elements
var isScrolling;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//check if element is in viewport
function checkViewport(element){
    const bound = element.getBoundingClientRect();
    return (
        bound.top >= 0 &&
        bound.left >= 0 &&
        bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bound.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    let navBar = "";
    for(let i = 0; i < nodeList.length; i++){
        navBar += "<li class='menu__link'><a href='" + nodeList[i].id +"'>"+ nodeList[i].getAttribute("data-nav") + "</a></li>";
    }
    document.getElementById("navbar__list").innerHTML = navBar;
}

// Add class 'active' to section when near top of viewport
function addActive(){
    for(let i = 0; i < nodeList.length; i++){
        const element = document.getElementById(nodeList[i].id);
        if(checkViewport(element)){
            element.classList.add("active");
        }
        else{
            element.classList.remove("active");
        }
    }
}

// Scroll to anchor href using scrollTO event
function sectionScroll(element){
    const boundElement = document.getElementById(element.getAttribute("href"));
    if(boundElement != null){
        boundElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
window.addEventListener("load", function(){
    buildNav();
});

// Scroll to section on link click
window.addEventListener("click", function(event){
    event.preventDefault();
    sectionScroll(event.target);
})

// Set sections as active
window.addEventListener("scroll", function(event){
    if((this.window.innerHeight + this.window.scrollY) >= this.document.body.offsetHeight){
        this.document.getElementById("back").style.display = 'block';
    }
    else{
        this.document.getElementById("back").style.display = 'none';
    }
    addActive();
});

// Hide nav bar if user isn't scrolling -- uncomment to activate

/*window.addEventListener("scroll", function(event){
    this.window.clearTimeout(isScrolling);
    document.querySelector(".navbar__menu").style.display = '';
    isScrolling = this.setTimeout(function(){
        document.querySelector(".navbar__menu").style.display = 'none';
    }, 800);
}, false)*/

// Make sections collapsible --uncomment to activate

/*for(let i = 0; i < nodeList.length; i++){
    nodeList[i].addEventListener("click", function(){
        console.log(nodeList[i].getAttribute("class"));
        const content = document.querySelectorAll(".content")[i];
        console.log(content);
        if(content.style.display === "block"){
            content.style.display = "none";
        }
        else{
            content.style.display = "block";
        }
    })
}*/
