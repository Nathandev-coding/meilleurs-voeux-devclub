window.onload = function(){
    const messageelemnts = document.querySelector(".message");
    const message = messageelemnts.innerHTML;
    messageelemnts.innerHTML = "";
    let i = 0;
    function typing(){
        if(i < message.length){
            messageelemnts.innerHTML += message.charAt(i);
            i++;
            
            setTimeout(typing, 100);

        }
       
    }
    typing();
   

}
setTimeout(function(){
    const thank = document.getElementById("thanks");
   thank.classList.add("show");
}, 65000);

function thankYouMessage(){
    //cacher le message et le button
    const thank = document.getElementById("thanks");
    thank.classList.remove("show");
    thank.style.display = "none";
    //cacher le message de motivation
    const message = document.getElementById("message");
    message.classList.add("hide");
    message.style.display = "none";

    //afficher  la photo de motivation avec une animation fluide
    const photoContainer = document.getElementById("photo-container");
    photoContainer.classList.remove("hidden");

}
    

