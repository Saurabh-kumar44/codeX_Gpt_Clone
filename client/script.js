console.log("ljfjas");


import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

//loading functionality added
function loader(element){
  element.textContent = '';

  loadInterval = setInterval(() =>{
    element.textContent += '.';

    if(element.textContent === '...'){
      element.textContent = '';
    }
  }, 300)

function typeText(element,text){
  let index = 0;

  let interval = setInterval(() => {
    if(index < text.length){
      element.innerHTML += text;
    }else{
      clearInterval(interval);
    }
  },20)
}

function generateUniqueID(){
  const timeStamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString();

  reutrn `id-${timeStamp}-${hexadecimalString}`
}

}