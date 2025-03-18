const buttons=document.querySelectorAll(".button")
// console.log(buttons);
const body =document.querySelector("body");
// console.log(body);
 
//accessing all the button
for(let i=0;i<buttons.length;i++){
    console.log(buttons[i]);

    buttons[i].addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        //reset both backgroundColor and background
        body.style.backgroundColor = ''; 
        body.style.background = '';

        if(e.target.id ==='pink'){
            body.style.backgroundColor='pink';//body.style.backgroundColor=e.target.id
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor='white';
        }
        if(e.target.id ==='green'){
            body.style.backgroundColor='#2BFF2B';
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor='blue';
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor='yellow';
        }
        if(e.target.id ==='purple'){
            body.style.backgroundColor='purple';
        }
        if(e.target.id ==='red'){
            body.style.backgroundColor='red';
        }
        if (e.target.id === 'mixedsky') {
            body.style.background = 'linear-gradient(to right, #267871, #136a8a)';
        }
        if (e.target.id === 'skyred') {
            body.style.background = 'linear-gradient(to right, #FF0080, #FF8C00, #40E0D0)';
        }
        if (e.target.id === 'skyblue') {
            body.style.background = 'linear-gradient(to left, #4e7fc8, #646abb, #7853a7, #88388d, #910e6c)';
        }
    })
}