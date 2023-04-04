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
    let area = document.querySelector('.area_arquivo');
    radio.forEach( (element) => {
        element.addEventListener( 'click', () => {
            element.value == 'Trabalhe Conosco' ? area.style.display = 'flex': area.style.display = 'none';
        });
    });
}
form();

function modais() {

    let equipe = document.querySelectorAll('.card');

    equipe.forEach((element) => {

        element.addEventListener('click', () => {
            //Criar modal para as 4 equipes
            //console.log(element.classList.value);

            switch (element.classList.value) {
                case 'img_equipe_1 card':
                    setTimeout(() => {
                        document.querySelector('.modal_saude').style.animation = 'modal ease-in 400ms';
                        document.querySelector('.modal_saude').style.display = 'flex';
                    }, 200);
                    break;
                case 'img_equipe_2 card':
                    setTimeout(() => {
                        document.querySelector('.modal_multi').style.animation = 'modal ease-in 400ms';
                        document.querySelector('.modal_multi').style.display = 'flex';
                    }, 200);
                    break;
                case 'img_equipe_3 card':
                    setTimeout(() => {
                        document.querySelector('.modal_admin').style.animation = 'modal ease-in 400ms';
                        document.querySelector('.modal_admin').style.display = 'flex';
                    }, 200);
                    break;
                case 'img_equipe_4 card':
                    setTimeout(() => {
                        document.querySelector('.modal_diretores').style.animation = 'modal ease-in 400ms';
                        document.querySelector('.modal_diretores').style.display = 'flex';
                    }, 200);
                    break;
            }

            //Modal interno com informações de cada profissional

            let modais = document.querySelectorAll('.item .saiba_mais');
            document.querySelector('.modal_profissionais').style.animation = '';
            modais.forEach((element) => {

                element.addEventListener('click', () => {
                    document.querySelector('.modal_profissionais').style.animation = 'modal ease-in 400ms';
                    document.querySelector('.modal_profissionais').style.display = 'flex';
                    document.querySelector('.area_modal_profissionais img').src =  element.getAttribute('src');
                    document.querySelector('.title_modal_profissionais h2').innerHTML = element.getAttribute('data_name');
                    document.querySelector('.modal_profissao h2').innerHTML = element.getAttribute('data_profissao');
                    document.querySelector('.sub_title_modal_profissionais p').innerHTML = element.getAttribute('data_info');

                });

            });

        });

    });

    let close = document.querySelectorAll('.close_modal img');

    close.forEach((element) => {

        element.addEventListener('click', () => {
            document.querySelector('.modal_saude').style.animation = 'modal_out ease-out 400ms';
            document.querySelector('.modal_multi').style.animation = 'modal_out ease-out 400ms';
            document.querySelector('.modal_admin').style.animation = 'modal_out ease-out 400ms';
            document.querySelector('.modal_diretores').style.animation = 'modal_out ease-out 400ms';
            setTimeout(() => {
                document.querySelector('.modal_saude').style.display = 'none';
                document.querySelector('.modal_multi').style.display = 'none';
                document.querySelector('.modal_admin').style.display = 'none';
                document.querySelector('.modal_diretores').style.display = 'none';
            }, 200);
        });

    });


    let close_modal_profissionais = document.querySelector('.close_modal_int');

    close_modal_profissionais.addEventListener('click', () => {
        document.querySelector('.modal_profissionais').style.animation = 'modal_out ease-out 400ms';

        setTimeout(() => {
            document.querySelector('.modal_profissionais').style.display = 'none';
        }, 200);
    });

}

modais();

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

