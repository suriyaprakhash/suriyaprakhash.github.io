function forceLower(emailField) {
    var input =document.getElementById("form-email");
    input.setAttribute('value', emailField.value.toLowerCase());
    console.log(input.value);
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

function validateForm() {
    var email = document.getElementById("form-email").value;
    var name = document.getElementById("form-name").value;
    var message = document.getElementById("form-message").value;
    if (validateEmail(email) && email.length > 0 && name.length > 0 && message.length > 0) {
        setSubmitButtonVisible(true);
    } else {
        setSubmitButtonVisible(false);
    }

}

function setSubmitButtonVisible(visible) {
    var submitButton = document.getElementById("submit-button");
    if(visible) {
        submitButton.disabled = false;
        submitButton.style.display = "block";
    } else {
        submitButton.disabled = true;
        submitButton.style.display = "none";
    }
}
///////////////////////////////////////

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  function sideReveal() {
    var reveals = document.querySelectorAll(".side-reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowWidth = window.innerWidth;
      var elementLeft = reveals[i].getBoundingClientRect().left;
      var elementVisible = 150;
  
      if (elementLeft < windowWidth - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", sideReveal);

///////////////////////////////////////
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        // Use event.pageX / event.pageY here
            $(".sun").css({
            //   left: e.pageX - 300, 
            //   top: e.pageY - 300
            left: event.pageX - 300, 
            top: event.pageY - 300
    });
    }
})();

// $(document).mousemove(function(e){
//     var eventDoc, doc, body;
//     eventDoc = (e.target && e.target.ownerDocument) || document;
//     doc = eventDoc.documentElement;
//     body = eventDoc.body;

//     $(".sun").css({
//     //   left: e.pageX - 300, 
//     //   top: e.pageY - 300
//     left:  doc.clientLeft - e.pageX, 
//     top:  doc.clientTop - e.pageY
//     });
// });