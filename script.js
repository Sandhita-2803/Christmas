// document.addEventListener('DOMContentLoaded', function () {
//     var audio = document.getElementById('jingle-bells');
//     audio.play();
// });

document.addEventListener('DOMContentLoaded', function () {
    // Set the date for New Year's Day
    const newYearDate = new Date('January 1, 2024 00:00:00').getTime();

    // Update the countdown every second
    const countdownElement = document.getElementById('countdown');
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = newYearDate - now;

        if (timeRemaining < 0) {
            // If the countdown is over, display a message
            clearInterval(countdownInterval);
            countdownElement.innerHTML = '<p>Happy New Year!</p>';
        } else {
            // Calculate remaining days, hours, minutes, and seconds
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Update the countdown element
            countdownElement.innerHTML = `<p>${days}d ${hours}h ${minutes}m ${seconds}s</p>`;
        }
    }
});

var buttons = document.querySelectorAll(".toggleButton");
   
       function close() {
         buttons.forEach((button) => {
           button.innerHTML = "Wanna Open Your Greetings Card??";
           button.nextElementSibling.style.display = "none";
         });
       }
       close();
   
       buttons.forEach(function (button) 
       {
         button.addEventListener("click", function ()
          {
           var extraContent = this.nextElementSibling;
           if (extraContent.style.display === "none") 
           {
             button.innerHTML = "Merry Christmas to You too!!";
             extraContent.style.display = "block";
           } 
           else 
           {
             button.innerHTML = "Wanna Open Your Greetings Card??";
             extraContent.style.display = "none";
           }
         });
       });
