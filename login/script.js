 const form = document.getElementById('login-form');
    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');
    const popup = document.getElementById('login-popup');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (email.value.trim() === '' || password.value.trim() === '') {
        popup.style.display = 'block';
        setTimeout(() => popup.style.display = 'none', 2500);
      } else {
        window.location.href = '../index.html'; // redirect to your home page
      }
    });
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
    

