import directive from './directive';
import controller from './controller';

export default angular.module('directives.navbar', [])
    .directive('navbar', directive)
    .controller('NavbarController', controller)
    .name;