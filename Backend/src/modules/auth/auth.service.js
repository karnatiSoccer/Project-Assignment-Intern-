import bcrypt from "bcrypt";
import User from "../users/user.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/jwt.js";

export const registerUser = async (data) => {
  const exists = await User.findOne({ email: data.email });
  if (exists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    ...data,
    password: hashedPassword,
  });

  return user;
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const accessToken = generateAccessToken({
    id: user._id,
    role: user.role,
  });

  const refreshToken = generateRefreshToken({
    id: user._id,
  });

  user.refreshToken = refreshToken;
  await user.save();

  return { user, accessToken, refreshToken };
};
