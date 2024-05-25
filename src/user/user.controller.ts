import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ClassRegisterUser } from './dto/user.dto';

@Controller('user')
export class UserController {

  constructor(private userService: UserService){}

  @Post('/register')
  postRegisterUser(@Body() newRegister: ClassRegisterUser){
    try {
      const newUserRegister = this.userService.postRegisterUser(newRegister.firstName, newRegister.lastName, 
        newRegister.userName, newRegister.email, newRegister.password, newRegister.img
      )
      return newUserRegister
    } catch (error) {
      
    }
  }

}
