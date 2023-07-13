const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const cartSchema = require('./cart.js')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  },
  cart:[
    {
      type: cartSchema
    }
  ],
  notes: [
    {
      noteText: {
        type: String,
        required: true,
      },
      stress: {
        type: String,
      },
      createdAt: {
        type: String,
        default: Date.now
      }
    
    }
  ]
},
 // set this to use virtual below
 {
  toJSON: {
    virtuals: true,
  },
}
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
