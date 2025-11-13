 
 
 
 document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.card');
            const overlay = document.getElementById('overlay');
            const expandedImg = document.getElementById('expandedImg');
            const expandedTitle = document.getElementById('expandedTitle');
            const expandedDesc = document.getElementById('expandedDesc');
            const closeBtn = document.getElementById('closeBtn');
            const filterButtons = document.querySelectorAll('.filter-btn');
            const downloadPdfBtn = document.getElementById('downloadPdfBtn'); // Get the new PDF button

            // Specifications elements
            const specCapacity = document.getElementById('specCapacity');
            const specFinish = document.getElementById('specFinish');
            const specMaterial = document.getElementById('specMaterial');
            const specColor = document.getElementById('specColor');
            
            // --- Floating Particle Generation ---
            const heroParticles = document.getElementById('heroParticles');
            const numParticles = 15;
            for (let i = 0; i < numParticles; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.floor(Math.random() * 30) + 10; 
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                
                particle.style.animationDelay = `-${Math.random() * 15}s`;
                particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
                
                heroParticles.appendChild(particle);
            }

            // --- Modal Open/Close Logic ---
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    const imgSrc = card.querySelector('img').src;
                    const title = card.getAttribute('data-title');
                    const desc = card.getAttribute('data-desc');
                    const pdfLink = card.getAttribute('data-pdf-link'); // Get PDF link

                    // Retrieve detailed specifications from the card
                    const capacity = card.getAttribute('data-capacity');
                    const finish = card.getAttribute('data-finish');
                    const material = card.getAttribute('data-material');
                    const color = card.getAttribute('data-color');


                    expandedImg.src = imgSrc;
                    expandedTitle.textContent = title;
                    expandedDesc.textContent = desc;

                    // Populate the specifications section
                    specCapacity.textContent = capacity;
                    specFinish.textContent = finish;
                    specMaterial.textContent = material;
                    specColor.textContent = color;
                    
                    // Set the dynamic PDF link
                    downloadPdfBtn.href = pdfLink;


                    overlay.classList.add('active');
                    document.body.classList.add('no-scroll'); 
                });
            });

            const closeOverlay = () => {
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll'); 
            };

            closeBtn.addEventListener('click', closeOverlay);

            overlay.addEventListener('click', (e) => {
                // Only close if clicking on the backdrop (not the expanded card itself)
                if (e.target === overlay) {
                    closeOverlay();
                }
            });

            // Allow closing with the Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && overlay.classList.contains('active')) {
                    closeOverlay();
                }
            });

            // --- Product Filtering Functionality ---
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filterValue = button.getAttribute('data-filter');

                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    cards.forEach((card, index) => {
                        // Check if 'all' filter is active OR if the card contains the current filter class
                        const isFiltered = (filterValue === 'all' || card.classList.contains(filterValue));
                        
                        if (isFiltered) {
                            card.classList.remove('hidden');
                            // Reapply fade-in animation for filtered items
                            card.style.opacity = 0;
                            card.style.animation = `fadeIn 0.5s ease-out ${0.07 * index}s forwards`;
                        } else {
                            card.classList.add('hidden');
                            card.style.animation = 'none'; // Stop fade-in animation on hidden items
                        }
                    });
                });
            });
            
            // --- Initial Fade-In Animation ---
            cards.forEach((el, index) => {
                el.style.opacity = 0;
                el.style.animation = `fadeIn 0.5s ease-out ${0.07 * index}s forwards`;
            });
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
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.pack-unit-card');
            const overlay = document.getElementById('packProductOverlay');
            const expandedImg = document.getElementById('packExpandedProductImg');
            const expandedTitle = document.getElementById('packModalTitle');
            const expandedDesc = document.getElementById('packModalDescription');
            const closeBtn = document.getElementById('packCloseModalBtn');
            const filterButtons = document.querySelectorAll('.pack-filter-action-button');
            const downloadPdfBtn = document.getElementById('packDownloadPdfButton'); // Get the new PDF button

            // Specifications elements
            const specCapacity = document.getElementById('packSpecCapacity');
            const specFinish = document.getElementById('packSpecFinish');
            const specMaterial = document.getElementById('packSpecMaterial');
            const specColor = document.getElementById('packSpecColor');
            
            // --- Floating Particle Generation ---
            const heroParticles = document.getElementById('packHeroParticles');
            const numParticles = 15;
            for (let i = 0; i < numParticles; i++) {
                const particle = document.createElement('div');
                particle.classList.add('pack-particle-element');
                
                const size = Math.floor(Math.random() * 30) + 10; 
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                
                particle.style.animationDelay = `-${Math.random() * 15}s`;
                particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
                
                heroParticles.appendChild(particle);
            }

            // --- Modal Open/Close Logic ---
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    const imgSrc = card.querySelector('img').src;
                    const title = card.getAttribute('data-title');
                    const desc = card.getAttribute('data-desc');
                    const pdfLink = card.getAttribute('data-pdf-link'); // Get PDF link

                    // Retrieve detailed specifications from the card
                    const capacity = card.getAttribute('data-capacity');
                    const finish = card.getAttribute('data-finish');
                    const material = card.getAttribute('data-material');
                    const color = card.getAttribute('data-color');


                    expandedImg.src = imgSrc;
                    expandedTitle.textContent = title;
                    expandedDesc.textContent = desc;

                    // Populate the specifications section
                    specCapacity.textContent = capacity;
                    specFinish.textContent = finish;
                    specMaterial.textContent = material;
                    specColor.textContent = color;
                    
                    // Set the dynamic PDF link
                    downloadPdfBtn.href = pdfLink;


                    overlay.classList.add('pack-active-modal');
                    document.body.classList.add('pack-no-scroll'); 
                });
            });

            const closeOverlay = () => {
                overlay.classList.remove('pack-active-modal');
                document.body.classList.remove('pack-no-scroll'); 
            };

            closeBtn.addEventListener('click', closeOverlay);

            overlay.addEventListener('click', (e) => {
                // Only close if clicking on the backdrop (not the expanded card itself)
                if (e.target === overlay) {
                    closeOverlay();
                }
            });

            // Allow closing with the Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && overlay.classList.contains('pack-active-modal')) {
                    closeOverlay();
                }
            });

            // --- Product Filtering Functionality ---
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filterValue = button.getAttribute('data-filter');

                    filterButtons.forEach(btn => btn.classList.remove('pack-active-filter'));
                    button.classList.add('pack-active-filter');

                    cards.forEach((card, index) => {
                        // Check if 'all' filter is active OR if the card contains the current filter class
                        const isFiltered = (filterValue === 'all' || card.classList.contains(filterValue));
                        
                        if (isFiltered) {
                            card.classList.remove('pack-hidden-item');
                            // Reapply fade-in animation for filtered items
                            card.style.opacity = 0;
                            card.style.animation = `fadeIn 0.5s ease-out ${0.07 * index}s forwards`;
                        } else {
                            card.classList.add('pack-hidden-item');
                            card.style.animation = 'none'; // Stop fade-in animation on hidden items
                        }
                    });
                });
            });
        });
   
            
         
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.pack-unit-card');
            const overlay = document.getElementById('packProductOverlay');
            const expandedImg = document.getElementById('packExpandedProductImg');
            const expandedTitle = document.getElementById('packModalTitle');
            const expandedDesc = document.getElementById('packModalDescription');
            const closeBtn = document.getElementById('packCloseModalBtn');
            const filterButtons = document.querySelectorAll('.pack-filter-action-button');
            const downloadPdfBtn = document.getElementById('packDownloadPdfButton'); // Get the new PDF button

            // Specifications elements
            const specCapacity = document.getElementById('packSpecCapacity');
            const specFinish = document.getElementById('packSpecFinish');
            const specMaterial = document.getElementById('packSpecMaterial');
            const specColor = document.getElementById('packSpecColor');
            
            // --- Floating Particle Generation ---
            const heroParticles = document.getElementById('packHeroParticles');
            const numParticles = 15;
            for (let i = 0; i < numParticles; i++) {
                const particle = document.createElement('div');
                particle.classList.add('pack-particle-element');
                
                const size = Math.floor(Math.random() * 30) + 10; 
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                
                particle.style.animationDelay = `-${Math.random() * 15}s`;
                particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
                
                heroParticles.appendChild(particle);
            }

            // --- Modal Open/Close Logic ---
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    const imgSrc = card.querySelector('img').src;
                    const title = card.getAttribute('data-title');
                    const desc = card.getAttribute('data-desc');
                    const pdfLink = card.getAttribute('data-pdf-link'); // Get PDF link

                    // Retrieve detailed specifications from the card
                    const capacity = card.getAttribute('data-capacity');
                    const finish = card.getAttribute('data-finish');
                    const material = card.getAttribute('data-material');
                    const color = card.getAttribute('data-color');


                    expandedImg.src = imgSrc;
                    expandedTitle.textContent = title;
                    expandedDesc.textContent = desc;

                    // Populate the specifications section
                    specCapacity.textContent = capacity;
                    specFinish.textContent = finish;
                    specMaterial.textContent = material;
                    specColor.textContent = color;
                    
                    // Set the dynamic PDF link
                    downloadPdfBtn.href = pdfLink;


                    overlay.classList.add('pack-active-modal');
                    document.body.classList.add('pack-no-scroll'); 
                });
            });

            const closeOverlay = () => {
                overlay.classList.remove('pack-active-modal');
                document.body.classList.remove('pack-no-scroll'); 
            };

            closeBtn.addEventListener('click', closeOverlay);

            overlay.addEventListener('click', (e) => {
                // Only close if clicking on the backdrop (not the expanded card itself)
                if (e.target === overlay) {
                    closeOverlay();
                }
            });

            // Allow closing with the Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && overlay.classList.contains('pack-active-modal')) {
                    closeOverlay();
                }
            });

            // --- Product Filtering Functionality ---
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filterValue = button.getAttribute('data-filter');

                    filterButtons.forEach(btn => btn.classList.remove('pack-active-filter'));
                    button.classList.add('pack-active-filter');

                    cards.forEach((card, index) => {
                        // Check if 'all' filter is active OR if the card contains the current filter class
                        const isFiltered = (filterValue === 'all' || card.classList.contains(filterValue));
                        
                        if (isFiltered) {
                            card.classList.remove('pack-hidden-item');
                            // Reapply fade-in animation for filtered items
                            card.style.opacity = 0;
                            card.style.animation = `fadeIn 0.5s ease-out ${0.07 * index}s forwards`;
                        } else {
                            card.classList.add('pack-hidden-item');
                            card.style.animation = 'none'; // Stop fade-in animation on hidden items
                        }
                    });
                });
            });
            
            // --- Initial Fade-In Animation ---
            cards.forEach((el, index) => {
                el.style.opacity = 0;
                el.style.animation = `fadeIn 0.5s ease-out ${0.07 * index}s forwards`;
            });
        });
    