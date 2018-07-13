//two main Libraries
    //Passport
const passport = require('passport');
    //Passport with Oauth for Google
const GoogleStratergy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStratergy({
        //options for google stratergy
        callbackURL: '/',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    },
    () => {
        //passport callback function
        
    })
)
