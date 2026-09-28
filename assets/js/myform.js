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
    // const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    // if (!hCaptcha) {
    //     e.preventDefault();
    //     result.innerHTML = "Please fill out captcha field"
    //     return
    // }
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
  reveal();

  function moveAboutLandscape() {
    var landscape = document.querySelector(".about-landscape");
    var about = document.querySelector("#about");

    if (!landscape || !about) {
      return;
    }

    var progress = (window.innerHeight - about.getBoundingClientRect().top) / (window.innerHeight + about.offsetHeight);
    var clampedProgress = Math.max(-0.2, Math.min(1.2, progress));
    landscape.style.setProperty("--landscape-far", (clampedProgress * -18) + "px");
    landscape.style.setProperty("--landscape-mid", (clampedProgress * -34) + "px");
    landscape.style.setProperty("--landscape-reeds", (clampedProgress * -52) + "px");
    landscape.style.setProperty("--landscape-water", (clampedProgress * 24) + "px");
  }

  window.addEventListener("scroll", moveAboutLandscape);
  moveAboutLandscape();

  function moveExperienceCollage() {
    var collage = document.querySelector(".experience-collage");
    var experience = document.querySelector("#exp-edu");

    if (!collage || !experience) {
      return;
    }

    var progress = (window.innerHeight - experience.getBoundingClientRect().top) / (window.innerHeight + experience.offsetHeight);
    var stamps = collage.querySelectorAll(".city-stamp");

    for (var i = 0; i < stamps.length; i++) {
      stamps[i].style.setProperty("--city-shift", (progress * (i + 1) * -12) + "px");
    }

    var stones = document.querySelectorAll(".stone-block");
    for (var j = 0; j < stones.length; j++) {
      stones[j].style.setProperty("--stone-shift", (progress * (j + 1) * -9) + "px");
    }
  }

  window.addEventListener("scroll", moveExperienceCollage);
  moveExperienceCollage();

  function enableExperienceFocus() {
    var experience = document.querySelector("#exp-edu");
    var rows = document.querySelectorAll("#exp-edu .single-about");

    if (!experience || !rows.length) {
      return;
    }

    for (var i = 0; i < rows.length; i++) {
      rows[i].addEventListener("mouseenter", function () {
        experience.classList.add("is-focusing");
        this.classList.add("is-focused");
      });

      rows[i].addEventListener("mouseleave", function () {
        experience.classList.remove("is-focusing");
        this.classList.remove("is-focused");
      });
    }
  }

  enableExperienceFocus();

  function enableExpertiseFocus() {
    var expertise = document.querySelector("#expertise");
    var cards = document.querySelectorAll("#expertise .single-services");

    if (!expertise || !cards.length) {
      return;
    }

    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("mouseenter", function () {
        expertise.classList.add("is-focusing");
        this.classList.add("is-focused");
      });

      cards[i].addEventListener("mouseleave", function () {
        expertise.classList.remove("is-focusing");
        this.classList.remove("is-focused");
      });
    }
  }

  enableExpertiseFocus();


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

        var height = document.body.clientHeight;
        var width = document.body.clientWidth;

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
        // 1500 > 1300 + 300

        if (width < 1200) {
              $(".sun").css({
                display: 'none',
            });
            
        } else
        if(height - 600 < event.pageY && !(height - 50 < event.pageY )) {
            $(".sun").css({
                //   left: e.pageX - 300, 
                //   top: e.pageY - 300
                left: event.pageX - 50, 
                top: event.pageY - 50,
                width: '100px',
                height: '100px',
            });
        } else if (height - 50 < event.pageY) { // LOWER AREA
            $(".sun").css({
                left: event.pageX - 5, 
                top: event.pageY - 5,
                width: '10px',
                height: '10px',
            });
        } else
         if (width > event.pageX + 600 && !(event.pageX < 600)) { // MIDDLE AREA
            $(".sun").css({
                //   left: e.pageX - 300, 
                //   top: e.pageY - 300
                left: event.pageX - 300, 
                top: event.pageY - 300,
                width: '600px',
                height: '600px',
            });
        } else if (event.pageX < 600) { // SIDEAREA 100 < 600
            $(".sun").css({
                left: event.pageX/2, 
                top: event.pageY - (event.pageX/2), 
                width: event.pageX + 'px', //100px
                height: event.pageX + 'px', //100px
            });
        }
        else {
            $(".sun").css({
                //   left: e.pageX - 300, 
                //   top: e.pageY - 300
                left: event.pageX - (width - event.pageX)/2, // (1500 - 1300) / 2 = 200/2 = 100  
                top:  event.pageY - (width - event.pageX)/2, //
                width: (width - event.pageX) + 'px', //1500 - 1300 = 200px
                height: (width - event.pageX) + 'px', //1500 - 1300 = 200px
            });
        }
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