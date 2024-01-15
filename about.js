window.addEventListener('scroll', function () {
    const navbar = document.getElementById('d1');
  
    if (window.scrollY > 100) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
  });