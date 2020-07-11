module.exports = (req, res, next) => {
	//TODO: delete this middleware
	try {
		req.userEmail = "dummy@email.com";
		next();
	} catch (err) {
		err.message = err.message || 'Error with Admin token isAuth.';
		next(err);
	}
};