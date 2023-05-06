console.log("Welcome Codex");


import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

//loading functionality 
function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '...') {
      element.textContent = '';
    }
  }, 300)
}

  //typing style
  function typeText(element, text) {
    let index = 0;

    let interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text;
      } else {
        clearInterval(interval);
      }
    }, 20)
  }

  //generate unique id for text
  function generateUniqueID() {
    const timeStamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString();

    reutrn`id-${timeStamp}-${hexadecimalString}`
  }

  //dark and light chat Stripe
  function chatStrip(isAi, value, uniqueId) {
    return (
    `
    <div class="wrapper ${isAi && 'ai'}">
      <div class="chat">
        <div class="profile">
            <img src="${isAi ? bot : user}"
                 alt="${isAi ? 'bot' : 'user'}"
            />
        </div>
        <div class="message" id="${uniqueId}"value="${value}"></div>
      </div>
    </div>
    `
    )
  }

  //handling the Submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = FormData(form);
    // console.log(data);

    //user's ChatStripe
    chatContainer.innerHTML += chatStrip(false, data.get('promt'))
    form.reset();

    //user's ChatStripe
    const uniqueId = generateUniqueID();
    chatContainer.innerHTML += chatStrip(true, " ", uniqueId)

    //this is used to put new messages in the view
    chatContainer.scrollTop = chatContainer.scrollHeight 

    const messageDiv = document.getElementById(uniqueId); //we have to create a new uniqueId for every new message
    loader(messageDiv)

  }
