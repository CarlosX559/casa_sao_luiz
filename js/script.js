const animations = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animation_scroll() {
  const area_window = window.innerHeight * 0.21 * 3.8;

  animations.forEach((element) => {
    let posicaoAtual = element.getBoundingClientRect().top;

    if (area_window > posicaoAtual) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

if (animations.length) {
  window.addEventListener("scroll", animation_scroll);
}

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

function form() {

    let radio = document.querySelectorAll('input[type="radio"]');
    let label = document.querySelector('.area_envio label');
    radio.forEach( (element) => {
        element.addEventListener( 'click', () => {
            element.value == 'Trabalhe Conosco' ? label.style.display = 'flex': label.style.display = 'none';
        });
    });
}
form();

function filters() {

    const area_select = document.querySelectorAll(".area_select");
    const drop_down = document.querySelectorAll(".drop_down");

    for (let i = 0; i < area_select.length; i++) {

        area_select[i].addEventListener("click", () => {

            if (area_select[i].classList.contains("close")) {
                area_select[i].classList.toggle("close");
                drop_down[i].classList.toggle("open");
             
            } else {
                area_select[i].classList.add("close");
                drop_down[i].classList.add("open");  
            }
        });

    }
}
filters();

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