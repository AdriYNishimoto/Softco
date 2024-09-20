var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.nav-lista');

console.log('Botão de expansão:', btnExp);
console.log('Menu lateral:', menuSide);

btnExp.addEventListener('click', function(){
    console.log('Clique detectado');
    menuSide.classList.toggle('expandir');
    console.log('Classes atuais do menu:', menuSide.className);
});
