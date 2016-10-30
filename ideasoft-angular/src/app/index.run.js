(function() {
  'use strict';

  angular
    .module('ideaAng')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
