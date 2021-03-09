import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { BaseModule } from '../_base/base.module';

@Module({
  imports: [BaseModule],
  providers: [UserResolver, UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
