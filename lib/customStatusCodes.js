var statuses = require('statuses');
var merge = require('merge-descriptors');

module.exports = function(app, codes) {

    if(!app || typeof app !== 'object' || app.constructor.name !== 'Application'){
        throw new Error('Instance of Koa not passed to the custom status module');
    }

	if(codes && typeof codes === 'object' && Object.keys(codes).length){
        var message;
		for (var code in codes){

			if(!/^[1-9]{1}[0-9]{2}$/.test(code)) {
				throw new Error('Not a three digit numerical code: ' + code);
			}

            message = codes[code].toString()

			statuses[code] = message;
			statuses[message] = statuses[message.toLowerCase()] = code;
		}
	}

	merge(app.response, {
		set status(code) {
			if(typeof statuses[code] !== 'undefined'){
				app.response._explicitStatus = true;
				this.res.statusCode = code;
				this.res.statusMessage = statuses[code];
			}else{
				throw new Error('invalid status code: ' + code);
			}
		},

        get status() {
            return this.res.statusCode;
        }
	});

	return app;
}
