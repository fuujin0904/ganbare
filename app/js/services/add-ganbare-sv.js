;(function(){
'use strict';

/* global ganbareServices:true */
/* global path:true */

/*
* Service Add Ganbare
*/
ganbareServices.factory('addGanbare', ['$resource',
	function($resource) {
	return $resource(
		path + 'v1/users/:userId/ganbare',
		{userId: '@userId'},
		{
			add: {
				method: 'PUT'
			},
			deleteGanbaru: {
				method: 'DELETE',
				url: path + 'v1/ganbaru/:ganbaruId'
			}
		});
	}]);
})();
