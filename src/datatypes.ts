import * as userData from './data/users.json';
import {plainToClass} from 'class-transformer';
import { User } from './entities/user';

// class User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }



class DataTypes {
  static loadJSON = () => {    
    // console.table(userData.results);
    const usersList : HTMLElement = document.getElementById('users-list');
    const userPlainData = userData.results || [];
    let users: Array<User> = [];
    users = userPlainData.map(u => {    
      console.error('u',u);
      const user = plainToClass(User, u, { excludeExtraneousValues: true });    
      return user;
    }).sort((a: User, b: User) => {
      return a.sortAge(b);
    });
    users.map(u => usersList.appendChild(u.toString()));
    
    console.table(users);
    return userData.results;
  }
}

export default DataTypes;