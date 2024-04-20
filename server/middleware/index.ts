// index.ts
import { Request, Response, NextFunction } from "express"; // Import Request and Response types
import jwt from "jsonwebtoken";
import User from "../models/users";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers) {
      return res.status(401).json({
        message: "Unauthorized access ... headers is missing",
        success: false,
      });
    }
    if (!req.headers.authorization) {
      return res.status(401).json({
        message: "Unauthorized access ... headers is missing",
        success: false,
      });
    }
    const token = req?.headers?.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied", success: false });
    }
    const decoded: any = jwt.verify(token, process.env.AUTH_SECRET as string);
    const id = decoded?.user?._id;
    req.user = await User.findById(id).select("-password");
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Token is not valid", success: false });
  }
};

export { authMiddleware };
