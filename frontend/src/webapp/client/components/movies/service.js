class MovieService {
    constructor($resource) {
        /*@ngInject*/
        this.resource = $resource;
    }

    getMovies() {
        let resource = this.resource(
            '/api/movies/');
        return resource.query();
    }
}



export default angular.module('services.movies', [])
    .service('movieService', MovieService)
    .name;

