$(document).ready(function () {
    $.ajax({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest',
        params: {
            method: 'flickr.photosets.getList',
            api_key: 'aa97f39fc7ff944178ebd92711b9ab35',
            format: "json",
            nojsoncallback: 1
        }

    }).success(function(data) {
        console.log('yes');
        console.log(data);
        // $scope.albums = data.photosets.photoset;
        // callback($scope.albums, sizeNum, $scope.getPhoto);
        
    }).error(function(error) {
        console.log('fuck');
        console.error(error);
    })
     var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
        console.log(data);
    });
})


