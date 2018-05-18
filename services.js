
//services
weatherApp.service('cityService', function(){

	this.city = "New York, NY";


});

weatherApp.service('externalService', ['$http', 'api', function($http, api){
	var services = {};
	services.getData = getData;
	return services;


	function getData(method, cityname, callback)
	{
		$http({
		  method: method,
		  url: api+cityname
		})
		.then(function successCallback(response) {		    
			callback(response);
		  }, function errorCallback(response) {		    
		  	callback(response);
		  });
	}
}]);