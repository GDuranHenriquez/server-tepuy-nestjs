import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  postRegisterUser(firstName: string, lastName: string, userName: string, email: string, password: string, img: string | null){
    try {
      return { firstName, lastName, userName, email, password, img }
    } catch (error) {
      
    }
  }

}
