// controller is handling the request and processing the data generate the data

import User from "../model/userModel.js";

// code to add the data into the database ;

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists. " });
      // 400 -- bad request status code
    }

    const savedData = await newUser.save();
    res.status(200).json(savedData);

    // 200 -- OK status code
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
    // 500 -- internal server error
  }
};
