// Set the countdown date to 24 hours from now
var countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current time
    var now = new Date().getTime();
    
    // Find the time remaining
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the countdown-timer element
    document.getElementById("countdown-timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    
    // If the countdown is over, display "EXPIRED"
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);
