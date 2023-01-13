import { TaskValidationPipe } from './pipes/TaskValidation.pipe';
import { ValidationPipe } from './../shared/pipes/validation.pipe';
import { CreateTaskDto, FilterTaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';
import { Controller, Get, Query, Param } from '@nestjs/common';
import { Body, Post, UsePipes } from '@nestjs/common/decorators';
import { Logger } from '@nestjs/common';
import { idText } from 'typescript';
@Controller('tasks')
export class TasksController {
    constructor(
        private taskService: TasksService,
    ) { }

    @Get(':id')
    getAllTasks(@Param('id') id, @Query('name') name) {
        Logger.log(typeof id);
        Logger.log(typeof name);
        return this.taskService.getAllTasks();
    }

    @Post()
    // @UsePipes()
    createTask(@Body('title', TaskValidationPipe) dto: CreateTaskDto) {
        return this.taskService.createTask(dto);
    }
}
