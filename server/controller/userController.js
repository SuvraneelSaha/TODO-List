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
    // res.status(200).json(savedData);
      res.status(200).json({message:"User Created Successfully in the Backend DB"});

    // 200 -- OK status code
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
    // 500 -- internal server error
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "User data not found !!" });
      // 404 - not found status code
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
    // 500 -- internal server error
  }
};

export const getUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ message: "User not found !!" });
      // 404 - not found status code
    }

    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
    // 500 -- internal server error
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ message: "User not found !!" });
      // 404 - not found status code
    }

    const updatedData = await User.findByIdAndUpdate(id,req.body,
      {
        new : true
      }
    );

    res.status(200).json(updatedData) ; 


  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
    // 500 -- internal server error
  }
};

export const deleteUser = async(req,res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ errormessage: "User not found !!" });
      // 404 - not found status code
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({message:"User deleted Successfully !!"}) ; 
    
  } catch (error) {
     res.status(500).json({ errorMessage: error.message });
    // 500 -- internal server error
  }
}
