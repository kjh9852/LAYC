(() => {
    const itemColor = document.querySelectorAll('.color_item > a');
    const reset = document.querySelector('.reset_btn > button');
    const title = document.querySelector('.filter_title');
    const filterBox = document.querySelector('.filter_box');
    const gallery = document.querySelector('.gallery');
    const galleryForm = document.querySelector('.gallery > div');

    function Fadein(index) {
        index.classList.add('active');
    }

    window.addEventListener('load', () => {
        Fadein(title);
        Fadein(gallery);
        Fadein(filterBox);
        // Filtering();
    });

    // let limit = 12;
    // let page = 1;


    // async function getItems() {
        
    //     const reponse = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`);
    //     const data = await reponse.json();
    //     return data;
 
    // }


    // async function showItmes() {
    //     const monkeyImg = await getItems();
    //     monkeyImg.forEach(monkey => {
    //         const monkeyElement = document.createElement('div');
    //         monkeyElement.classList.add('item');
    //         monkeyElement.innerHTML = `
    //         <a href="${monkey.title}">
    //             <img src="${monkey.thumbnailUrl}" alt="">
    //         </a>
    //         <p>LADY #${monkey.albumId}</p>`
    //         section.appendChild(monkeyElement);
    //     });
    // }

    // function showLoading() {
    //     const loading = document.querySelector('.loader');
    //     loading.classList.add('show');

    //     setTimeout(() => {
    //         loading.classList.remove('show');

    //         setTimeout(() => {
    //             page++;
    //             showItmes();
    //         }, 500);
    //     }, 1000);
    // }

    // showItmes();

    // window.addEventListener('scroll', () => {
    //     const { scrollTop , scrollHeight, clientHeight } = 
    //     document.documentElement;

    //     if(scrollTop + clientHeight >= scrollHeight - 6) {
    //         showLoading();
    //     }
    // });
    var section = document.querySelector('.gallery > div');

    fetch(
        `https://kjh9852.github.io/LAYC/meta.json`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        // 2
        // console.log(JSON.stringify(json));

        // 3
        filter(json);

    }).catch(function (error) {
        console.log(error);
    });


    // 3
    function filter(jsonObj) {
        var meta = jsonObj;
        // console.log(meta);
        for (let i = 0; i < meta.length; i++) {
            var div = document.createElement('div');
            var a = document.createElement('a');
            a.setAttribute('href', meta[i].hash);
            var myPara1 = document.createElement('p');
            // console.log(meta[i].attributes)
            var img = document.createElement('img');
            img.dataset.src;
            img.src = meta[i].image;
            img.loading = 'lazy';

            myPara1.textContent = `LADY #${meta[i].name}`;
            a.appendChild(img);
            div.appendChild(a);
            div.classList.add('item');
            div.setAttribute('data-num', meta[i].name);

            if (meta[i].attributes[0].value === "Special") {
                div.setAttribute('data-special', meta[i].attributes[0].value);
            }
            if (meta[i].attributes[0] && meta[i].attributes[0].value !== "Special") {
                div.setAttribute('data-background', meta[i].attributes[0].value);
            }
            if (meta[i].attributes[1] && meta[i].attributes[1].trait_type === "Face") {
                div.setAttribute('data-face', meta[i].attributes[1].value);
            } else if (meta[i].attributes[1] && meta[i].attributes[1].trait_type === "Fur") {
                div.setAttribute('data-fur', meta[i].attributes[1].value);
            }
            if (meta[i].attributes[2] && meta[i].attributes[2].trait_type === "Fur") {
                div.setAttribute('data-Fur', meta[i].attributes[2].value);
            } else if (meta[i].attributes[1] && meta[i].attributes[2].trait_type === "Face") {
                div.setAttribute('data-face', meta[i].attributes[2].value);
            }
            if (meta[i].attributes[3] && meta[i].attributes[3].trait_type === "Clothes") {
                div.setAttribute('data-clothes', meta[i].attributes[3].value);
            } else if (meta[i].attributes[3] && meta[i].attributes[3].trait_type === "Head") {
                div.setAttribute('data-head', meta[i].attributes[3].value);
            } else if (meta[i].attributes[3] && meta[i].attributes[3].trait_type === "Necklace") {
                div.setAttribute('data-necklace', meta[i].attributes[3].value);
            } else if (meta[i].attributes[3] && meta[i].attributes[3].trait_type === "Glasses") {
                div.setAttribute('data-glasses', meta[i].attributes[3].value);
            } else if (meta[i].attributes[3] && meta[i].attributes[3].trait_type === "Face") {
                div.setAttribute('data-face', meta[i].attributes[3].value);
            } else if (meta[i].attributes[3] && meta[i].attributes[3].trait_type === "Earring") {
                div.setAttribute('data-earring', meta[i].attributes[3].value);
            }

            if (meta[i].attributes[4] && meta[i].attributes[4].trait_type === "Necklace") {
                div.setAttribute('data-necklace', meta[i].attributes[4].value);
            } else if (meta[i].attributes[4] && meta[i].attributes[4].trait_type === "Glasses") {
                div.setAttribute('data-glasses', meta[i].attributes[4].value);
            } else if (meta[i].attributes[4] && meta[i].attributes[4].trait_type === "Head") {
                div.setAttribute('data-head', meta[i].attributes[4].value);
            } else if (meta[i].attributes[4] && meta[i].attributes[4].trait_type === "Earring") {
                div.setAttribute('data-earring', meta[i].attributes[4].value);
            }

            if (meta[i].attributes[5] && meta[i].attributes[5].trait_type === "Glasses") {
                div.setAttribute('data-glasses', meta[i].attributes[5].value);
            } else if (meta[i].attributes[5] && meta[i].attributes[5].trait_type === "Head") {
                div.setAttribute('data-head', meta[i].attributes[5].value);
            } else if (meta[i].attributes[5] && meta[i].attributes[5].trait_type === "Earring") {
                div.setAttribute('data-earring', meta[i].attributes[5].value);
            }

            if (meta[i].attributes[6] && meta[i].attributes[6].trait_type === "Head") {
                div.setAttribute('data-head', meta[i].attributes[6].value);
            } else if (meta[i].attributes[6] && meta[i].attributes[6].trait_type === "Earring") {
                div.setAttribute('data-earring', meta[i].attributes[6].value);
            }

            if (meta[i].attributes[7]) {
                div.setAttribute('data-earring', meta[i].attributes[7].value);
            }
            div.appendChild(myPara1);
            section.appendChild(div);

            const options = { threhold: 0.5 }
            const io = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        var image = entry.target;
                        image.src = image.dataset.src;
                        entry.target.classList.add('visible');
                        io.unobserve(image);

                    } else {
                        entry.target.classList.remove('visible');
                    }
                })
            }, options)

            document.querySelectorAll('.item').forEach((item) => io.observe(item));

            var backgrounds = "",
                faces = "",
                furs = "",
                cothess = "",
                necklaces = "",
                glassess = "",
                heads = "",
                earrings = "";

            // var background = meta[i].attributes[0].value;
            // var face = meta[i].attributes[1].value;
            // var fur = meta[i].attributes[2].value;

            // if (backgrounds.indexOf("<option value='" + background + "'>" + background + "</option>") == -1) {
            //     backgrounds += "<option value='" + background + "'>" + background + "</option>";
            // }
            // if (faces.indexOf("<option value='" + face + "'>" + face + "</option>") == -1) {
            //     faces += "<option value='" + face + "'>" + face + "</option>";
            // }
            // if (furs.indexOf("<option value='" + fur + "'>" + fur + "</option>") == -1) {
            //     furs += "<option value='" + fur + "'>" + fur + "</option>";
            // }
            // $(".filter-bg").append(backgrounds);
            // $(".filter-face").append(faces);
            // $(".filter-fur").append(furs);
        }

        var filtersObject = {};
        $(".filter").on('click', function () {
            $(this).parent().toggleClass('on');
        });

        $(".filter").on("change", function (e) {
            var filterName = $(this).data("filter"),
                filterVal = $(this).val();

            if (filterVal == "") {
                delete filtersObject[filterName];
            } else {
                filtersObject[filterName] = filterVal;
            }

            var filters = "";

            for (var key in filtersObject) {
                if (filtersObject.hasOwnProperty(key)) {
                    filters += "[data-" + key + "='" + filtersObject[key] + "']";
                }
            }

            reset.addEventListener('click', () => {
                if (!filters == "") {
                    filtersObject = {};
                    $(".item").show();
                    $(".filter option").prop("selected", false);
                }
            });

            if (filters == "") {
                $(".item").show();
            } else {
                $(".item").hide();
                $(".item").hide().filter(filters).show();
            }
        });

        $(".form_control").on("input", function () {
            var inputVal = parseInt($(".form_control").val());
            $(".item").hide();
            $(".item").each(function () {
                var num = parseInt($(this).data("num"));
                if (num === inputVal) {
                    $(this).show();
                } else if (isNaN(inputVal)) {
                    $(".item").show();
                }
            });
        });
    }

    function Filtering() {
        // ImgRender();
        // BrownRender();
        // PurpleRender();
        // GreenRender();
        // skyblueRender();
        const items = document.querySelectorAll('.item');
        for (let i = 0; i < itemColor.length; i++) {
            itemColor[i].addEventListener('click', (e) => {
                e.preventDefault();
                let filter = e.target.dataset.background;
                let filter2 = e.target.dataset.face;
                let target = e.target;
                console.log(filter2);
                for (let j = 0; j < itemColor.length; j++) {
                    itemColor[j].classList.remove('active');
                }

                target.classList.add('active');
                reset.addEventListener('click', () => {
                    for (let i = 0; i < items.length; i++) {
                        items[i].style.display = 'inline-block';
                    }
                    for (let i = 0; i < itemColor.length; i++) {
                        itemColor[i].classList.remove('active');
                    }

                });
                items.forEach(i => {
                    if (i.dataset.face === filter2 && i.dataset.background === filter) {
                        i.style.display = 'inline-block';
                        console.log(i.dataset.face);
                    } else {
                        i.style.display = 'none';
                    }
                });
            });
        }
    }

})();