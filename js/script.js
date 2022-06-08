const spinner = document.getElementById('spinner');
const wheelContainer = document.querySelector('.wheel-cont');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const boxes = document.getElementById('boxes');
const board = document.getElementById('board');
const headerCont = document.querySelector('.header-container');
const mainCont = document.querySelector('.main-container');
const switchMode = document.querySelector('input[type="checkbox"]');

// awitch theme 



// change  styles while scrolling

window.addEventListener('scroll', ()=> {
    if(window.scrollY > headerCont.offsetHeight + 150) {
        headerCont.classList.add('active');
        mainCont.classList.add('active');
    }else {
        headerCont.classList.remove('active');
        mainCont.classList.remove('active');
    }
})



// spin the spinner
const btn = document.getElementById('btn');
let number = Math.ceil(Math.random() * 1000);

spinner.addEventListener('click', ()=> {
    spinner.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1500) + 1000;

    iconArrow.style.opacity = '0';

    if (boxes.classList.contains('big')) {
        boxes.classList.remove('big');
    }else {
        boxes.classList.add('big');
    }

});


// clock working

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hour = time.getHours();
    const clockHours = hour % 24;
    const minute =  time.getMinutes();
    const second = time.getSeconds();

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(clockHours,0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute,0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second,0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="number">${date}</span>`
}
setTime();

//set interval form seconds

setInterval(setTime, 1000);



function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// create boxes 

function createBoxes(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 70}px ${-i * 70}px`;
            boxes.appendChild(box);
        }  
    }
}

createBoxes();


// make cubes on the board

const colors = ['#d90429','#00b4d8', '#03045e', '#fca311', '#ffd60a', '#02c39a','#c200fb', '#c57b57', '#7bf1a8', '#072ac8'];

const cubes = 144

for (let i = 0; i < cubes; i++) {
    const cube = document.createElement('div');
    cube.classList.add('cube');

    cube.addEventListener('mouseover', ()=> addColor(cube));

    cube.addEventListener('mouseout', ()=> removeColor(cube));

    board.appendChild(cube);
}

function addColor(el) {
    const color = getColor();
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
    el.style.background = '#1d1d1d';
    el.style.boxShadow = '0 0 2px black';
}

function getColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}


// projects

const proj = document.getElementById('projects');

const projects = [
    {
        'project': 'mipove.ge',
        'link': 'https://t0rn1k3.github.io/Mipove.ge/' ,
        'image': '../images/mipove.png'
    },
    {
        'project': 'movie app',
        'link': 'https://allmovies-app-api.netlify.app/' ,
        'image': '../images/movieapp.png'
    },
    {
        'project': 'music player',
        'link': 'https://t0rn1k3.github.io/mp3-player/' ,
        'image': '../images/player.png'
    },
    {
        'project': 'bookmark',
        'link': 'https://t0rn1k3.github.io/bookmark/' ,
        'image': '../images/bookmark.png'
    },
    {
        'project': 'form validation',
        'link': 'https://t0rn1k3.github.io/form-validation/' ,
        'image': '../images/form.png'
    }
]



projects.forEach(project => {
    const pro = document.createElement('div');
    pro.classList.add('pro');
    proj.appendChild(pro);

    const image = document.createElement('div');
    image.classList.add('img');
    pro.appendChild(image);

    const img = document.createElement('img');
    image.appendChild(img);
    img.src = project.image

    const hover = document.createElement('div');
    hover.classList.add('hover');
    image.appendChild(hover);

    const view = document.createElement('a');
    view.classList.add('click');
    hover.appendChild(view);
    view.innerHTML = 'view page';
    view.href = project.link;
    view.target = '_blank';
});