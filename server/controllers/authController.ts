import { Request, Response } from "express";
import { Status } from "../types/status";
import Repositories from "../repositories";
import Jwt from "../utils/jwt";

class AuthController {
  constructor(private repositories: Repositories) {}

  login = async (req: Request, res: Response) => {
    const login = req.body.login ?? "";
    const password = req.body.password ?? "";

    const child = await this.repositories.childrenRepository.getAdminChild(login);
    if (!child) {
      return res.status(404).json({
        status: Status.Error,
        data: {
          message: "User is not found",
        },
      });
    }

    if (child.password !== password) {
      return res.status(403).json({
        status: Status.Error,
        data: {
          message: "Password is incorrect",
        },
      });
    }

    const accessToken = await Jwt.createToken(process.env.JWT_SECRET ?? "", {
      id: child.id,
      login: child.login,
      isAdmin: child.isAdmin,
      isActive: child.isActive,
      avatar: child.avatar,
      images: child.images,
      name: child.name,
      surname: child.surname,
      birthDate: child.birthDate,
      shoesSize: child.shoesSize,
      city: child.city,
      eyeColor: child.eyeColor,
      hairColor: child.hairColor,
      specialization: child.specialization,
      height: child.height,
      sex: child.sex,
      video: child.video,
      secondVideo: child.secondVideo,
    });

    return res.status(200).json({
      status: Status.Success,
      data: {
        accessToken,
        child,
      },
    });
  };
}

export default AuthController;
