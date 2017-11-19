routing.$inject = ['$urlRouterProvider', '$locationProvider', '$routeProvider', '$resourceProvider', "$httpProvider", "$interpolateProvider"];

export default function routing($urlRouterProvider, $locationProvider, $routeProvider, $resourceProvider, $httpProvider, $interpolateProvider) {
    $urlRouterProvider.otherwise('/');

    // Resource Provider
    $resourceProvider.defaults.stripTrailingSlashes = false;

    // CSRF
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    // Interpolarate
    $interpolateProvider.startSymbol('[{');
    $interpolateProvider.endSymbol('}]');
}
