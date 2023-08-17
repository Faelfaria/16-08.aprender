document.querySelector('.open-menu').addEventListener('click', e => {
    document.querySelector('header .menu').classList.add('open');
})
document.querySelector('.close-menu button').addEventListener('click', e => {
    document.querySelector('header .menu').classList.remove('open');
})
document.querySelector('.menu .backdrop').addEventListener('click', e => {
    document.querySelector('header .menu').classList.remove('open');
})
/*
var $doc = $('html, body');
$('.scrollSuave').click(function () {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});*/
