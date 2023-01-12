import { CreateTaskDto } from './dto/task.dto';
import { Task, Status } from './task.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(dto: CreateTaskDto): Task {
        const { title, description } = dto;
        let task: Task = {
            id: uuidv4(),
            title,
            description,
            status: Status.OPEN
        };
        return task;
    }
}
