'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const openModal = function (e) {
  //This prevents the default behaviour of the link 
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//for (let i = 0; i < btnsOpenModal.length; i++)
//btnsOpenModal[i].addEventListener('click', openModal);

//Converting the above code to a forEach
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Selecting Elements

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

//Creating and inserting our cookie message

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'we us cookies for improved functionality and analytics';

message.innerHTML = 'we use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

header.append(message); 

//Delete Elements - THIS STILL DOESNT WORK!!!
document
.querySelector('btn--close--cookie')
.addEventListener('click', function () {
  message.remove()
});


//Creating smooth scroll






