import { NextFunction, Request, Response } from "express";
import Jwt from "../utils/jwt";

async function adminMiddleware(req: Request, res: Response, next: NextFunction) {
  const accessToken = req.headers.authorization?.split(" ")[1] || "";

  const JWT_SECRET = process.env.JWT_SECRET || "";

  const child = await Jwt.checkValid(JWT_SECRET, accessToken);

  if (!child?.isAdmin) {
    return res.status(403).json({
      status: "error",
      data: {
        message: "You've got invalid access token. Please, relogin",
      },
    });
  }

  return next();
}

export default adminMiddleware;
