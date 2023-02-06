import { IngredientService } from './ingredient.service';
import { Controller, Get, UseInterceptors, Param, Query } from '@nestjs/common';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer/class-serializer.interceptor';

@Controller('ingredient')
export class IngredientController {
    constructor(
        private ingredientService: IngredientService
    ) {

    }
    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    getAllTask(@Query("page") page: number, @Query("name") name:string) {
        return this.ingredientService.getAll(page);
    }

}
