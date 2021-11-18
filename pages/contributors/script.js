const btnPressed = document.querySelectorAll('.enployeers-control ul li');

function clickedBtn(index) {
    btnPressed[index].addEventListener('click', () => {
        btnPressed[index].style.boxShadow = 'none';
    });

    btnPressed[index].addEventListener('mouseout', () => {
        btnPressed[index].style.boxShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)';
    })
}

clickedBtn(0);
clickedBtn(1);
clickedBtn(2);