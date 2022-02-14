window.addEventListener('DOMContentLoaded', (evt) => {
    document.querySelector("button").addEventListener("click",(evt) => {
      evt.preventDefault();
      let ok=true;
      let input=document.querySelector("input");
      if (!input.checkValidity()) {
          document.querySelector("span").textContent=input.validationMessage;
          ok=false;
      }         
     if (ok) document.querySelector("form").submit();
    })
  });


document.addEventListener("DOMContentLoaded", function (event) {
   
    document.addEventListener('copy', (evt) => {
       
    });

    document.querySelector("#cop").addEventListener("click", function () { document.execCommand('copy'); });
    //document.execCommand('copy'); no funciona si no es en un evento directo del usuario (como click) 

 
    document.querySelector("#ver").addEventListener("paste", function (evt) {
        evt.preventDefault();
       
    });
});