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

    const quest = document.querySelectorAll(".quest");
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