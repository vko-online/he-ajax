ng-ajax
=======

###Angularjs ajax directive.

Simple directive used to fetch data without writing any backend query request, as directive itself makes `$http` request to provided url. `ng-ajax` is only for simple usage, implementatino is strightforward simple, just makes our life a little bit easier.

###How to use
Grab `ng-ajax.js` file from dist folder. 
Then module dependency `vko-online` to your app module:
```
angular.module('myApp', ['vko-online']);
```
Don't forget to add `<script src="url/ng-ajax.js"></script>` to your main `index.html` file.
And apply `ng-ajax` attribute to any html element like `div, p, a, label` etc. 
That's all, dead-simple.
Result will be promise which will be resolved and applied when data retrieved.
```
<div ng-ajax="http://someurl.io/getusername"></div>
```
Will return result and apply to div or any other html element, consider request as plain string result.

```<
div ng-ajax="http://someurl.io/somearray"></div>
```

If result type is an Array, will apply only first element of array

```
<div ng-ajax="http://someurl.io/someobject;name"></div>
```

Note usage of **;** splitter, used to apply object value by key `name`, only 1 use of `;` is allowed, if object doesn't have provided key, nothing will happen.

###What else

This directive was made to make easy access of user data, such as username, email, without any force. Fill free to contribute/use, MIT license.
