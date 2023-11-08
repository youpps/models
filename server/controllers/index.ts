import Repositories from "../repositories";
import AdminChildrenController from "./adminChildrenController";
import AuthController from "./authController";
import ChildrenController from "./childrenController";

class Controllers {
  childrenController: ChildrenController;
  adminChildrenController: AdminChildrenController;
  authController: AuthController;

  constructor(repositories: Repositories) {
    this.childrenController = new ChildrenController(repositories);
    this.adminChildrenController = new AdminChildrenController(repositories);
    this.authController = new AuthController(repositories);
  }
}

export default Controllers;
