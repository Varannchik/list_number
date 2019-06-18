let elem=document.querySelector('.container');
let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    let p=document.createElement('p');
    let input=document.querySelector('input').value; 
    let bMinus=document.createElement('button');
    let span=document.createElement('span');
    
    elem.appendChild(p);
    p.innerHTML=input;
    p.appendChild(bMinus);
    p.appendChild(span);
    bMinus.innerHTML='-';
    let arr2=document.querySelectorAll('span'); 
    for(let i=0; i<arr2.length; i++){
        arr2[i].innerHTML=''+(i+1);        
        
    } 

    bMinus.addEventListener('click',function(){    
        elem.removeChild(p);
        let arr=document.querySelectorAll('span');        
        for(let j=0; j<=arr.length; j++){
            arr[j].innerHTML=''+(j+1);            
        }
    });
       
});







//div2.removeChild(h3);



