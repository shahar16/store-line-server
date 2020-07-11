const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    
    try {
        const token = req.get("Authorization").split(" ")[1];
        if (!token) {
            throw new Error("Token did not sent properly in the request. please make sure that the token is like 'Bearer {TOKEN}'");
        }
        let decodedToken = jwt.verify(token, "GuyRonenIsMyBestFriend");
        req.userEmail = decodedToken.email;
        next();
    } catch (err) {
        err.message = err.message || 'Error with Admin token isAuth.';
        next(err);
    }
};
