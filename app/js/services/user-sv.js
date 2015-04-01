;(function(){
'use strict';

/* Services */

/*
* Service pin Ganbaru
*/
ganbareServices.factory('user', ['$resource',
  	function($resource) {
  	return $resource(
    	path + 'v1/users/:id',
    	{id: "@id"},
    	{
    	getUser: {
    		method: 'GET'
    	},
    	uploadAvatar: {
    		method: 'POST',
            url: path + 'v1/users/:id/avatars'
    	},
        updateUser: {
            method: 'PUT'
        },
        login: {
            method: 'POST',
            url: path + 'v1/sessions'
        },
        logout: {
            method: 'DELETE',
            url: path + 'v1/sessions/:token'
        }
  	});
}]);
})();