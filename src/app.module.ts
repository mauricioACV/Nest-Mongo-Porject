import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/nest-project?directConnection=true',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
