import appConfig from "../configs/appConfig";
import { AdminChild, Child } from "../types/child";
import fetchAuth from "../utils/fetchAuth";

class AdminChildrenService {
  static async getChildren(): Promise<AdminChild[]> {
    const res = await fetchAuth(appConfig.apiUrl + `/admin/children`);
    const json = await res.json();

    return json.data;
  }

  static async getChild(childId: number | string): Promise<AdminChild> {
    const res = await fetchAuth(appConfig.apiUrl + `/admin/children/${childId}`);
    const json = await res.json();

    return json.data;
  }

  static async deleteChild(childId: number | string) {
    const res = await fetchAuth(appConfig.apiUrl + `/admin/children/${childId}/delete`, {
      method: "DELETE",
    });

    const json = await res.json();

    return json;
  }

  static async switchChild(childId: number | string) {
    const res = await fetchAuth(appConfig.apiUrl + `/admin/children/${childId}/switch`, {
      method: "POST",
    });

    const json = await res.json();

    return json;
  }

  static async publishChild(childId: number | string) {
    const res = await fetchAuth(appConfig.apiUrl + `/admin/children/${childId}/publish`, {
      method: "POST",
    });

    const json = await res.json();

    return json;
  }

  static async createChild() {
    const res = await fetchAuth(appConfig.apiUrl + `/admin/children`, {
      method: "POST",
    });

    const json = await res.json();

    return json.data;
  }

  static async changeAvatar(childId: number | string, avatar: FormData) {
    const res = await fetchAuth(appConfig.apiUrl + `/admin/children/${childId}/avatar`, {
      method: "POST",
      body: avatar,
    });

    const json = await res.json();

    return json;
  }

  static async addImage(childId: number | string, image: FormData) {
    console.log("START SENDING");

    const res = await fetchAuth(appConfig.apiUrl + `/admin/children/${childId}/image`, {
      method: "POST",
      body: image,
    });

    console.log("IMAGE SENT");

    const json = await res.json();

    console.log("JSON PARSED");

    return json;
  }

  static async deleteImage(childId: number | string, imageId: number | string) {
    const res = await fetchAuth(appConfig.apiUrl + `/admin/children/${childId}/image/${imageId}`, {
      method: "DELETE",
    });

    const json = await res.json();

    return json;
  }

  static async updateChild(childId: number | string, child: Omit<Child, "id" | "avatar" | "images">) {
    // name, surname, specialization, sex, birthDate, height, hairColor, eyeColor, shoesSize, city
    const res = await fetchAuth(appConfig.apiUrl + `/admin/children/${childId}`, {
      method: "POST",
      body: JSON.stringify({
        ...child,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    return json;
  }
}

export default AdminChildrenService;
