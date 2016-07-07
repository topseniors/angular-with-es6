import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// Components (and directives)
import NgPane from './ng-pane.component';
import NgTabs from './ng-tabs.component';
componentsModule.component('ngPane', NgPane);
componentsModule.component('ngTabs', NgTabs);

export default componentsModule;
