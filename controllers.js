
//controllers
weatherApp.controller('homeController',['$scope','cityService', function ($scope, cityService) {
		$scope.city = cityService.city;

		$scope.$watch('city', function(){
			sessionStorage.setItem('cityname', $scope.city);
		})
	}])




weatherApp.controller('forecastController',['$scope', '$http', '$resource', '$routeParams', 'cityname', 'externalService', function ($scope, $http, $resource, $routeParams, cityname, externalService) {
		$scope.city = sessionStorage.getItem('cityname');

		externalService
			.getData('GET', $scope.city, 
				function(response)
				{
					console.info(response.data);

				 	$scope.humidity = response.data.current.humidity;

				 	$scope.location = response.data.location.country;

				 	$scope.time = response.data.location.localtime;




				 	$scope.image = response.data.current;

				 	$scope.icon = response.data.current.condition.icon;
				 	$scope.text = response.data.current.condition.text;

				 	$scope.celcius = response.data.current.feelslike_c;


				}
			);

		$scope.days = $routeParams || '2';

		// console.log($scope.weatherAPI);

		// $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:2});

		// console.log($scope.weatherResult);


		$scope.convertToFahrenheit= function(degK){

			return Math.round((1.8 * (degK - 273)) + 32);
		}

		$scope.convertToDate= function(dt){

			return new Date(dt * 1000);
		}


}]);


