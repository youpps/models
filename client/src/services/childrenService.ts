import appConfig from "../configs/appConfig";
import { ChildrenChosenFilters, ChildrenFilters } from "../types/child";
import fetchAuth from "../utils/fetchAuth";

class ChildrenService {
  static async getChildrenFilters(): Promise<ChildrenFilters> {
    const res = await fetchAuth(appConfig.apiUrl + "/children/filters");
    const json = await res.json();

    return json.data;
  }

  static async getChildren(filters: ChildrenChosenFilters) {
    const correctFilters: any = { ...filters };

    correctFilters["heightFrom"] = correctFilters["height"]?.split("-")[0] ?? null;
    correctFilters["heightTo"] = correctFilters["height"]?.split("-")[1] ?? null;
    delete correctFilters["height"];

    correctFilters["ageFrom"] = correctFilters["age"]?.split("-")[0] ?? null;
    correctFilters["ageTo"] = correctFilters["age"]?.split("-")[1] ?? null;
    delete correctFilters["age"];

    for (let key in correctFilters) {
      if (!correctFilters[key]) {
        delete correctFilters[key];
      }
    }

    const params = new URLSearchParams(correctFilters);

    const res = await fetchAuth(appConfig.apiUrl + "/children" + `?${params.toString()}`);
    const json = await res.json();

    return json.data;
  }

  static async getChild(id: number | string) {
    const res = await fetchAuth(appConfig.apiUrl + `/children/${id}`);
    const json = await res.json();

    return json.data;
  }
}

export default ChildrenService;
