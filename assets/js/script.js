
const menu = document.querySelector('.menu');
const closedMenu = document.querySelector('.closed-menu');
const aside = document.querySelector('aside');
const body = document.querySelector('body');
const openModal = document.querySelector('#openModal');
const closedModal = document.querySelector('#closedModal');
const modalBox = document.querySelector('.reservas-modal-box');
menu.addEventListener('click',function(){
    aside.style.width = '100%';
    body.style.overflow = 'clip';
});
closedMenu.addEventListener('click',function(){
    aside.style.width = '0';
    body.style.overflow = 'initial';
});
openModal.addEventListener('click',function(){
    openModal.style.opacity = '0';
    modalBox.style.display = 'block';
    setTimeout(function(){
        openModal.style.display = 'none';
        modalBox.style.opacity = '1';
        
    },800);
    
});
closedModal.addEventListener('click',function(){
    openModal.style.display = 'block';
    modalBox.style.opacity = '0'
    setTimeout(function(){
        modalBox.style.display = 'none';
        openModal.style.opacity = '1';
    },600)
    
    
});