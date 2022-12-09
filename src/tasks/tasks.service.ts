import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/Task';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('tasks') private taskModel: Model<Task>) {}

  async getTasks(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async getTask(id: string): Promise<Task> {
    return await this.taskModel.findById(id).exec();
  }

  async createTask(task: TaskDto) {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }
}
