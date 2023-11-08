import appConfig from "../configs/appConfig";
import { AdminChild, Child } from "../types/child";

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
}

export default AuthService;
