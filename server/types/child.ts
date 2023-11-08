interface ChildrenFilter {
  item: string;
  counter: number;
}

interface ChildImage {
  id: number;
  url: string;
  childId: number;
}

interface AdminChild {
  id: number;
  login: string;
  password: string;
  isAdmin: 1 | 0;
  isActive: 1 | 0;

  avatar: string;
  images: ChildImage[];
  name: string;
  surname: string;
  birthDate: string;
  shoesSize: string;
  city: string;
  eyeColor: string;
  hairColor: string;
  specialization: string;
  height: number;
  sex: string;
  video: string;
}

type SafeAdminChild = Omit<AdminChild, "password">;
type Child = Omit<AdminChild, "password" | "login" | "isAdmin" | "isActive">;

export { AdminChild, Child, ChildImage, ChildrenFilter, SafeAdminChild };
