const open = document.getElementById('open');
const close = document.getElementById('close');
const cont = document.querySelector('.container');
const type = document.getElementById('typing');
const main = document.querySelector('.main');
const arrow = document.getElementById('arrowMore');
const more = document.querySelector('.more-works');
const less = document.getElementById('less');



// about page
const card = document.querySelectorAll('.cards');

// add and remove 'active' class


card.forEach((cards) =>{
    cards.addEventListener('click', () => {
        removeAtciveClass();
        cards.classList.add('active');
    })
}

);


function removeAtciveClass() {
    card.forEach((cards) => {
        cards.classList.remove('active');
    })
}


// eventListener for showing nav menu

open.addEventListener('click', () => {
    cont.classList.add('show-nav');
});

close.addEventListener('click', () => {
    cont.classList.remove('show-nav');
});


// typing text

let i = 0;
let text = 'Hardworking to become irreprovable web developer!...';
let speed = 100;

function typing() {
    if (i < text.length) {
        type.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}


window.addEventListener('load', ()=> {
    typing();
})


// see more works 

arrow.addEventListener('click', ()=> {
    
    if (more.style.width == '100%') {
        main.style.width = '100%';
        main.style.overflow = 'visible';
        more.style.width = 0;
        more.style.overflow = 'hidden';
        arrow.style.transform = 'rotate(360deg)';
    }else {
        main.style.width = 0;
        main.style.overflow = 'hidden';
        more.style.width = '100%';
        more.style.overflow = 'visible';
        arrow.style.transform = 'rotate(180deg)';
    }
});
