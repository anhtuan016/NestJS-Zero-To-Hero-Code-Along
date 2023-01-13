import { Status } from './../task.model';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateTaskDto {

    @IsNotEmpty()
    @IsOptional()
    title: string;

    @IsOptional()
    description: string;

    @IsIn([Status.DONE, Status.IN_PROGRESS, Status.OPEN])
    status: string;

}

export class FilterTaskDto {
    title: string;
    status: string
}