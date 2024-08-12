 const sequelize = require('./models/index'); // Adjust the path as needed
 
const User = require('./models/User'); // Adjust the path as needed
(async () => {
  try {
    await sequelize.sync(); // This creates the tables based on the model definitions
    console.log('Database synchronized.');

    // Example: Create a new user
    const jane = await User.create({ firstName: 'Praduman', lastName: 'Kumar' });
    console.log('User created:', jane.toJSON());

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close(); // Close the connection when done
  }
})
()
