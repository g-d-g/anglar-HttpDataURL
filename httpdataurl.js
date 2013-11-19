app.factory('HttpDataURL', function($q) {
	function decode(arraybuffer, responseHeader) {
		
		var binary = '';
		var bytes = new Uint8Array( arraybuffer )
		var len = bytes.byteLength;
		for (var i = 0; i < len; i++) {
			binary += String.fromCharCode( bytes[ i ] )
		}
		
		return "data:" + responseHeader( "content-type" ) + ";base64," + window.btoa( binary );
	}

	return {
		// optional method
		request: function(config) {
			if(config.responseType == "dataURL"){
				config.responseType = "arraybuffer";
				config.transformResponse.push(decode);
			}
			// do something on success
			return config || $q.when(config);
		}
	}
});
