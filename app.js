var stickyHeader = document.querySelector("#main-header");
var menu = document.querySelector("#main-header__content");

/* Gets the amount of height
of the element from the
viewport and adds the
pageYOffset to get the height
relative to the page */
var currHeaderPos = stickyHeader.getBoundingClientRect().top + window.pageYOffset;

window.onscroll = function() {

   /* Check if the current Y offset
   is greater than the position of
   the element */
   if (window.pageYOffset > currHeaderPos) {
       stickyHeader.classList.add('header-small');
       stickyHeader.classList.remove('header-big');
       menu.classList.add('menu-small');
       menu.classList.remove('menu-big');
   } else {
      stickyHeader.classList.add('header-big');
      stickyHeader.classList.remove('header-small');
      menu.classList.add('menu-big');
      menu.classList.remove('menu-small');
   }
}
