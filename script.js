//Lightbox related code

const projectsCards = document.getElementsByClassName('project-card');
const projectLightbox = document.getElementById('the-modal-lightbox');
const projectLightboxContainer = projectLightbox.getElementsByClassName('modal-lightbox-container')[0];
const normalMain = document.getElementById('the-normal-main');

let index; //this stores the index of the currently displayed project-card


//registering click-event handlers to the project cards
let projectCardscount = 0;
for(const projectCard of projectsCards) {
    projectCardscount++; const n = projectCardscount;
    projectCard.addEventListener('click', () => openModal(n));
    projectCard.addEventListener('keydown', (event)=> {
        if(event.keyCode == 13){
            openModal(n);
        }
    })
}
//console.log(`${projectCardscount} event listeners added`);

//TODO: restyle the lighbox control, since I changed their tag to button.
//TODO: make it so they are properly focusable (make elements outside the lightbox unfocusable and elements inside focusable).


function openModal(number){
    index = number-1;
    projectLightboxContainer.appendChild(projectsCards[number-1].cloneNode(true));
    projectLightbox.style.display = 'grid';
    normalMain.inert = true; //for accessibility: makes the normal main unfocusable
}

function closeModal(){
    projectLightboxContainer.removeChild(projectLightboxContainer.lastChild);
    projectLightbox.style.display = 'none';
    normalMain.inert = false; //for accessibility: makes the normal main focusable again
}

function modalPage(number){
    projectLightboxContainer.removeChild(projectLightboxContainer.lastChild);
    projectLightboxContainer.appendChild(projectsCards[number-1].cloneNode(true));
    console.log(`Showing project-card ${number}`);
}

function nextPage(){
    index = (index + 1) % projectCardscount;
    console.log(`Monving to page ${index+1}`);
    modalPage(index+1);
}

function prevPage(){
    index = (index >0) ? (index -1) : (index+2) ;
    console.log(`Monving to page ${index+1}`);
    modalPage(index+1);
}

//maybe I want to add a read-more to project cards in the mobile view

//Hamburger related code TODO: (+) invoke adjustTopMargin when the nav heigth grows

const togglableMenu = document.getElementById('tog-men');
const isMenuDownQuery = window.matchMedia('screen and (max-width: 40rem)');
let menuOn = false;

isMenuDownQuery.addEventListener('change', adjustTopMargin);

function toggleNavMenu(isDown){
    if(menuOn){
        togglableMenu.style.display = 'none';
        //console.log("Closing Nav menu");
    }
    else{
        togglableMenu.style.display = 'flex';
        //console.log("Opening Nav Menu");
    }
    menuOn = !menuOn;
    adjustTopMargin();
}

// To try: the effect of the resizing could have been achieved by setting up more conceptually the css by having a fixed height body and a main with y-overflow scroll

function adjustTopMargin(){
    if (menuOn && isMenuDownQuery.matches){
        normalMain.style.marginTop = `calc(4rem + ${document.defaultView.getComputedStyle(togglableMenu).height})`;
    }
    else{normalMain.style.marginTop = '4rem';}
}

//Form related code

function submitForm(){
    alert('This is a sample page. The form is not functional.');
}
