var navLinks = document.getElementById("navlinks");

function showMenu(){
    navLinks.style.right = "0";
};
function hideMenu(){
    navLinks.style.right = "-200px";
};

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.classList.contains('external')) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth' // Smooth scroll behavior
                    });
                }
            }
        });
    });
});

function openContactPage() {
    window.open('contact.html', '_blank');
  }


  let lastScrollTop = 0;

  window.addEventListener("scroll", function() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      let headerSection = document.querySelector(".header");
  
      if (headerSection) {
          let headerBottom = headerSection.offsetTop + headerSection.offsetHeight;
  
          if (currentScroll > lastScrollTop) {
              // Downscroll code
              document.querySelector("nav").classList.add("scrolled");
              document.querySelector("nav img").classList.add("hidden");
          } else {
              // Upscroll code
              if (currentScroll <= headerBottom) {
                  // Show the logo and set background to transparent only within header
                  document.querySelector("nav").classList.remove("scrolled");
                  document.querySelector("nav img").classList.remove("hidden");
              } else {
                  // Hide the logo and set background to green when scrolling up outside header
                  document.querySelector("nav").classList.add("scrolled");
                  document.querySelector("nav img").classList.add("hidden");
              }
          }
      }
  
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  }, { passive: true });
  
  // Initial check on page load
  window.addEventListener('load', function() {
      handleLogoVisibility();
  });
  
  function handleLogoVisibility() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      let headerSection = document.querySelector(".header");
      if (headerSection) {
          let headerBottom = headerSection.offsetTop + headerSection.offsetHeight;
          if (currentScroll <= headerBottom) {
              document.querySelector("nav img").classList.remove("hidden");
          } else {
              document.querySelector("nav img").classList.add("hidden");
          }
      }
  }
  
