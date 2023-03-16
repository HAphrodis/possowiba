const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


/**
McSub Example
Uses external Resource McSub Unpkg CDN version @0.1.1
*/

new Mcsub("#mcsub", {
    user: "dca6a1bca0e1882e8f4e2b378", // Required
    list: "39176ea7f0", // Required
    onInit(){
      // Example of element and response styling onInit
      this.element.style.border = '1px solid pink';
    },
    onSubmit() {
      // Example of button text changing when Submission starts
      this.button.innerHTML = "Loading";
    },
   onSuccess(){
       // Open Console
       console.log('Subscribe Success'); // Example
      // Example of button styling on complete
      this.button.innerHTML = "Subscribed";
    },
   onError(){
        // Open Console
        console.log('Subscribe Error'); // Example
    },
    complete() {
      // Example of button styling on complete
      this.button.innerHTML = "Submit";
    }
  });

   // Activate Carousel
   $("#myCarousel").carousel();

   // Enable Carousel Indicators
   $(".item1").click(function(){
       $("#myCarousel").carousel(0);
   });
   $(".item2").click(function(){
       $("#myCarousel").carousel(1);
   });
   $(".item3").click(function(){
       $("#myCarousel").carousel(2);
   });
   $(".item4").click(function(){
       $("#myCarousel").carousel(3);
   });

   // Enable Carousel Controls
   $(".left").click(function(){
       $("#myCarousel").carousel("prev");
   });
   $(".right").click(function(){
       $("#myCarousel").carousel("next");
   });
