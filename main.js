let elem=document.querySelector('.container');
let h2=document.createElement('h2');
let btn=document.querySelector('button');
let div2=document.querySelector('.dqs');

btn.addEventListener('click',function(){
    let p=document.createElement('p');
    let input=document.querySelector('input').value; 
    let bMinus=document.createElement('button');
    let span=document.createElement('span');
    let bArrow=document.createElement('button');
    div2.appendChild(p);
    p.innerHTML=input;
    p.appendChild(bMinus);
    p.appendChild(bArrow);
    p.appendChild(span);
    bMinus.innerHTML='-';
    bArrow.innerHTML='arrow';
    
    let arr2=document.querySelectorAll('span'); 
    for(let i=0; i<arr2.length; i++){
        arr2[i].innerHTML=''+(i+1);        
        
    } 

    bMinus.addEventListener('click',function(){    
        div2.removeChild(p);
        let arr=document.querySelectorAll('span');        
        for(let j=0; j<=arr.length; j++){
            arr[j].innerHTML=''+(j+1);            
        }
    });

        bArrow.addEventListener('click',function(){        
        div2.insertBefore(p, p.previousElementSibling);
    });        
});







//div2.removeChild(h3);



