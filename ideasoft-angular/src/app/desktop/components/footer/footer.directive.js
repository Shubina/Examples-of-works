(function() {
  'use strict';

  angular
    .module('ideaAng')
    .directive('footerDir', footerDir);

  /** @ngInject */
  function footerDir() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/desktop/components/footer/footer.html',
      scope: {
          creationDate: '='
      },
      controller: FooterController,
      controllerAs: 'footer',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController() {
      var vm = this;

      
    }
  }

})();
