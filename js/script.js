function appCtrl ($scope) {
  $scope.bookmarks = [
    {
      title: 'Smashing Magazine',
      url: 'http://smashingmagazine.com',
      category: 'Web Design',
      likes: 2
    },
    {
      title: 'Reddit',
      url: 'http://reddit.com',
      category: 'Community',
      likes: 1
    },
    {
      title: 'CNN',
      url: 'http://cnn.com',
      category: 'News',
      likes: 10
    },
    {
      title: 'A List Apart',
      url: 'http://alistapart.com',
      category: 'Web Design',
      likes: 15
    },
    {
      title: 'CodePen',
      url: 'http://codepen.io',
      category: 'Web Design',
      likes: 3
    }
  ];
  
  $scope.increment = function ($index) {
      $scope.likes++;
   };
  
  $scope.addBookmark = function () {
	  $scope.bookmarks.push({
		  title: $scope.site_name,
		  url: $scope.site_url,
		  category: $scope.site_category,
      likes: 0
	  });
	  $scope.site_name = '';
	  $scope.site_url = '';
	  $scope.site_category = '';
  },
    
    $scope.deleteBookmark = function (id) {
        var bookmark = $scope.bookmarks[id];
        $scope.bookmarks.splice(id, 1);
    }
}