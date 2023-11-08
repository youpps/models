import mysql from "mysql2/promise";
import moment from "moment";
import { AdminChild, Child, ChildImage, ChildrenFilter } from "../types/child";

type GetChildren = Partial<{
  specialization: string;
  ageFrom: number;
  ageTo: number;
  sex: string;
  shoesSize: string;
  city: string;
  eyeColor: string;
  hairColor: string;
  heightFrom: number;
  heightTo: number;
}>;

class ChildrenRepository {
  constructor(private db: mysql.Pool) {}

  private generateRandomString(length: number) {
    let result = "";

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    let counter = 0;

    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    return result;
  }

  async updateChild(childId: number | string, child: Partial<Omit<AdminChild, "id" | "images">>) {
    const updateValues: any = { ...child };

    if (updateValues["birthDate"] && moment(updateValues["birthDate"]).isValid()) {
      updateValues["birthDate"] = moment(updateValues["birthDate"]).format(`YYYYY-MM-DD`);
    } else {
      delete updateValues["birthDate"];
    }

    for (let key in updateValues) {
      if (updateValues[key] === undefined || updateValues[key] === null) {
        delete updateValues[key];
      }
    }

    const updateQuery = Object.keys(updateValues).map((key) => `${key} = :${key}`);

    const query = `UPDATE children SET ${updateQuery} WHERE id = :childId`;

    await this.db.execute(query, {
      childId,
      ...updateValues,
    });
  }

  async deleteImage(imageId: number | string) {
    const query = `DELETE FROM children_images WHERE id = ?`;

    await this.db.execute(query, [imageId.toString()]);
  }

  async addImage(childId: number | string, url: string) {
    const query = `INSERT INTO children_images(url, childId) VALUES (?, ?);`;

    await this.db.execute(query, [url.toString(), childId.toString()]);
  }

  async createChild() {
    const randomLogin = this.generateRandomString(8);
    const randomPassword = this.generateRandomString(8);

    const query = `INSERT INTO children(login, password) VALUES (?, ?);`;

    await this.db.execute(query, [randomLogin, randomPassword]);
  }

  async getAdminChildren(): Promise<AdminChild[]> {
    const query = `SELECT id, login, password, isAdmin, isActive, name, surname, shoesSize, city, eyeColor, hairColor, specialization, avatar, video FROM children WHERE isAdmin != 1;`;
    const [children]: any[] = await this.db.execute(query);
    return children;
  }

  async getChildren(props: GetChildren, dto: boolean = true): Promise<Child[]> {
    const whereQuery = [
      `isAdmin != 1`,
      `isActive = 1`,
      props.ageFrom ? `DATE_FORMAT(birthDate, "%Y-00-00 00:00:00") <= DATE_FORMAT(DATE_SUB(NOW(),INTERVAL :ageFrom YEAR), "%Y-00-00 00:00:00")` : "",
      props.ageTo ? `DATE_FORMAT(birthDate, "%Y-00-00 00:00:00") >= DATE_FORMAT(DATE_SUB(NOW(),INTERVAL :ageTo YEAR), "%Y-00-00 00:00:00")` : "",
      props.city ? `city = :city` : "",
      props.eyeColor ? `eyeColor = :eyeColor` : "",
      props.hairColor ? `hairColor = :hairColor` : "",
      props.heightFrom ? `height >= :heightFrom` : "",
      props.heightTo ? `height <= :heightTo` : "",
      props.sex ? `sex = :sex` : "",
      props.shoesSize ? `shoesSize = :shoesSize` : "",
      props.specialization ? `specialization = :specialization` : "",
    ]
      .filter((value) => !!value)
      .join(" AND ");

    let whereValues: any = {
      ...props,
    };

    for (let key of Object.keys(whereValues)) {
      if (!whereValues[key]) {
        delete whereValues[key];
      }

      if (Number.isInteger(whereValues[key])) {
        whereValues[key] = Number(whereValues[key]);
      }
    }

    const query = `SELECT id, name, surname, sex, birthDate, height, shoesSize, city, eyeColor, hairColor, specialization, avatar, video FROM children WHERE ${whereQuery};`;

    const [children]: any[] = await this.db.query(query, whereValues);

    const result = [];

    for (let child of children) {
      const images = await this.getChildImages(child.id, dto);

      const resultChild = {
        ...child,
        images,
        avatar: child.avatar ? (dto ? `${process.env.APP_HOST}${child.avatar}` : child.avatar) : null,
      };

      result.push(resultChild);
    }

    return result;
  }

  async getChildrenFilter(column: string): Promise<ChildrenFilter[]> {
    if (column === "height") {
      const query = `SELECT DISTINCT ${column} FROM children;`;
      const [values]: any[] = await this.db.query(query);

      const correctValues: number[] = values.map((value: any) => value[column]).filter((value: any) => !!value);

      const result = [];

      for (let value of correctValues) {
        const children = await this.getChildren({
          heightFrom: value,
          heightTo: value,
        });

        const left = value % 10;
        // if (left === 0) {
        //   result.push({
        //     item: `${value}-${value + 10}`,
        //     counter: children.length,
        //   });

        //   result.push({
        //     item: `${value - 10}-${value}`,
        //     counter: children.length,
        //   });

        //   continue;
        // }

        const id = `${value - left}-${value + 10 - left}`;

        result.push({
          item: id,
          counter: children.length,
        });
      }

      const sortedResult = result.sort((a: any, b: any) => Number(a.item.split("-")[1]) - Number(b.item.split("-")[1]));
      return sortedResult;
    }

    if (column === "birthDate") {
      const query = `SELECT DISTINCT ${column} FROM children;`;
      const [values]: any[] = await this.db.query(query);

      const correctValues: number[] = values.map((value: any) => value[column]).filter((value: any) => !!value);

      const result = [];

      for (let value of correctValues) {
        const years = moment().diff(value, "years");

        const children = await this.getChildren({
          ageFrom: years,
          ageTo: years,
        });

        // result.push({
        //   item: `${years}-${years + 1}`,
        //   counter: children.length,
        // });

        result.push({
          item: `${years - 1}-${years}`,
          counter: children.length,
        });
      }

      const sortedResult = result.sort((a: any, b: any) => Number(a.item.split("-")[1]) - Number(b.item.split("-")[1]));
      return sortedResult;
    }

    const query = `SELECT DISTINCT ${column} FROM children;`;
    const [values]: any[] = await this.db.query(query);

    const correctValues = values.map((value: any) => value[column]).filter((value: any) => !!value);

    const result = [];

    for (let value of correctValues) {
      const children = await this.getChildren({
        [column]: value,
      });

      result.push({
        item: value,
        counter: children.length,
      });
    }

    return result;
  }

  async getChildImages(childId: number | string, dto: boolean = true): Promise<ChildImage[]> {
    const query = `SELECT id, url, childId FROM children_images WHERE childId = ?`;
    const [images]: any[] = await this.db.execute(query, [childId.toString()]);

    const resultImages = images.map((image: any) => ({
      ...image,
      url: dto ? `${process.env.APP_HOST}${image.url}` : image.url,
    }));

    return resultImages;
  }

  async getChildImage(childId: number | string, imageId: number | string, dto: boolean = true): Promise<ChildImage | null> {
    const query = `SELECT id, url, childId FROM children_images WHERE childId = ? AND id = ?`;
    const [images]: any[] = await this.db.execute(query, [childId.toString(), imageId.toString()]);

    const image = images[0];
    if (!image) {
      return null;
    }

    if (dto) {
      image.url = dto ? `${process.env.APP_HOST}${image.url}` : image.url;
    }

    return image;
  }

  async getChild(childId: number | string, dto: boolean = true): Promise<Child | null> {
    const query = `SELECT id, name, surname, sex, shoesSize, birthDate, height, city, eyeColor, hairColor, specialization, avatar, video FROM children WHERE isAdmin != 1 AND isActive = 1 AND id = ?;`;
    const [children]: any[] = await this.db.execute(query, [childId.toString()]);

    const child = children[0];
    if (!child) {
      return null;
    }

    child.avatar = child.avatar ? (dto ? `${process.env.APP_HOST}${child.avatar}` : child.avatar) : null;
    child.images = await this.getChildImages(child.id, dto);

    return child;
  }

  async getAdminChild(loginOrId: string | number, dto: boolean = true): Promise<AdminChild | null> {
    const query = `SELECT id, login, password, sex, isAdmin, height, birthDate, isActive, name, surname, shoesSize, city, eyeColor, hairColor, specialization, avatar, video FROM children WHERE id = ? OR login = ?;`;
    const [children]: any[] = await this.db.execute(query, [loginOrId.toString(), loginOrId.toString()]);

    const child = children[0];
    if (!child) {
      return null;
    }

    child.avatar = child.avatar ? (dto ? `${process.env.APP_HOST}${child.avatar}` : child.avatar) : null;
    child.images = await this.getChildImages(child.id);

    return child;
  }
}

export default ChildrenRepository;
