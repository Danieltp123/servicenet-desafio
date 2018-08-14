module.exports = function(application) {
	
	application.get('/contas', function(req, res){
		application.app.controllers.contas.contas(application, req, res);		
	});


};