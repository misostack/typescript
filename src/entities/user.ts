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


export class User {
  @Expose()
  @Transform((value, obj, type) => {
    return obj.login.uuid
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
}