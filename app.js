stickyElem = document.querySelector("#mainHeader");
x = document.querySelector("#page-content");

   /* Gets the amount of height
   of the element from the
   viewport and adds the
   pageYOffset to get the height
   relative to the page */
   currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;

   window.onscroll = function() {

      /* Check if the current Y offset
      is greater than the position of
      the element */
      if (window.pageYOffset > currStickyPos) {
          stickyElem.classList.add('header-small');
          stickyElem.classList.remove('header-big');
          // x.classList.add('page-up');
      } else {
         stickyElem.classList.add('header-big');
         stickyElem.classList.remove('header-small');
         // x.classList.remove('page-up');
      }
   }
