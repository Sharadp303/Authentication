const {googleAuth,googleAuthCallback,facebookAuth,facebookAuthCallback,} = require("../controller/socialAuth");

module.exports = function (app) {
    app.get("/auth/google", googleAuth);
    app.get("/auth/google/callback", googleAuthCallback, function (req, res) {
        res.json({ message: "Logged in" });
    });

    app.get("/auth/facebook", facebookAuth);
    app.get("/auth/facebook/callback", facebookAuthCallback, function (req, res) {
        res.json({ message: "Logged in" });
    });
};
