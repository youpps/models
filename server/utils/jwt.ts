import jwt from "jsonwebtoken";
import { SafeAdminChild } from "../types/child";

class Jwt {
  static async createToken(secret: string, data: SafeAdminChild) {
    return new Promise((rs, rj) => {
      jwt.sign({ ...data }, secret, { expiresIn: "10d" }, (err, token) => {
        if (err) {
          rj(err);
          return;
        }

        rs(token);
      });
    });
  }

  static async checkValid(secret: string, token: string): Promise<SafeAdminChild | null> {
    return new Promise((rs) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          console.log(err);

          rs(null);
          return;
        }

        rs(decoded as SafeAdminChild);
      });
    });
  }

  static async refreshToken(secret: string, token: string): Promise<{ child: SafeAdminChild; token: string }> {
    return new Promise((rs, rj) => {
      jwt.verify(token, secret, (err, decoded: any) => {
        if (!err) {
          const child = decoded as SafeAdminChild;
          Jwt.createToken(secret, child)
            .then((token: any) => {
              rs({
                child,
                token,
              });
            })
            .catch(rj);
        } else {
          rj(err);
        }
      });
    });
  }
}

export default Jwt;
