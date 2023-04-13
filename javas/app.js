const gamePage = document.querySelector('.game-page');
const mario = document.querySelector('.mario-outline');

let jump = () => {

    mario.style.transition = 'transform .3s linear';
    mario.style.transform = 'translateY(-15rem)';
    setTimeout(function () {
        mario.style.transform = 'translateY(0rem)';
    }, 400);

}

gamePage.addEventListener('click' , jump)

