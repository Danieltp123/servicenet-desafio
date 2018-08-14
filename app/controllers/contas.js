module.exports.contas = function(application, req, res){
	var connection = application.config.dbConnection();
	var contasModel = new application.app.models.contasDAO(connection);

	contasModel.getContas(function(error, result){
		res.render("login/login", {login : result});
	});	
}