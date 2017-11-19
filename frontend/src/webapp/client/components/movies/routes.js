routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('movies', {
            url: '/',
            template: require('./movies.html'),
            controller: 'MovieController',
            controllerAs: 'mov',
        });
}