anglar-HttpDataURL
==================

Example:
```javascript
app.config(["$httpProvider", function($httpProvider) {
	$httpProvider.interceptors.push('HttpDataURL');
}]);

app.controller("MainCtrl", ["$scope", "$http", function($scope, $http) {
	$scope.src = $http.get("example.com/image.png", {responseType: 'dataURL'})
	localStorage.setItem("cachedImage", $scope.src);
}]);
```
