const imgs=document.querySelectorAll('.img a');
let imgId=1;

const imgdiv=document.querySelectorAll('.img');


imgs.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        e.preventDefault();
        imgId=img.dataset.id;
        imgdiv.forEach((img)=>{
            img.classList.remove('active');
        });
        img.parentElement.classList.add('active')

        moveimg();
    });
})


function moveimg(){
    const display=document.querySelector('.image_slider  img:first-child').clientWidth;
    
    let width=(imgId-1)*display;
    document.querySelector('.image_slider').style.transform=`translateX(${-width}px)`
    console.log(width);
}


const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const qtyTxt = document.querySelector('#qty');

plusBtn.addEventListener('click',()=>{
    let qty=parseInt(qtyTxt.value);
    if(qty>=0 && qty<5){
        qty++;
        qtyTxt.value=qty;
    } 
    
})

minusBtn.addEventListener('click',()=>{
    let qty=parseInt(qtyTxt.value);
    if(qty>=0 && qty<5){
        qty--;
        qtyTxt.value=qty;
    } 
})
    
