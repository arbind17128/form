// const dom1=document.querySelector(".items")
// // dom1.lastElementChild.remove();

// dom1.firstElementChild.textContent='hello'
// dom1.children[1].innerText='brand';


// this is code id used to change bg color of the form on event called click

// const btn =document.querySelector('.btn');
// btn.addEventListener('click',(e)=> {
//     e.preventDefault();
//     document.querySelector('#my-form').classList.add('redclass')
//     document.querySelector('body').classList.add('bg-dark');
// })

// this is code id used to change bg color of the form on event called mouseover
// const btn =document.querySelector('.btn');
// btn.addEventListener('mouseover', (e)=> {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'red'
// })

// const btn =document.querySelector('.btn');
// btn.addEventListener('click',(e)=> {
//     e.preventDefault();
//     document.querySelector('#my-form').classList.add('redclass')
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML='<h1 style="color:red">hello</h1>'
// })


// const myform =document.querySelector('#my-form');
// const inputname=document.querySelector('#name');
// const myEmail =document.querySelector('#email');
// const myUser=document.querySelector('#user');
// const myMsg=document.querySelectorAll('.msg');
// console.log(myMsg.length)
// myform.addEventListener('submit', onsubmitn)
// function onsubmitn(e) {
//     e.preventDefault();
 
// if(!inputname.value || !myEmail.value ) {
//     // myMsg.innerHTML='!please enter your fields';
//     // myMsg.classList.add('errormsg');
//     // console.log('abc')
//  myMsg.forEach(d=>{
//     d.innerHTML=' !please enter your fields';
//     d.classList.add('errormsg')
//  })
// }else{
//     console.log('s')
// }
// if(!inputname.value || !myEmail.value ) {
//     // myMsg.innerHTML='!please enter your fields';
//     // myMsg.classList.add('errormsg');
//     // console.log('abc')
//  myMsg.forEach(d=>{
//     d.innerHTML=' !please enter your fields';
//     d.classList.add('errormsg')
//  })
// }else{
//     console.log('s')
// }
//  }


const inname =document.querySelector('#name');
const form =document.querySelector('#my-form');
const email =document.querySelector('#email');
const msg =document.querySelector('.msg');
const userList =document.querySelector('#users');

form.addEventListener('submit', abc);
function abc(e) {
    e.preventDefault();
     
    if(!inname.value){
        msg.innerHTML=' !please enter your field'
        msg.classList.add('errormsg');
        setTimeout(()=>msg.remove(), 3000);
    }
    else {
       const li =document.createElement('li');
       li.appendChild(document.createTextNode(`${inname.value} : ${email.value}`));
       userList.appendChild(li)
       inname.value='';
       email.value='';
    }
}







