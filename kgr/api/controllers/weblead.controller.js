const db = require('../models');
const WebLead = db.webleads;
const Op = db.Sequelize.Op;

// Create and Save a new Web Lead
exports.create = (req, res) => {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({
			message: 'Content can not be empty!'
		});
		return;
	}

	// Create a Web Lead
	const webLead = {
		title: req.body.title,
		description: req.body.description,
		published: req.body.published ? req.body.published : false
	};

	// Save Web Lead in the database
	WebLead.create(webLead)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the Web Lead.'
			});
		});
};

// Retrieve all Web Leads from the database.
exports.findAll = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	WebLead.findAll({ where: condition })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving Web Leads.'
			});
		});
};

// Find a single Web Lead with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	WebLead.findByPk(id)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: 'Error retrieving Web Lead with id=' + id
			});
		});
};

// Update a Web Lead by the id in the request
exports.update = (req, res) => {
	const id = req.params.id;

	WebLead.update(req.body, {
		where: { id: id }
	})
		.then(num => {
			if (num == 1) {
				res.send({
					message: 'Web Lead was updated successfully.'
				});
			} else {
				res.send({
					message: `Cannot update Web Lead with id=${id}. Maybe WebLead was not found or req.body is empty!`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: 'Error updating Web Lead with id=' + id
			});
		});
};

// Delete a Web Lead with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	WebLead.destroy({
		where: { id: id }
	})
		.then(num => {
			if (num == 1) {
				res.send({
					message: 'Web Lead was deleted successfully!'
				});
			} else {
				res.send({
					message: `Cannot delete Web Lead with id=${id}. Maybe WebLead was not found!`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: 'Could not delete Web Lead with id=' + id
			});
		});
};

// Delete all Web Leads from the database.
exports.deleteAll = (req, res) => {
	WebLead.destroy({
		where: {},
		truncate: false
	})
		.then(nums => {
			res.send({ message: `${nums} Web Leads were deleted successfully!` });
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occurred while removing all Web Leads.'
			});
		});
};

// Find all published Web Leads
exports.findAllPublished = (req, res) => {
	WebLead.findAll({ where: { published: true } })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving Web Leads.'
			});
		});
};
