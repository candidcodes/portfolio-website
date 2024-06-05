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