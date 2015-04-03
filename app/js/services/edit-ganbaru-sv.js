;(function() {
'use strict';
/* global ganbareServices:true */
/* global path:true */

ganbareServices.factory('editGanbaru', ['$resource', function($resource) {
	return $resource(
		path + 'v1/ganbaru/:ganbaruId',
		{
			ganbaruId: '@ganbaruId',
		},
		{put: {method: 'PUT'}}
	);
}]);
})();
