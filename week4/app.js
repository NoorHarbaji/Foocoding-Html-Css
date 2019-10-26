
const navSlide = () => {
   const burgar = document.querySelector(".burger");
   const navLinks = document.querySelector("nav");
   const subLink = document.querySelector("nav ul li");

   burgar.addEventListener("click", () => {
       navLinks.classList.toggle("active");

       //Burgar Animation
       burgar.classList.toggle('toggle');
       
    });
     
    subLink.addEventListener("click", () => {
        subLink.silblings().removeClass('active');
        subLink.classList.toggle('active');
    });
    


}

navSlide();