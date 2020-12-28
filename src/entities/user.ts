import { Expose, Transform, Type } from "class-transformer";

export enum  GENDER {
  MALE = 'male',
  FEMALE = 'female',
  OTHERS = 'others'
}
export class Location {
  city: string;
  country: string;  
  coordinates: {latitude: number, longitude: number};
  postcode: number;
  state: string;
  street: string;
  timezone: {offset: string, description: string}
}
export class Login {
  username: string;
  uuid: string;
  password: string;
}

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

export class User {
  @Expose()
  @Transform((value, obj, type) => {
    return obj.login === null || obj.login === undefined ? obj.login.uuid : (Date.now().toString() as string);
  })
  id: string;
  @Expose() cell: string;
  @Expose() phone: string;
  @Expose() 
  @Transform((value: {date: Date, age: number}) => {
    return new Date(value.date);
  })
  dob: Date;
  @Expose() email: string;
  @Expose() gender: GENDER;
  @Expose()
  @Type(() => String)
  @Transform((_value,obj,_type) => {
    return obj.name.first;
  })
  firstName: string;
  @Expose()
  @Type(() => String)
  @Transform((_value,obj,_type) => {
    return obj.name.last;
  })
  lastName: string;  
  @Expose() picture: {
    large: string,
    medium: string,
    thumbnail: string,
  };
  @Expose() 
  @Transform((value: {date: Date, age: number}) => {
    console.error('registered', value);
    return new Date(value.date);
  }, {toClassOnly: true})
  registered: Date;
  @Expose() location: Location;
  @Expose() login: Login;

  @Expose()
  get fullName() :string {
    return `${this.firstName} ${this.lastName}`
  }
  @Expose()
  get age(): number {
    return <number>(new Date().getFullYear() - this.dob.getFullYear());
  }

  sortAge(user: User): number {
    return this.age - user.age;
  }

  toString() : HTMLElement {
    const ele = document.createElement('tr');
    ele.innerHTML = `
      <th>${this.id}</th>
      <td>${this.fullName}</td>
      <td>${this.age}</td>
    `
    return ele;
  }
}