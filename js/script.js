function menu() {
    $(".menu_mobile_open").click(
        function () {

            $('.menu_mobile').css('display', 'flex').css('top', '80px').css('animation', 'move ease-in 400ms');
            setTimeout(() => {
                $('.menu_mobile_open').css('display', 'none');
                $('.menu_mobile_close').css('display', 'flex');
            }, 200);
        }
    );

    $(".menu_mobile_close").click(
        function () {
            $('.menu_mobile').css('top', '-600%').css('animation', 'move ease-out 400ms;');
            setTimeout(() => {
                if ($('.menu_mobile').css('top', '-600%')) {
                    $('.menu_mobile').css('display', 'none');
                }
            }, 600);

            setTimeout(() => {
                $('.menu_mobile_open').css('display', 'flex');
                $('.menu_mobile_close').css('display', 'none');
            }, 100);

        }

    );
}
menu();

function modal() {

    let galery = document.querySelectorAll('.area_galery img');
    let close = document.querySelector('.area_close img');
    document.querySelector('.modal_galery').style.animation = '';
    galery.forEach((element) => {

        setTimeout(() => {
            element.addEventListener('click', () => {

                document.querySelector('.modal_img').src = element.getAttribute('src');
                document.querySelector('.modal_galery').style.animation = 'modal ease 400ms';
                document.querySelector('.modal_galery').style.display = 'flex';

            });

        }, 100);

    });

    close.addEventListener('click', () => {
        document.querySelector('.modal_galery').style.animation = 'modal_out ease-out 400ms';

        setTimeout(() => {
            document.querySelector('.modal_galery').style.display = 'none';
        }, 200);
    });

}
modal();

function faq() {

    const quest = document.querySelectorAll(".faq_quests");
    const aswer = document.querySelectorAll(".aswer");
    const img_icon = document.querySelectorAll('.quest img');

    for (let i = 0; i < quest.length; i++) {

        quest[i].addEventListener("click", () => {

            if (quest[i].classList.contains("close")) {
                quest[i].classList.toggle("close");
                aswer[i].classList.toggle("open");
                img_icon[i].src = 'img/+.png';
            } else {
                quest[i].classList.add("close");
                aswer[i].classList.add("open");

                img_icon[i].src = 'img/-.png';
            }


        });

    }


}
faq();