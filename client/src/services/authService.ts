import appConfig from "../configs/appConfig";
import { AdminChild } from "../types/child";
import { jwtDecode } from "jwt-decode";

interface ILogin {
  child: AdminChild;
  accessToken: string;
}

class AuthService {
  static async login(login: string, password: string): Promise<ILogin | null> {
    const res = await fetch(appConfig.apiUrl + `/admin/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    if (json.status === "error") {
      return null;
    }

    return json?.data;
  }

  static setAccessToken(token: string) {
    localStorage.setItem("accessToken", token);
  }

  static getAccessToken() {
    const token = localStorage.getItem("accessToken");
    return token;
  }

  static removeAuth() {
    localStorage.removeItem("accessToken");
  }

  static getUser(): Omit<AdminChild, "login" | "password"> | null {
    try {
      const token = AuthService.getAccessToken();
      if (!token) {
        return null;
      }

      const user: Omit<AdminChild, "login" | "password"> = jwtDecode(token);
      return user;
    } catch (e) {
      return null;
    }
  }
}

export default AuthService;
