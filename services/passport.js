const passport = require("passport");
const keys = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECERET,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(accessToken, refreshToken, profile);
    }
  )
);
