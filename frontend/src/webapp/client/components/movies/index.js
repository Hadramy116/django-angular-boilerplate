
const ngroute = 'ngRoute';
const uiroute = 'ui.router';
const resource = 'ngResource';

import routing from './routes';
import controller from './controller';
import service from './service'

export default angular.module('movies', [ngroute, uiroute, resource, service])
    .config(routing)
    .controller('MovieController', controller)
    .name;