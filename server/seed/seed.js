const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

const User = require('./models/User');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');

  User.findOne({ email: adminEmail })
    .then(async (existingUser) => {
      if (existingUser) {
        console.log('Admin user already exists.');
        return mongoose.disconnect();
      }
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      const adminUser = new User({
        email: adminEmail,
        password: hashedPassword,
        role: 'admin',
      });

      return adminUser.save();
    })
    .then(() => {
      console.log('Admin user created successfully.');
    })
    .catch((error) => {
      console.error('Error creating admin user:', error);
    })
    .finally(() => {
      mongoose.disconnect();
    });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
