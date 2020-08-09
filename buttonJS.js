document.querySelector('.c-hamburger').addEventListener('click', function (e) {
    e.preventDefault()
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('#menu').classList.remove('nav-link');
        document.body.classList.remove('body-active');
    } else {
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-link');
        document.body.classList.add('body-active');
    }

});
