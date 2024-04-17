//contact-us.js
$( document ).ready(function() {

    const form = document.getElementById('my-form');
    const result = document.getElementById('form-result');
    
    //on submit, POST to web3Forms and get response
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

      if (!hCaptcha) {
          e.preventDefault();
          setTimeout(() => {
            result.innerHTML = "Please fill out captcha field"
          }, 3000);
          return
      }
      
      result.innerHTML = "Please wait..."

      //fetch result
      fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: json
          })
          .then(async (response) => {//show response
              let json = await response.json();
              console.log(json);
              if (response.status == 200) {
                  result.innerHTML = json.message;
                  result.classList.add("notice--success");
              } else {
                  console.log(response);
                  result.innerHTML = json.message;
                  result.classList.add("notice--warning");
    
              }
          })
          .catch(error => {//show error
              console.log(error);
              result.innerHTML = "Something went wrong!";
              result.classList.add("notice--danger");
    
          })
          .then(function() {//reset form
              form.reset();
              //make response dissapear after 3 seconds if you wish
              setTimeout(() => {
                result.style.display = "none";
              }, 3000);
          });
    });
  });