import { Status } from './../task-status.enum';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateTaskDto {

    @IsNotEmpty()
    @IsOptional()
    title: string;

    @IsOptional()
    description: string;

    @IsIn([Status.DONE, Status.IN_PROGRESS, Status.OPEN])
    status: Status;

}

export class FilterTaskDto {
    title: string;
    status: string
}