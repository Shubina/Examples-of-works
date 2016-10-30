(function() {
  'use strict';

  angular
    .module('ideaAng')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $stateParams, apiService, $window) {
    var vm = this;
        vm.items = [];
        apiService.getAll().then(function(data) {
            vm.items = data;
            vm.width = $window.screen.availWidth;
            console.log(vm.width)
        });


        // $window.onscroll = function() {
        //   var skill = angular.element(document.querySelector(".skills"));
          
        //   var animate = skill[0].getBoundingClientRect();
        //   if (animate.top > 450 && animate.top < 480 ) {
        //     skill.addClass("zoom-in");
        //     console.log(animate.top)
        // };
          
          
        };
    
    //       function isVisible(elem) {

    //   var coords = elem.getBoundingClientRect();

    //   var windowHeight = document.documentElement.clientHeight;
    //   var topVisible = coords.top > 0 && coords.top < windowHeight;
    //   var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    //   return topVisible || bottomVisible;
    // }
    // function showVisible() {
    //   var imgs = document.getElementsByTagName('img');
    //   for (var i = 0; i < imgs.length; i++) {

    //     var img = imgs[i];

    //     var realsrc = img.getAttribute('realsrc');
    //     if (!realsrc) continue;

    //     if (isVisible(img)) {
    //       img.src = realsrc;
    //       img.setAttribute('realsrc', '');
    //     }
    //   }

    // }

    // $window.onscroll = showVisible;
    // showVisible();

// }
    }
})();
