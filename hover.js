// hover.js: Adds hover effect to game icons
const gameImages = document.querySelectorAll('.game img');

gameImages.forEach(image => {
    image.addEventListener('mouseenter', function() {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.2s';
    });
    image.addEventListener('mouseleave', function() {
        image.style.transform = 'scale(1)';
    });
});
