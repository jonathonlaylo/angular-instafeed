/*jshint esversion: 6 */
import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {InstaFeedState, InstaFeedCtrl, InstaFeedServiceName, InstaFeedService} from './instafeed';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
  };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .config(($stateProvider) =>{
    $stateProvider
      .state(InstaFeedState.name, InstaFeedState);
  })
  .run(($state) => {
    $state.go(InstaFeedState.name);
  })
  .directive('app', app)
  .service(InstaFeedServiceName, InstaFeedService)
  .controller(InstaFeedState.controller, InstaFeedCtrl);

export default MODULE_NAME;