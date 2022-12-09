import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  //   Req,
  //   Res,
} from '@nestjs/common';
// import { Request, Response } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  //método nest - RECOMENDADO
  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.taskService.getTask(taskId);
  }

  //método express - no recomendado
  //   @Get()
  //   getTask(@Req() req, @Res() res): Response {
  //     return res.send('Hello World');
  //   }

  @Post()
  createTask(@Body() task: TaskDto): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return `Eliminando tarea id: ${id}`;
  }

  @Put(':id')
  updateTask(@Body() task: TaskDto, @Param('id') id): string {
    console.log('task: ', task);
    console.log('id: ', id);
    return 'Actualizando una tarea...';
  }
}
