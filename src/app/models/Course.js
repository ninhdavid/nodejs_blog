const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
var mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, maxLength: 600 },
		image: { type: String },
		level: { type: String },
		videoId: { type: String, required: true },
		slug: { type: String, slug: 'name', unique: true },
		// deletedAt: { type: Date, default: Date.now() },
	},
	{
		timestamps: true,
	}
);
//add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
	deletedAt: true,
	overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
