angular
.module('ideaAng')
.factory('apiService', function($http, $q) {

  var getAll = function() {
    var defer = $q.defer();

    $http({
      method: 'GET',
      // url: '/app/main/portfolio.json'
      url: "/app/api/api.json"
    })
    .then(function (response) {
      defer.resolve(response.data);
    })
    .catch(function(reason) {
      defer.reject(reason);
    });
    return defer.promise;
  };
  return {
    getAll: getAll
  };
});