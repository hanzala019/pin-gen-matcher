let inputGen = document.querySelector('#gen-input');
let output = document.querySelector('#output');

let genBtn = document.querySelector('.generate-btn');
let numberBtn = document.querySelectorAll('.button');
let submitBtn = document.querySelector('.submit-btn');

let tries = 3;
let triesLeft = document.querySelector('#try-left');
triesLeft.innerHTML = tries;

genBtn.addEventListener('click', function(){
    let number =[];
    for(let i=0; i<4; i++){
    let random = Math.floor(Math.random()*10);
    
    number +=[random];
    
    }
    inputGen.value=number;
})

numberBtn.forEach(button => {
    button.addEventListener('click', function(e){
        
        let number = parseFloat(e.path[0].innerText);
        
        if(number == button.innerHTML){
            output.value+=number;
        }
    })   
    
});

submitBtn.addEventListener('click', function(){
    if(inputGen.value === output.value){
        let result = document.querySelector('#correct').style.display='block';
    }
    if(inputGen.value != output.value && tries > 0){
        let result = document.querySelector('#incorrect').style.display='block';
        tries--;
        triesLeft.innerHTML = tries;
    }
    if(tries == 0){
        submitBtn.setAttribute('disabled','disabled');
    }
  
})
