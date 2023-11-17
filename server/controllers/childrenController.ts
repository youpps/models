import { Request, Response } from "express";
import Repositories from "../repositories";
import { Status } from "../types/status";
import { Child, ChildrenFilter } from "../types/child";

class ChildrenController {
  constructor(private repositories: Repositories) {}

  getChildren = async (req: Request, res: Response) => {
    try {
      const child = req.query;

      const children = await this.repositories.childrenRepository.getChildren(child);
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

  getChild = async (req: Request, res: Response) => {
    try {
      const childId = req.params.childId ?? -1;
      const getChild = await this.repositories.childrenRepository.getChild(childId);
      return res.status(200).json({
        status: Status.Success,
        data: getChild,
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

  getChildrenFilters = async (req: Request, res: Response) => {
    try {
      const filtersPairs = {
        specialization: "specialization",
        sex: "sex",
        age: "birthDate",
        height: "height",
        hairColor: "hairColor",
        eyeColor: "eyeColor",
        shoesSize: "shoesSize",
        city: "city",
        video: "video",
      };

      const pool = [];
      const filters: { [key: string]: ChildrenFilter[] } = {};

      for (let filter in filtersPairs) {
        pool.push(async () => {
          const sqlKey: any = (filtersPairs as any)[filter];
          filters[filter] = await this.repositories.childrenRepository.getChildrenFilter(sqlKey);
        });
      }

      await Promise.allSettled(pool);

      // const specialization = await this.repositories.childrenRepository.getChildrenFilter("specialization");
      // const sex = await this.repositories.childrenRepository.getChildrenFilter("sex");
      // const age = await this.repositories.childrenRepository.getChildrenFilter("birthDate");
      // const height = await this.repositories.childrenRepository.getChildrenFilter("height");
      // const hairColor = await this.repositories.childrenRepository.getChildrenFilter("hairColor");
      // const eyeColor = await this.repositories.childrenRepository.getChildrenFilter("eyeColor");
      // const shoesSize = await this.repositories.childrenRepository.getChildrenFilter("shoesSize");
      // const city = await this.repositories.childrenRepository.getChildrenFilter("city");
      // const video = await this.repositories.childrenRepository.getChildrenFilter("video");

      return res.status(200).json({
        status: Status.Success,
        data: {
          ...filters,
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

export default ChildrenController;
