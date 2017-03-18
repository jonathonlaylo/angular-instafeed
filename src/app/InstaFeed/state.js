/*jshint esversion: 6 */
const template = require('./template.html');

export const InstaFeedState = {
  name: 'instafeed',
  url: '/api/instafeed',
  template,
  controller: 'InstaFeedCtrl',
  controllerAs: 'insta'
};