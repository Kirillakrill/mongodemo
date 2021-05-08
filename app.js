export default (express, bodyParser, fs, CORS, User, UserController) => {
    const app = express();

    app
    .use((r, res, next) => r.res.set(CORS) && next())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/user', UserController(express, User))
    .get('/login/', (req, res) => res.send('akrill9003'))
    .get('/code/', (req, res) => {
        const fileContent = fs.readFileSync("app.js", "utf-8");
        res.send(fileContent);
    })
    .all('/*', (req, res) => res.send('Working!'));

    return app;
};