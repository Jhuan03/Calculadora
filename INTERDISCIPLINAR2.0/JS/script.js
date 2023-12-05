let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}
function closeMenu(){
    ul.classList.remove('open');
}

document.getElementById('scrollButton').addEventListener('click', function () {
    const targetPosition = 830; 

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; 

    let start = null;

    function animate(currentTime) {
        if (!start) start = currentTime;
        const progress = currentTime - start;
        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animate);
});

 window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.scroll-Top-button')
    scroll.classList.toggle('active', window.scrollY > 450)
 })

 function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

function backTop() {
    scrollToTop();
}


 
