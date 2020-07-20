module.exports = (sequelize, Sequelize) => {
	const WebLead = sequelize.define('webLead', {
		nameFirst: {
			type: Sequelize.STRING
		},
		nameLast: {
			type: Sequelize.STRING
		},
		nameFull: {
			type: Sequelize.STRING
		},
		phone: {
			type: Sequelize.STRING
		},
		emailAddress: {
			type: Sequelize.STRING
		},
		emailMsgSubject: {
			type: Sequelize.STRING
		},
		emailMsgBody: {
			type: Sequelize.STRING
		},
		receiveUpdates: {
			type: Sequelize.BOOLEAN
		}
	});

	return WebLead;
};
