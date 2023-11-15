import { Request, Response } from "express";
import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import { Status } from "../types/status";
import Repositories from "../repositories";
import fileUpload from "express-fileupload";
import Uploader from "../utils/uploader";

class AdminChildrenController {
  constructor(private repositories: Repositories) {}

  changeChild = async (req: Request, res: Response) => {
    try {
      const childId = req.params.childId;
      const { name, surname, specialization, sex, birthDate, height, hairColor, eyeColor, shoesSize, city, video } = req.body;

      const child: any = {
        name,
        surname,
        specialization,
        sex,
        birthDate,
        height,
        hairColor,
        eyeColor,
        shoesSize,
        city,
        video,
      };

      for (let key in child) {
        if (child[key] === undefined || child[key] === null) {
          delete child[key];
        }
      }

      await this.repositories.childrenRepository.updateChild(childId, { ...child, isActive: 0 });

      return res.status(200).json({
        status: Status.Error,
        data: {
          message: "Child is updated",
        },
      });
    } catch (e) {
      console.log(e);

      return res.status(500).json({
        status: Status.Error,
        data: {
          message: "Internal server error",
        },
      });
    }
  };

  changeChildAvatar = async (req: Request, res: Response) => {
    try {
      const childId = req.params.childId;

      const child = await this.repositories.childrenRepository.getAdminChild(childId, false);
      if (!child) {
        return res.status(404).json({
          status: Status.Error,
          data: {
            message: "Updating child is not found",
          },
        });
      }

      const avatar = req?.files?.avatar as fileUpload.UploadedFile;

      if (!avatar) {
        return res.status(400).json({
          status: Status.Error,
          data: {
            message: "Avatar is not passed",
          },
        });
      }

      const filename = await Uploader.upload(avatar, 800, 800);

      await this.repositories.childrenRepository.updateChild(child.id, {
        isActive: 0,
        avatar: `/uploads/${filename}`,
      });

      return res.status(200).json({
        status: Status.Success,
        data: {
          message: "Image is uploaded",
        },
      });

      await Uploader.upload(avatar, 400);

      return res.status(200).json({
        status: Status.Success,
        data: {
          message: "Avatar is uploaded",
        },
      });
    } catch (e) {
      console.log(e);

      return res.status(500).json({
        status: Status.Error,
        data: {
          message: "Internal server error",
        },
      });
    }
  };

  createChild = async (req: Request, res: Response) => {
    try {
      await this.repositories.childrenRepository.createChild();
      return res.status(201).json({
        status: Status.Success,
        data: {
          message: "Child has been created",
        },
      });
    } catch (e) {
      console.log(e);

      return res.status(500).json({
        status: Status.Error,
        data: {
          message: "Internal server error",
        },
      });
    }
  };

  deleteChild = async (req: Request, res: Response) => {
    try {
      const childId = req.params.childId;

      await this.repositories.childrenRepository.deleteChild(childId);
      return res.status(200).json({
        status: Status.Success,
        data: {
          message: "Child has been deleted",
        },
      });
    } catch (e) {
      console.log(e);

      return res.status(500).json({
        status: Status.Error,
        data: {
          message: "Internal server error",
        },
      });
    }
  };

  getAdminChild = async (req: Request, res: Response) => {
    try {
      const childId = req.params.childId ?? -1;
      const child = await this.repositories.childrenRepository.getAdminChild(childId);

      return res.status(200).json({
        status: Status.Success,
        data: child,
      });
    } catch (e) {
      console.log(e);

      return res.status(500).json({
        status: Status.Error,
        data: {
          message: "Internal server error",
        },
      });
    }
  };

  getAdminChildren = async (req: Request, res: Response) => {
    try {
      const children = await this.repositories.childrenRepository.getAdminChildren();

      return res.status(200).json({
        status: Status.Success,
        data: children,
      });
    } catch (e) {
      console.log(e);

      return res.status(500).json({
        status: Status.Error,
        data: {
          message: "Internal server error",
        },
      });
    }
  };

  switchChild = async (req: Request, res: Response) => {
    try {
      const childId = req.params.childId;
      if (!childId) {
        return res.status(403).json({
          status: Status.Error,
          data: {
            message: "Child id is not passed",
          },
        });
      }

      const child = await this.repositories.childrenRepository.getAdminChild(childId);
      if (!child) {
        return res.status(404).json({
          status: Status.Error,
          data: {
            message: "Child is not found",
          },
        });
      }

      await this.repositories.childrenRepository.updateChild(childId, {
        isActive: !child?.isActive ? 1 : 0,
      });

      return res.status(200).json({
        status: Status.Success,
        data: {
          message: "Child has successfully been updated",
        },
      });
    } catch (e) {
      console.log(e);

      return res.status(500).json({
        status: Status.Error,
        data: {
          message: "Internal server error",
        },
      });
    }
  };

  publishChild = async (req: Request, res: Response) => {
    try {
      const childId = req.params.childId;
      if (!childId) {
        return res.status(403).json({
          status: Status.Error,
          data: {
            message: "Child id is not passed",
          },
        });
      }

      const child = await this.repositories.childrenRepository.getAdminChild(childId);
      if (!child) {
        return res.status(404).json({
          status: Status.Error,
          data: {
            message: "Child is not found",
          },
        });
      }

      const isChildInvalid =
        child?.images?.length < 3 || child?.images?.length > 12 || !child.avatar || !child.name || !child.surname || !child.specialization || !child.sex || !child.birthDate || !child.height || !child.hairColor || !child.eyeColor || !child.shoesSize || !child.city;

      if (isChildInvalid) {
        return res.status(400).json({
          status: Status.Error,
          data: {
            message: "Invalid child info",
          },
        });
      }

      await this.repositories.childrenRepository.updateChild(childId, {
        isActive: !child?.isActive ? 1 : 0,
      });

      return res.status(200).json({
        status: Status.Success,
        data: {
          message: "Child has successfully been updated",
        },
      });
    } catch (e) {
      console.log(e);

      return res.status(500).json({
        status: Status.Error,
        data: {
          message: "Internal server error",
        },
      });
    }
  };

  addImage = async (req: Request, res: Response) => {
    try {
      const childId = req.params.childId;

      const child = await this.repositories.childrenRepository.getAdminChild(childId, false);
      if (!child) {
        return res.status(404).json({
          status: Status.Error,
          data: {
            message: "Updating child is not found",
          },
        });
      }

      if (child.images.length > 12) {
        return res.status(403).json({
          status: Status.Error,
          data: {
            message: "Images are more than 12",
          },
        });
      }

      const image = req?.files?.image as fileUpload.UploadedFile;

      if (!image) {
        return res.status(400).json({
          status: Status.Error,
          data: {
            message: "Image is not passed",
          },
        });
      }

      const filename = await Uploader.upload(image);

      await this.repositories.childrenRepository.updateChild(child.id, {
        isActive: 0,
      });

      await this.repositories.childrenRepository.addImage(child.id, `/uploads/${filename}`);

      return res.status(200).json({
        status: Status.Success,
        data: {
          message: "Image is uploaded",
        },
      });
    } catch (e) {
      console.log(e);

      return res.status(500).json({
        status: Status.Error,
        data: {
          message: "Internal server error",
        },
      });
    }
  };

  deleteImage = async (req: Request, res: Response) => {
    try {
      const childId = req.params.childId;
      const imageId = req.params.imageId;

      if (!imageId || !childId) {
        return res.status(400).json({
          status: Status.Error,
          data: {
            message: "Image id is not passed",
          },
        });
      }

      const image = await this.repositories.childrenRepository.getChildImage(childId, imageId);
      if (!image) {
        return res.status(400).json({
          status: Status.Error,
          data: {
            message: "Image is not found",
          },
        });
      }

      await this.repositories.childrenRepository.updateChild(image.childId, {
        isActive: 0,
      });

      await this.repositories.childrenRepository.deleteImage(image.id);

      return res.status(200).json({
        status: Status.Success,
        data: {
          message: "Image is deleted",
        },
      });
    } catch (e) {
      console.log(e);

      return res.status(500).json({
        status: Status.Error,
        data: {
          message: "Internal server error",
        },
      });
    }
  };
}

export default AdminChildrenController;
