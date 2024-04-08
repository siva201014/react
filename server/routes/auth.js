const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

//routes for GitHub strategy
// Route to initiate the GitHub OAuth flow
router.get('/github', (req, res) => {
    // Redirect the user to GitHub's OAuth authorization endpoint
    const url = 'https://github.com/login/oauth/authorize' +
    '?client_id=' + process.env.GITHUB_ID +
    '&redirect_uri=' + encodeURIComponent('http://localhost:3000/auth/github/callback') +
    '&scope=profile';
    res.json({ redirectUrl: url });

  });
  
  // Route to handle the callback from GitHub OAuth
  router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
      // Successful authentication, redirect home or to dashboard
      
      res.redirect(`${process.env.REACT_HOST}/dashboard`);
    }
  );

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
