// more mysql info https://www.npmjs.com/package/mysql
// more on tutorial: https://bezkoder.com/node-js-express-sequelize-mysql/
module.exports = {
	HOST: 'localhost',
	USER: 'db_kgr',
	PASSWORD: 'E7h4iWupTuUE75X',
	DB: 'db_kgr',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};
