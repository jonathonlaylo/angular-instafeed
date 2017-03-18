/*jshint esversion: 6 */
export const InstaFeedServiceName = 'instafeed';
export const InstaFeedService = [
  '$http',
  class InstaFeedService {
    constructor($http) {
      this.$http = $http;
      this.endpoint = '/api/instafeed';
    }
    getPosts(){
      return this.$http.get(this.endpoint);
    }
  }
];