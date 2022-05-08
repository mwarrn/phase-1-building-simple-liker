// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likeGlyphs = document.querySelectorAll(".like-glyph");

likeGlyphs.forEach((glyph) => glyph.addEventListener("click", onClick));

function onClick(event) {
  mimicServerCall()
  .then(data => {
    if (event.target.textContent === EMPTY_HEART) {
      event.target.className = "activated-heart";
      event.target.textContent = FULL_HEART;
    }
    else if (event.target.textContent === FULL_HEART) {
      event.target.className = "like-glyph";
      event.target.textContent = EMPTY_HEART;
    }
  })
  .catch(function(error) {
    const errorModal = document.querySelector("div#modal");
    errorModal.className = "";
    document.querySelector(['p#modal-message']).innerHTML = error;
    setTimeout(function() { return errorModal.className = "hidden" }, 3000)    
  })
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
