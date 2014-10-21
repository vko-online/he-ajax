angular.module('helium', []).
directive('heAjax', ['$http', '$parse', '$compile', 
  function heAjaxDir($http, $parse, $compile) {
    return{
      //maybe also 'E'?
      restrict: 'A',
      compile: function heAjaxCompile(tElement, tAttrs) {
        console.log(tElement.attr('ng-cloak',''));
        var heAjax = eval( '(' + tAttrs.heAjax + ')');
        var heAjaxScope = heAjax.scope;
        var heAjaxUrl = heAjax.url;
        var heAjaxKey = heAjax.key;

        //we should do anything if url is not present
        if(!angular.isDefined(heAjaxUrl)){
          throw '"url" is not defined';
        }
        //Adding ng native bingings
        $compile.$$addBindingClass(tElement);

        return function heAjaxLink(scope, element, attr) {
          //Adding ng native bingings
          $compile.$$addBindingInfo(element, heAjaxUrl);

          //response body, should check response status?
          $http.get(heAjaxUrl).then(function(response) {
            element.removeAttr('ng-cloak');
            //priority: scope: key: DOM
            if(angular.isDefined(heAjaxScope)){
              scope[heAjaxScope] = angular.fromJson(response.data);
            }
            else if(angular.isDefined(heAjaxKey)){
              element.html(angular.fromJson(response.data)[heAjaxKey]);
            }
            else{
              element.html(angular.fromJson(response.data));
            }
          });
        };
      }
    }
  }]);






