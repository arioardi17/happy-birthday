document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    var currentDate = new Date();
  
    // Check if the current month is December (month value is 11 because months are 0-based)
    if (currentDate.getMonth() === 9) {
      // If it's December, show the div
      var myDiv1 = document.getElementById("myDiv1");
      myDiv1.style.display = "block";
    } else 
    {
        // If it's not December, show myDiv2
        var myDiv2 = document.getElementById("myDiv2");
        myDiv2.style.display = "block";
    }
  });
  