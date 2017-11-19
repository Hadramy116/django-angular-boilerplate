'use strict';

import routing from './settings/app.config';

// Directives
import navbar from './shared/directives/navbar';

const uirouter = 'ui.router';
const ngroute = 'ngRoute';
const resource = 'ngResource';

import movies from './components/movies';

/*
- Libraries
- Components
- Services
- Directives
*/


angular.module('boilerApp', [uirouter, ngroute, resource, // Library
  movies, // Components
  navbar// Directives
])
  .config(routing);