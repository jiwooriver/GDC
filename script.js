document.getElementById('learnMoreBtn').addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('about').offsetTop,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPos > section.offsetTop + 100) {
            section.style.animation = 'fadeIn 1s ease';
        }
    });
});
