import * as jwt from 'jsonwebtoken';

import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.entity';

@Controller('/auth')
export class UserController {
  @Post()
  auth(@Body() user: User) {
    // como não há interface de criação de usuários, quaisquer dados enviados são considerados válidos
    const token = jwt.sign({ username: user.username }, 'segredo', {
      expiresIn: '24h',
    });
    return { token };
  }
}
