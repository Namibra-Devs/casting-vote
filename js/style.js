window.addEventListener("load", () => {
  const sidebar = document.querySelector(".sidebar"),
  closeBtn = document.querySelector(".sidebar_toggle .fa");

closeBtn.addEventListener("click", () => {
sidebar.classList.toggle("open");
btnChange();
  
})
btnChange = () => {
  if(sidebar.classList.contains("open")) {
   closeBtn.classList.replace("fa-bars", "fa-bars-staggered");
  } else {
    closeBtn.classList.replace("fa-bars-staggered", "fa-bars");
  }
}
})
  


// *****************FIXED NAV***************
window.addEventListener("scroll", () => {
  navDOM.classList.remove("navbar-links-show");
  toggleBtn.classList.replace("fa-bars-staggered", 'fa-bars');
})
 

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    // const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > 0 ) {
        navbar.classList.add("fixed-nav");
     
    } else {
        navbar.classList.remove("fixed-nav");
    }
})
 //  ======================TOGGLE NAV==========================
 const toggleBtn = document.querySelector(".toggle-menu .fa-bars"),
 navDOM = document.querySelector(".navbar-links");
 
 toggleBtn.addEventListener("click", () => {
  if(navDOM.classList.contains("navbar-links-show")) {
    navDOM.classList.remove("navbar-links-show"); 
    toggleBtn.classList.replace("fa-bars-staggered", 'fa-bars');
  } else {
    navDOM.classList.add("navbar-links-show"); 
    toggleBtn.classList.replace('fa-bars', "fa-bars-staggered");
  }

 });
 


// =========================ACORDION=========================
const questions= document.querySelectorAll(".question"); 

questions.forEach((question) => {
const btn= question.querySelector(".question-btn"); 

     btn.addEventListener("click", () => {
      questions.forEach((item) => {
        if(item !== question) {
           item.classList.remove("show-text");
        }
      });
      question.classList.toggle("show-text");

     });
     });


 
  