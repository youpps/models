interface ChildImage {
  id: number;
  url: string;
}

interface ChildrenFilter {
  item: string;
  counter: number;
}

interface ChildrenFilters {
  specialization: ChildrenFilter[];
  sex: ChildrenFilter[];
  age: ChildrenFilter[];
  height: ChildrenFilter[];
  hairColor: ChildrenFilter[];
  eyeColor: ChildrenFilter[];
  shoesSize: ChildrenFilter[];
  city: ChildrenFilter[];
}

interface ChildrenChosenFilters {
  specialization: string | null;
  sex: string | null;
  age: string | null;
  height: string | null;
  hairColor: string | null;
  eyeColor: string | null;
  shoesSize: string | null;
  city: string | null;
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
  height: string;
  sex: string;
  video: string;
}

type Child = Omit<AdminChild, "login" | "password" | "isAdmin" | "isActive">;

export type { Child, ChildrenFilters, ChildrenFilter, ChildrenChosenFilters, AdminChild };
