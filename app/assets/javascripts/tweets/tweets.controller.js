(function() {
    'use strict';

    function TweetsController(TweetFactory) {

        var vm = this;

        // callable methods on the VM
        vm.name = 'You are in the Tweets app';
        vm.getTweet = getTweet;
        vm.createTweet = createTweet;
        vm.updateTweet = updateTweet;
        vm.deleteTweet = deleteTweet;


        // instantiated info
        activate();


        // defined methods
        function activate() {
            getTweets();
        }

        function getTweets() {
            return TweetFactory.getTweets()
                       .then(setTweets)
        }

        function getTweet() {

        }

        function createTweet() {
            return TweetFactory.createTweet(vm.newTweet)
                       .then(getTweets)
        }

        function updateTweet() {

        }

        function deleteTweet() {

        }

        function setTweets(data) {
            return vm.tweets = data;
        }



    };

    angular
        .module('app')
        .controller('TweetsController', TweetsController);
}());
