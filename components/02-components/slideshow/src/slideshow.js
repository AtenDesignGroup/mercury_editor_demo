//
//  @file
//  Components - Slideshow
//

import Splide from '@splidejs/splide';

(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.mercuryEditorSlideshow = {
    attach(context) {
      const slideshows = once('c-slideshow', '.c-slideshow', context);

      slideshows.forEach((slideshow) => {
        const slideshowOptions = {
          type: 'loop',
          arrows: true,
          pagination: true,
        };
        
        const splide = new Splide(slideshow, slideshowOptions);
        splide.mount();
      });
    },
  };
})(Drupal, once);
