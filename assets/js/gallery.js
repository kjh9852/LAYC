(() => {
    const itemColor = document.querySelectorAll('.color_item > a');
    const reset = document.querySelector('.reset_btn > button');
    const title = document.querySelector('.title');
    const filterBox = document.querySelector('.filter_box');
    const gallery = document.querySelector('.gallery');
    const galleryForm = document.querySelector('.gallery > div');
    const SkyeblueCount = 1;
    const GreenCount = 1;
    const BrownCount = 3;
    const PurpleCount = 4;
    // const fs = require('fs');
    // const BrownDir = './img/'

    // fs.readdir(BrownDir, (err,files) => {
    //     console.log(files,length);
    // });

    function BrownRender(){
        let itemElem;
        const p = document.createElement('p');
        for(let i = 0; i < BrownCount; i++) {
            itemElem = new Image();
            itemElem.src = `../assets/setimgs/brown/item${"0" + i }.jpg`;
            galleryForm.innerHTML += "<div class='item' data-background='brown'><a href='#'></a></div>";

            const galleryItem = document.querySelectorAll('.gallery > div > .item > a');

            for(let j = 0; j < galleryItem.length; j++) {
                galleryItem[j].appendChild(itemElem);
                galleryItem[j].append(p);
                const galleryDesc = document.querySelectorAll('.gallery > div > .item > a > p');
                galleryDesc[j].innerText = `${"LONELY APL #0"+j}`
            }
            // console.log(itemElem);
        }
    }
    function PurpleRender(){
        let itemElem;
        const p = document.createElement('p');
        for(let i = 0; i < PurpleCount; i++) {
            itemElem = new Image();
            itemElem.src = `../assets/setimgs/purple/item${"0" + i }.jpg`;
            galleryForm.innerHTML += "<div class='item' data-background='purple'><a href='#'></a></div>";

            const galleryItem = document.querySelectorAll('.gallery > div > .item > a');

            for(let j = 0; j < galleryItem.length; j++) {
                galleryItem[j].appendChild(itemElem);
                galleryItem[j].append(p);
                const galleryDesc = document.querySelectorAll('.gallery > div > .item > a > p');
                galleryDesc[j].innerText = `${"LONELY APL #0"+j}`
            }
            // console.log(itemElem);
        }
    }
    function SkublueRender(){
        let itemElem;
        const p = document.createElement('p');
        for(let i = 0; i < SkyeblueCount; i++) {
            itemElem = new Image();
            itemElem.src = `../assets/setimgs/skyblue/item${"0" + i }.jpg`;
            galleryForm.innerHTML += "<div class='item' data-background='skyblue'><a href='#'></a></div>";

            const galleryItem = document.querySelectorAll('.gallery > div > .item > a');

            for(let j = 0; j < galleryItem.length; j++) {
                galleryItem[j].appendChild(itemElem);
                galleryItem[j].append(p);
                const galleryDesc = document.querySelectorAll('.gallery > div > .item > a > p');
                galleryDesc[j].innerText = `${"LONELY APL #0"+j}`
            }
            // console.log(itemElem);
        }
    }
    function GreenRender(){
        let itemElem;
        const p = document.createElement('p');
        for(let i = 0; i < GreenCount; i++) {
            itemElem = new Image();
            itemElem.src = `../assets/setimgs/green/item${"0" + i }.jpg`;
            galleryForm.innerHTML += "<div class='item' data-background='green'><a href='#'></a></div>";

            const galleryItem = document.querySelectorAll('.gallery > div > .item > a');

            for(let j = 0; j < galleryItem.length; j++) {
                galleryItem[j].appendChild(itemElem);
                galleryItem[j].append(p);
                const galleryDesc = document.querySelectorAll('.gallery > div > .item > a > p');
                galleryDesc[j].innerText = `${"LONELY APL #0"+j}`
            }
            // console.log(itemElem);
        }
    }
    function Filtering() {
        BrownRender();
        PurpleRender();
        GreenRender();
        SkublueRender();
        const items = document.querySelectorAll('.item');
        for(let i = 0; i < itemColor.length; i++){
            itemColor[i].addEventListener('click', (e) => {
                e.preventDefault();
                let filter = e.target.dataset.background;
                let target = e.target;

                for(let j = 0; j < itemColor.length; j++){
                    itemColor[j].classList.remove('active');
                }
                target.classList.add('active');
                reset.addEventListener('click', () => {
                    for(let i = 0; i < items.length; i++) {
                        items[i].style.display = 'inline-block';
                    }
                    for(let i = 0; i < itemColor.length; i++) {
                        itemColor[i].classList.remove('active');
                    }
                    
                });
                items.forEach(i => {
                    if (i.dataset.background === filter) {
                        i.style.display = 'inline-block';
                    } else {
                        i.style.display = 'none';
                    }
                });
            });
        }
    }
    function Fadein(index) {
        index.classList.add('active');
    }
    window.addEventListener('load', () => {
        Fadein(title);
        Fadein(gallery);
        Fadein(filterBox);
        Filtering();
        Fadein();
    });
})();