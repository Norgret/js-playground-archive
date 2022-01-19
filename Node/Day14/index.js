const espress = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-com').Oauth2Strategy;

const app = express();

app.use('views', './views');
app.use('view engine', 'pug');

app.use(session({
	secret: 'password',
	saveUninitialized: false,
	resave: false,
	cookie: { maxAge: 60000 }
}));

app.use(passport.initialize());
app.use(passport.session());


passport.use(new GoogleStrategy({
	clientID: '185443424486-fkumad8pjjg44erj1bkigo9bk8vbreic.apps.googleusercontent.com',
	clientSecret: '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',
	callbackURL: 'http://localhost:3000/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
	done(null, profile);
}));


passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((user, done) => {
	done(null, user);
});


const authRouter = express.Router();
app.use('/auth', authRouter);

authRouter.route('/google')
	.get(passport.authenticate('google'), {
		scope: ['https://www.googleapis.com/auth/plus.login']
	});

authRouter.route('/google/callback')
	.get(passport.authenticate('google', { failureRedirect: '/error' },
		() => {
			res.redirect('/userinfo');
		}
	));



app.get('/', (req, res) => {
	res.render(index);
});
app.get('/userinfo', (req, res) => {
	console.log(req.user);
	res.render('userinfo', { user: req.user });
});


app.listen(3000, () => {
	console.log(`*> listening at port ${3000}`);
});