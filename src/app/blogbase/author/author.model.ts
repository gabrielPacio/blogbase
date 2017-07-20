export class Author {
  id: string;
  firstName: string;
  surName: string;
  bio: string;
  profilePicUrl: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
