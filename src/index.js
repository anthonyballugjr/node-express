const app = require('./app');
const http = require('http').Server(app);
const db = require('./models');

const port = process.env.PORT || 3001;

db.sequelize.sync()
	.then(() => {
		http.listen(port, () => {
			console.log(`listening on http://localhost:${port}`);
		});
	})
	.catch(err => console.log('Database Connection Error!'));
