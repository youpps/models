import mysql from "mysql2/promise";

import ChildrenRepository from "./childrenRepository";

class Repositories {
  childrenRepository: ChildrenRepository;

  constructor(db: mysql.Pool) {
    this.childrenRepository = new ChildrenRepository(db);
  }
}

export default Repositories;
