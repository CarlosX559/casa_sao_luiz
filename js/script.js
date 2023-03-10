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

