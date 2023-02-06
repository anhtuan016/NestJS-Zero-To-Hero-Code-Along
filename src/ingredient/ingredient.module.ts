import { IngredientRepository } from './ingredient.repository';
import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';

@Module({
  imports: [],
  controllers: [IngredientController],
  providers: [IngredientService, IngredientRepository]
})
export class IngredientModule {}
