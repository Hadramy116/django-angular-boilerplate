export default class MovieController {
    constructor(movieService) {
        this.service = movieService;
        this.movies = this.getMovies();
    }

    getMovies() {
        return this.service.getMovies()
    }
}

MovieController.$inject = ['movieService'];