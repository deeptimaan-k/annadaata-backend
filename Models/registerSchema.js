const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// Define the schema for the User
const userSchema = new Schema({
  accountType: {
    type: String,
    enum: ['Farmer', 'Buyer'],
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  termsAccepted: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw new Error(err);
  }
};

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
