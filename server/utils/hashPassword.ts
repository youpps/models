import bcrypt from "bcrypt";

class HashPassword {
  static create(password: string) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    return hashPassword;
  }

  static check(hashPassword: string, password: string): boolean {
    return bcrypt.compareSync(password, hashPassword);
  }
}

export default HashPassword;
