const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const bars = document.querySelector('.bars');
const popUp = document.querySelector('.pop_up');
// const afterBars = window.getComputedStyle(document.querySelector('.bars'), '::after');

btn.style.transform = 'rotate(180deg)'

btn.addEventListener('click',() =>{
    popUp.classList.add('show')
})
btn.addEventListener('mouseover', () =>{
    btn.classList.add('rotate');
    btn.style.transform = 'rotate(150deg)'  
})
btn.addEventListener('mouseleave', () =>{
    btn.classList.remove('rotate')
    btn.style.transform = 'rotate(180deg)'
})
// bars.addEventListener('mouseover', ()=>{
//     bars.style.transformX = '45deg',
// })
btn2.addEventListener('click', () =>{
    popUp.classList.remove('show')
})

