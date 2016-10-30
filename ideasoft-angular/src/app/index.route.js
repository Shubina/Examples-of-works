(function() {
	'use strict';

	angular
		.module('ideaAng')
		.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: function () {
					if(window.innerWidth <= 800 && window.innerHeight <= 600) {
						return 'app/mobile/mobile.html';
					} else {
						return 'app/desktop/desktop.html';
					}
				},
				controller: 'MainController',
				controllerAs: 'main'
			})
			.state('portfolio', {
				url: '/portfolio',
				templateUrl: 'app/desktop/components/portfolio/portfolio.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'app/desktop/components/about/about.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			.state('blog', {
				url: '/blog',
				templateUrl: 'app/desktop/components/blog/blog.html',
				controller: 'MainController',
				controllerAs: 'main'
			});

		$urlRouterProvider.otherwise('/');
	}

})();
