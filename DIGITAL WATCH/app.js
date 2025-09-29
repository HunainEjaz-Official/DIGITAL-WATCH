        setInterval(function () {
            var currentTime = new Date();
            var hours = currentTime.getHours()
            var Minutes = currentTime.getMinutes()
            var Second = currentTime.getSeconds()
            var NewHOurs = document.getElementById("hours");
            var NewMin = document.getElementById("minutes");
            var NewSec = document.getElementById("seconds");
            var ampmElement = document.querySelector(".ampm");
            var hoursFormat = "am"
            if (hours > 11) {
                hoursFormat = "pm"
            }
            
            var displayHours = hours;
            if (hours > 12) {
                displayHours = hours - 12;
            }
            if (displayHours === 0) {
                displayHours = 12;
            }
            
            ampmElement.innerText = hoursFormat.toUpperCase();
            
            if (displayHours < 10) {
                NewHOurs.innerText = "0" + displayHours;
            } else {
                NewHOurs.innerText = displayHours;
            }
            if (Minutes < 10) {
                NewMin.innerText = "0" + Minutes;
            } else {
                NewMin.innerText = Minutes;
            }
            if (Second < 10) {
                NewSec.innerText = "0" + Second;
            } else {
                NewSec.innerText = Second;
            }

        }, 1000);
