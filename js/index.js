$(document).ready(function () {

  if (typeof sessionStorage !== 'undefined') {
    var FADE_IN_DURATION = 1200
      , FADE_IN_DELAY    = 2000
      , hasFadedIn       = sessionStorage.getItem('mainContentFade')
      , $contentFadeIn   = $('#content-fade-in')
      ;

    if (hasFadedIn) {
      $contentFadeIn.show();
    } else {
      sessionStorage.setItem('mainContentFade', true);

      setTimeout(function () {
        $contentFadeIn.fadeIn(FADE_IN_DURATION);
      }, FADE_IN_DELAY);
    }
  }
});
