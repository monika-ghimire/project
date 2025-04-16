import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BookController } from './app.controller';
import { BookService } from './book.service';

@Module({
  imports: [UsersModule],
  controllers: [BookController],
  providers: [BookService],
  exports:[]
})
export class RootModule {
  constructor(){
    console.log('start modules ')
  }
}
