import { TaskValidationPipe } from './pipes/TaskValidation.pipe';
import { ValidationPipe } from './../shared/pipes/validation.pipe';
import { CreateTaskDto, FilterTaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';
import { Controller, Get, Query, Param, ParseIntPipe, OnModuleInit, Body } from '@nestjs/common';
import { Post, UsePipes } from '@nestjs/common/decorators';
import { Logger } from '@nestjs/common';
import { idText } from 'typescript';
@Controller('tasks')
export class TasksController implements OnModuleInit {
    constructor(
        private taskService: TasksService,
    ) { }

    onModuleInit() {

    }

    @Get(':id')
    getTaskById(@Param('id') id: number) {
        return this.taskService.getTaskById(id);
    }

    @Post('create')
    createTask(@Body(ValidationPipe) dto: CreateTaskDto) {
        // console.log(dto);
        return this.taskService.createTask(dto);
    }


    // @Post()
    // // @UsePipes()
    // createTask(@Body('title', TaskValidationPipe) dto: CreateTaskDto) {
    //     return this.taskService.createTask(dto);
    // }
}
