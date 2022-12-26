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

// get page sections
const sections = Array.from(document.querySelectorAll('section'));
// get nav bar
const menu =document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



// determines if section in viewport

function isSectionActive(section){
let bounding = section.getBoundingClientRect();
return(bounding.top >= 0 && bounding.left >= 0)
}

// set the style for viewd section


//
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// create items in navbar

//create document fragmnet to reduce reflows and repaints 
const fragment = document.createDocumentFragment();
sections.forEach(section =>{
    sectionName = section.getAttribute('data-nav');
    sectionLink = section.getAttribute('id');
    // create menu item for each section
    navbarItem = document.createElement('li');
    // set name and link for each item
    navbarItem.innerHTML = `<a class = 'menu__link' href = #${sectionLink}>${sectionName}</a>`;
    fragment.appendChild(navbarItem);
})
// add the fragment to the menu
menu.appendChild(fragment);


// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function(event){
    sections.forEach(section=>{
    // if the section is in viewport, add "your-active-class"
    if(isSectionActive(section)){
        section.classList.add('your-active-class');
    }
    // otherwise, remove "your-active-class"
    else { 
        section.classList.remove('your-active-class');
    }
}
)})

// Scroll to anchor ID using scrollTO event

// select every <a> element whose href attribute value begins with "#"
// we have already set the href values while bulding the navbar

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

