(() => {
    let yOffset = 0;
    const header = document.querySelector('header');
    const conatiner = document.querySelector('.container');
    const gloNav = $('.glo_nav > ul > li');
    const mgloNav = $('.mglo_nav > ul > li');
    let wWidth = window.innerWidth;
    const content = document.querySelectorAll('.content01');
    const topBtn = document.querySelector('.top_btn');


    function Fadein(index) {
        scrollTo(0,0);
        index.classList.add('active');
    }

    $('.mobile_btn').click(function(){
        $('.mglo_nav').slideToggle();
    });

    function NavAni(index){
        for (let i = 0; i < index.length - 3; i++) {
            const contentTop = content[i].offsetTop;
            index[i].addEventListener('click',(e) => {
                e.preventDefault();
                scrollTo({
                    top: `${contentTop}`,
                    left: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    topBtn.addEventListener('click',(e) => {
        e.preventDefault();
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
    window.addEventListener('scroll',() => {
        let yOffset = window.pageYOffset;
        if(yOffset > 100) {
            topBtn.classList.add('active');
        }else {
            topBtn.classList.remove('active');
        }
    });

    window.addEventListener('load', () => {
        Fadein(conatiner);
        NavAni(mgloNav);
        NavAni(gloNav);
        if(Fadein) {
            setTimeout(()=> {
                document.querySelector('html').scrollTop = 0;
            },10);
        }
    });
})();