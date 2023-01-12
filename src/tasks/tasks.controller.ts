import { CreateTaskDto, FilterTaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';
import { Controller, Get, Query } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { Logger } from '@nestjs/common';
@Controller('tasks')
export class TasksController {
    constructor(
        private taskService: TasksService,
    ) { }

    @Get()
    getAllTasks(@Query() dto: FilterTaskDto) {
        Logger.log(dto);
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() dto: CreateTaskDto) {
        return this.taskService.createTask(dto);
    }
}
