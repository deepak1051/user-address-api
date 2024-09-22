import User from '../models/user.model.js';
import Address from '../models/address.model.js';

export const createUserWithAddress = async (req, res) => {
  try {
    const { name, street, city, country } = req.body;

    if (!name || !street || !city || !country)
      return res.status(400).json({ message: 'please fill all fields' });

    const user = await User.create({
      name,
      street,
      city,
      country,
    });

    const address = await Address.create({
      street,
      city,
      country,
      user: user._id,
    });

    user.addresses.push(address._id);
    await user.save();

    res.status(201).json({
      message: 'User and address created successfully',
      user,
      address,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
