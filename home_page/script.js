  const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
      if(navLinks.style.display === 'flex'){
        navLinks.style.display = 'none';
      } else  {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = '#fff';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.right = '20px';
        navLinks.style.padding = '20px';
        navLinks.style.borderRadius = '8px';
        navLinks.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)';
        navLinks.style.zIndex = '150';
      }
    });


menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// For mobile dropdowns
document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 991) { // tablet & below
      e.preventDefault();
      const dropdown = link.parentElement;
      dropdown.classList.toggle('active');
    }
  });
});

    // Ensure dropdowns stay above other items
    document.querySelectorAll('.dropdown').forEach(drop => {
      drop.addEventListener('mouseenter', () => {
        drop.querySelector('.dropdown-content').style.zIndex = '250';
      });
    });

    // Carousel functionality
    const bottles = document.querySelectorAll('.bottle');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.arrow.prev');
    const nextArrow = document.querySelector('.arrow.next');
    let currentIndex = 0;

    function showSlide(index){
      bottles.forEach((bottle,i)=>{
        bottle.style.opacity = i === index ? '1' : '0';
      });
      dots.forEach((dot,i)=>{
        dot.classList.toggle('active', i===index);
      });
      currentIndex = index;
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.dataset.index);
        showSlide(idx);
      });
    });

    prevArrow.addEventListener('click', () => {
      let newIndex = currentIndex - 1;
      if(newIndex < 0) newIndex = bottles.length - 1;
      showSlide(newIndex);
    });

    nextArrow.addEventListener('click', () => {
      let newIndex = (currentIndex + 1) % bottles.length;
      showSlide(newIndex);
    });

    // Auto init first slide
    showSlide(0);
    const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  searchInput.classList.add("active");
  searchInput.focus();
});

// When user clicks outside or loses focus, collapse back
searchInput.addEventListener("blur", () => {
  searchInput.classList.remove("active");
});


 // Example JS: click icon to change gradient speed
    const icon = document.querySelector(".gradient-icon");

    icon.addEventListener("click", () => {
      icon.style.animationDuration =
        icon.style.animationDuration === "2s" ? "5s" : "2s";
    });
