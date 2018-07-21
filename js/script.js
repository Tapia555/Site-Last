
  var link = document.querySelector(".button-write");
  var popup = document.querySelector(" .feedback-modal");
  var close = document.querySelector(".feedback-close");
  var form = popup.querySelector("form");
  var  login = popup.querySelector("[name=user-name]");
  var email = popup.querySelector("[name=user-email]");
  var message = popup.querySelector("[name=feedback-text]")

  link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      login.focus();
  });
      close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });
      form.addEventListener("submit", function (evt) {

   if (!login.value || !email.value || !message.value) {
       evt.preventDefault();
       popup.classList.add("modal-error");
     }
    });
        window.addEventListener("keydown", function (evt) {
      if(evt.keyCode ===27){
        evt.preventDefault() ;
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
          }
          }
  });
