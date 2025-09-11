
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
  
    alert('Obrigado pelo contato! Em breve retornaremos.');
    this.reset();
});


function revealOnScroll() {
    const elements = document.querySelectorAll('.product-item, .about, .contact');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}


document.querySelectorAll('.product-item, .about, .contact').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});


window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);