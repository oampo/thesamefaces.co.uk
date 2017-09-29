var hamburger = $('.hamburger');
var navs = $('.navs');
hamburger.click(function() {
    hamburger.toggleClass('is-active');
    navs.toggleClass('navs-hidden');
});
