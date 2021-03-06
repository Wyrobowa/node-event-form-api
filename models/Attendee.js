const mongoose = require('mongoose');
const slug = require('slug');

const AttendeeSchema = new mongoose.Schema({
  slug: {
    type: String,
    lowercase: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
});

AttendeeSchema.pre('save', async function (next) {
  this.slug = slug(this.email);

  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const usersWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (usersWithSlug.length) {
    this.slug = `${this.slug}-${usersWithSlug.length + 1}`;
  }
  next();
});

module.exports = mongoose.model('Attendee', AttendeeSchema);
