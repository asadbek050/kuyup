"use strict"


const box = document.querySelectorAll('.box')


document.addEventListener('keyup' , function(e){
    box[0].innerHTML = e.key
    box[1].innerHTML = e.code
    box[2].innerHTML = e.which
    if(box[0].innerHTML == ' '){
        box[0].innerHTML = 'Space'
    }
})
