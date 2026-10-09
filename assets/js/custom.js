"use strict";

jQuery(function ($) {
  $('#navbarMain')
    .on('show.bs.collapse', function () { $('.navbar').removeClass('navbar-translucent'); })
    .on('hidden.bs.collapse', function () { $('.navbar').addClass('navbar-translucent'); });
});
