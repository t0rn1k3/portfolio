const open = document.getElementById('open');
const close = document.getElementById('close');
const cont = document.querySelector('.container');
const type = document.getElementById('typing');



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







