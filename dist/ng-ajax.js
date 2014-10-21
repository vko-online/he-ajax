angular.module('vko-online', []).directive('ngAjax', ['$http',
      function($http) {
        return {
          restrict: 'A',
          link: function(scope, elem, attr) {
            if (attr.ngAjax == '') {
              throw 'Url must be provided';
            }
            var splitter = ';';
            var splitted = attr.ngAjax.split(splitter);
            if (splitted.length > 2) {
              throw 'Multiple use of ";"';
            }
            var url = splitted.length > 0 ? splitted[0] : '';
            var key = splitted.length > 1 ? splitted[1] : '';
            if (url == '') {
              throw 'Empty url';
            }
            $http.get(url)
              .then(function(response) {
                if (response.data instanceof Array)
                  elem.html(response.data[0]);
                else
                if (key == '')
                  elem.html(angular.fromJson(response.data));
                else
                  elem.html(response.data[key]);
              });
          }
        }
      }
    ]);