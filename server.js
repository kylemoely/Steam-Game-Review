const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({});
const routes = require('./controllers');

const PORT = process.env.PORT || 3001;
const app = express();

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);


sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening at localhost:${PORT}`));
    console.log(PORT);
})