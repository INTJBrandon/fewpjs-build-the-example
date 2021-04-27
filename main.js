// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const like_glyph = document.querySelectorAll(".like-glyph");
like_glyph.forEach((heart) => {
  heart.addEventListener("click", e => {
    mimicServerCall()
    .then(obj => {
      like(e);
    })
    .catch(error => {
      const modal = document.querySelector("#modal");
      const modal_message = document.querySelector("#modal-message");
      modal_message.innerHTML = error;
      modal.classList.remove("hidden");
    });
  });
});

function like(e) {
  if (e.target.textContent == EMPTY_HEART) {
    e.target.textContent = FULL_HEART;
    e.target.classList.add("activated-heart");
  } else {
    e.target.textContent = EMPTY_HEART;
    e.target.classList.remove("activated-heart");
  }
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
