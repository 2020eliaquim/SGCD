const btnBurger = document.querySelector('#icon-burger'),
btnArrow = document.querySelector('#icon-arrow'),
sideMenu = document.querySelector('#side-menu'),
btnDocument = document.querySelector('#container');


function showIcon() {
    if(btnBurger.classList.contains('icon--show')) {
        sideMenu.style.left = "0px";

        btnBurger.classList.remove('icon--show');
        btnBurger.classList.add('icon--hide');

        btnArrow.classList.remove('icon--hide');
        btnArrow.classList.add('icon--show');
    } else {
        sideMenu.style.left = "-200px";

        btnBurger.classList.remove('icon--hide');
        btnBurger.classList.add('icon--show');

        btnArrow.classList.remove('icon--show');
        btnArrow.classList.add('icon--hide');
    }
}

function hideBar() {
    sideMenu.style.left = "-200px";

    btnBurger.classList.remove('icon--hide');
    btnBurger.classList.add('icon--show');

    btnArrow.classList.remove('icon--show');
    btnArrow.classList.add('icon--hide');
}

btnBurger.addEventListener('click', showIcon);
btnArrow.addEventListener('click', showIcon);
btnDocument.addEventListener('click', hideBar);

const menuAccount = document.querySelector('.menu-header'),
btnAccount = document.querySelector('#btn-account');

function showMenuAccount() {
    if(menuAccount.style.display == 'block') {
        menuAccount.style.display = 'none';
    } else {
        menuAccount.style.display = 'block';
        menuNotify.style.display = 'none';
    }
}

function closedMenuAccount() {
    menuAccount.style.display = 'none';
}

btnAccount.addEventListener('click', showMenuAccount);
btnDocument.addEventListener('click', closedMenuAccount);

const menuNotify = document.querySelector('.notification'),
btnNotify = document.querySelector('#btn-notify');

function showNotification() {
    if(menuNotify.style.display == 'block') {
        menuNotify.style.display = 'none';
    } else {
        menuNotify.style.display = 'block';
        menuAccount.style.display = 'none';
    }
}

function closedNotification() {
    menuNotify.style.display = 'none';
}

btnNotify.addEventListener('click', showNotification);
btnDocument.addEventListener('click', closedNotification);