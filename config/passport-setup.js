//two main Libraries
    //Passport
const passport = require('passport');
    //Passport with Oauth for Google
const GoogleStratergy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user');

passport.use(
    new GoogleStratergy({
        //options for google stratergy
        callbackURL: '/google-redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
        //passport callback function

        //check if user already exists
        User.findOne({googleID: profile.id}).then((currentUser) => {
            if(currentUser){
                //already have the user
                console.log(' Already existing user \n' + currentUser );
            }else{
                new User({
                    givenName: profile.name.givenName,
                    familyName: profile.name.familyName,
                    googleID: profile.id,
                    image: profile._json.image.url,
                    email: profile.emails[0].value
                }).save()
                .then((newUser) => {
                    console.log("New user created: \n" + newUser)
                });        
            }
        })
    })
)
