he-ajax
=======
Part of [Helium](https://github.com/vko-online/helium)
###Angularjs ajax directive.

Simple directive used to fetch data without writing any backend query request, as directive itself makes `$http` request to provided url, applies to scope or stright to DOM with specified `key` for response data. `ng-ajax` is only for simple usage, implementation is strightforward simple, just makes our life a little bit easier.

###How to use
Grab `he-ajax.js` file from dist folder. 
Then module dependency `vko-online` to your app module:
```html
angular.module('myApp', ['helium']);
```
Don't forget to add `<script src="url/he-ajax.js"></script>` to your main `index.html` file.

And apply `he-ajax` attribute to any html element like `div, p, a, label` etc. 

That's all, dead-simple.

Result will be promise which will be resolved and applied when data retrieved.
Don't worry about FOC, althought directive is simple, it's smart enought and won't show it.
```html
<div he-ajax="{url: 'http://jsonplaceholder.typicode.com/users/1/name'}"></div>
```
<sup>Returns result and applies html element, consider request as plain string result.</sup>

```html
<div he-ajax="{url: 'http://jsonplaceholder.typicode.com/users/1', key: 'name'}"></div>
```
<sup>Consider request as object result. Note: `key` - will be applied to reponse data</sup>

```html
  <div he-ajax="{url: 'http://jsonplaceholder.typicode.com/users/1', scope: 'user'}">
  	<h3>{{user.name}}</h3>
  </div>
```
<sup>When data fetches, result applied to `scope.user`, then it can be used as any other scope model</sup>

###What else

This directive was made to make easy access for user data, such as username, email, without any force, useful for static urls.

Feel free to contribute/use, MIT license.
