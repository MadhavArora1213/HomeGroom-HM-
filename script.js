// let scrollContainer = document.querySelector(".gallery");
// let backBtn = document.querySelector("#backBtn");
// let nextBtn = document.querySelector("nextBtn");

// scrollContainer.addEventListener("wheel",(evt)=>{
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
//     scrollContainer.style.scrollBehaviour ="auto";

// });
// nextBtn.addEventListener("click",()=>{
//     scrollContainer.style.scrollBehaviour = "smooth";
//     scrollContainer.scrollLeft += 900;
// });
// backBtn.addEventListener("click",()=>{
//     scrollContainer.style.scrollBehaviour = "smooth";
//     scrollContainer.scrollLeft -= 900;
// });

var splide = new Splide(".splide", {
  perPage: 3,
  perMove: 1,
  gap: "2rem",
  // pagination:false,
  breakpoints: {
    640: {
      perPage: 2,
      gap: ".7rem",
      // height : '6rem',
    },
    480: {
      perPage: 1,
      gap: ".7rem",
      // height : '6rem',
    },
  },
});

splide.mount();
