(() => {
    let yOffset = 0;
    const header = document.querySelector('header');
    const container = document.querySelector('.container');
    const gloNav = $('.glo_nav > ul > li');
    const mgloNav = $('.mglo_nav > ul > li');
    let wWidth = window.innerWidth;
    const sec01 = document.querySelector('.sec01 .content01');
    const sec03 = document.querySelector('.sec03 .content01');
    const buy = document.querySelectorAll('.buy');
    const team = document.querySelectorAll('.team');
    const topBtn = document.querySelector('.top_btn');

    function Fadein(index) {
        scrollTo(0, 0);
        index.classList.add('active');
    }

    $('.mobile_btn').click(function () {
        $('.mglo_nav').slideToggle();
    });

    function scrollSmooth() {
        buy.forEach(i=>{
            i.addEventListener('click',(e) => {
                e.preventDefault();
                const sec01Offset = sec01.offsetTop;
                console.log(sec01Offset);
                scrollTo({
                    top: `${sec01Offset}`,
                    left: 0,
                    behavior: 'smooth'
                });
            });
        });
        team.forEach(i=>{
            i.addEventListener('click',(e) => {
                const sec03Offset = sec03.offsetTop;
                console.log(sec03Offset);
                scrollTo({
                    top: `${sec03Offset}`,
                    left: 0,
                    behavior: 'smooth'
                });
            });
        });
    };

    window.addEventListener('load', () => {
        Fadein(container);
        scrollSmooth();
        if (Fadein) {
            setTimeout(() => {
                document.querySelector('html').scrollTop = 0;
            }, 10);
        }
    });
    window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
})();