// Scroll reveal animation
const pcSections = document.querySelectorAll('.pc-section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;

  pcSections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add('pc-visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click',function(e){
        e.preventDefault();
        const target=document.querySelector(this.getAttribute('href'));
        if(target){target.scrollIntoView({behavior:'smooth',block:'start'});}
      });
    });

    // Fade-in
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.style.opacity='1';
          entry.target.style.transform='translateY(0)';
        }
      });
    },{threshold:0.1,rootMargin:'0px 0px -50px 0px'});

    document.querySelectorAll('section').forEach(sec=>{
      sec.style.opacity='0';
      sec.style.transform='translateY(20px)';
      sec.style.transition='opacity 0.6s ease, transform 0.6s ease';
      observer.observe(sec);
    });
    const searchBtnUni = document.getElementById("searchBtn-uni123");
      const searchInputUni = document.getElementById("searchInput-uni123");
      const gradientIconUni = document.querySelector(".gradient-icon-uni123");
     // Expand input on button click
      searchBtnUni.addEventListener("click", () => {
        searchInputUni.classList.add("active");
        searchInputUni.focus();
      });

      // Collapse input on blur
      searchInputUni.addEventListener("blur", () => {
        searchInputUni.classList.remove("active");
      });

      // Change gradient animation speed on icon click
      gradientIconUni.addEventListener("click", () => {
        gradientIconUni.style.animationDuration =
          gradientIconUni.style.animationDuration === "2s" ? "5s" : "2s";
      });