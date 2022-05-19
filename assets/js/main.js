(() => {
    let yOffset = 0;
    const header = document.querySelector('header');
    const conatiner = document.querySelector('.container');
    const gloNav = $('.glo_nav > ul > li');
    const mgloNav = $('.mglo_nav > ul > li');
    let wWidth = window.innerWidth;
    const section = document.querySelectorAll('section')

    function Fadein(index) {
        scrollTo(0,0);
        index.classList.add('active');
    }

    $('.mobile_btn').click(function(){
        $('.mglo_nav').slideToggle();
    });
    
    function NavAni(index){
        for (let i = 0; i < index.length - 3; i++) {
            const currnetTop = section[i].offsetTop;
            index[i].addEventListener('click',(e) => {
                scrollTo({
                    top: `${currnetTop}`,
                    left: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    window.addEventListener('scroll',() => {
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