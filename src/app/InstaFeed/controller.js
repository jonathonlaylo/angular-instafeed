/*jshint esversion: 6 */
import {InstaFeedServiceName} from './service';

export const InstaFeedCtrl = ['$scope', InstaFeedServiceName,
  class InstaFeedCtrl {
    constructor($scope, InstaFeedService){
      this.title = 'InstaFeed!!!';
      InstaFeedService.getPosts()
      .then((result) => {
        $scope.posts = result.data.data;
        console.log(result.data);
      });
    }
  }
];