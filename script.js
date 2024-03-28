const buttonStart = document.querySelector('.button-start');



const kissMyAss = document.querySelector('.kissMyAss');

document.addEventListener("DOMContentLoaded", function () {
    const music = document.querySelector(".music");
    const buttonStart = document.querySelector('.button-start');
    const kissMyAss = document.querySelector('.kissMyAss');
    const websiteContent = document.querySelector('.website-content');

    buttonStart.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            buttonStart.style.display = 'none'; 
            kissMyAss.innerHTML = 'thx for using this website'; 
            setTimeout(() => {
                kissMyAss.style.opacity = '0'; 
                setTimeout(() => {
                    kissMyAss.style.display = 'none'; 
                    websiteContent.style.opacity = '1'; 
                }, 500);
            }, 2000); 
        } else {
            music.pause();

        }
    });
});



