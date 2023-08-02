const User = require('./User.Model');
// const Task = require('./Task.Model');

// Signup user
const Signup_user = async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    });

    console.log('New user created:', user);
    res.json({ msg: 'Signup successful', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ msg: 'Error creating user' });
  }
};


const Login_user = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      res.status(404).json({ msg: 'User not found' });
    } else {
      console.log('Existing user:', user);
      res.json({ msg: 'Login successful', user });
    }
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ msg: 'Error finding user' });
  }
};

const Task = async (req, res) =>{

}

module.exports = { Signup_user, Login_user };
