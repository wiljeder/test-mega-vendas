import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { GroupModule } from './group/group.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [UserModule, AuthModule, GroupModule, ContactModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
