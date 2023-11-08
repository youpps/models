import { ChildrenChosenFilters, ChildrenFilters } from "../types/child";

class FiltersService {
  static getFilters(): ChildrenChosenFilters | null {
    const filters = localStorage.getItem("filter");
    return filters ? JSON.parse(filters) : null;
  }

  static setFilters(filters: ChildrenChosenFilters) {
    localStorage.setItem("filter", JSON.stringify(filters));
  }
}

export default FiltersService;
