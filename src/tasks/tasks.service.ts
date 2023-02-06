import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { CreateTaskDto } from './dto/task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: TaskRepository
    ) { }
    async getTaskById(id: number) {
        const found = await this.taskRepository.findOne({
            where: {
                id
            }
        });
        if (!found) {
            throw new NotFoundException("Not found entity");
        }
        return found;
    }

    createTask(dto: CreateTaskDto) {
        return this.taskRepository.save({
            title: dto.title,
            description: dto.description,
            status: dto.status
        })
    }
}
