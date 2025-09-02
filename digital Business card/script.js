// Card flip functionality
document.addEventListener('DOMContentLoaded', function() {
    const cardFront = document.querySelector('.card-front');
    const cardBack = document.querySelector('.card-back');
    const flipBtn = document.getElementById('flipBtn');
    const flipBackBtn = document.getElementById('flipBackBtn');

    flipBtn.addEventListener('click', function() {
        cardFront.style.transform = 'rotateY(180deg)';
        cardBack.style.transform = 'rotateY(0deg)';
    });

    flipBackBtn.addEventListener('click', function() {
        cardFront.style.transform = 'rotateY(0deg)';
        cardBack.style.transform = 'rotateY(180deg)';
    });

    // Name color change functionality
    const nameEl = document.getElementById('name');
    const colors = ['#4f8cff', '#e94f37', '#3ec300', '#ffb400', '#222'];
    let colorIndex = 0;

    nameEl.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        nameEl.style.color = colors[colorIndex];
    });

    // Welcome alert
    setTimeout(function() {
        alert('Welcome to Justin\'s digital business card!');
    }, 500);
});