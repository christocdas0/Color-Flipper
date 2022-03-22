let hex =[0,1,2,3,4,5,6,7,8,9, 'a' , 'b' , 'c','d' ,'e' , 'f'];
let button =document.getElementById('btn');
let spantext=document.querySelector('.color');

button.addEventListener('click' , function(){

    let hex22= '#';
    for(i=0; i<6; i++){
        hex22 +=hex[hexcolor()];
        
    }
    console.log(hex22);
    document.body.style.backgroundColor=hex22;
    spantext.textContent=hex22;
    spantext.style.color=hex22;
     
})

function hexcolor(){
    return Math.floor(Math.random()*hex.length) ;
}