function menu(){
    $(".menu_mobile_open").click(
        function(){
            
            $('.menu_mobile').css( 'display', 'flex' ).css( 'top', '80px' ).css( 'animation', 'move ease-in 400ms' );
            setTimeout( ()=> {
                $('.menu_mobile_open').css( 'display', 'none' );
                $('.menu_mobile_close').css( 'display', 'flex' );
            }, 200 );
        }  
    );

    $(".menu_mobile_close").click(
        function() {
            $('.menu_mobile').css( 'top', '-600%' ).css('animation', 'move ease-out 400ms;' );
            setTimeout( () => {
                if($('.menu_mobile').css('top', '-600%')) {
                    $('.menu_mobile').css('display', 'none');
                }
            }, 600);

            setTimeout( ()=> {
                $('.menu_mobile_open').css( 'display', 'flex' );
                $('.menu_mobile_close').css( 'display', 'none' );
            }, 100 );
            
        }
        
    );
}
menu();

function modal() {

    let galery = document.querySelectorAll('.area_galery img');

    galery.forEach((element) => {

        element.addEventListener('click', () => {

            document.querySelector('.area_modal_galery img').src = element.getAttribute('src');
            document.querySelector('.modal_galery').style.display = 'flex';
            //console.log(element.getAttribute('src'));
        });

    });

}
//modal();

function faq() {

    const quest = document.querySelectorAll(".faq_quests");
    const aswer = document.querySelectorAll(".aswer");
    const img_icon = document.querySelectorAll('.quest img');

    for (let i = 0; i < quest.length; i++) {
       
        quest[i].addEventListener("click", () => {

            if( quest[i].classList.contains("close") ) {
                quest[i].classList.toggle("close");
                aswer[i].classList.toggle("open");
                img_icon[i].src ='img/+.png';
            }else {
                quest[i].classList.add("close");
                aswer[i].classList.add("open");
               
                img_icon[i].src ='img/-.png';
            }


        });

    }


}
faq();