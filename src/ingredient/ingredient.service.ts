import { Injectable } from '@nestjs/common';
import { getAllJSDocTags } from 'typescript';
import { IngredientRepository } from './ingredient.repository';

@Injectable()
export class IngredientService {
    constructor(
        private repository: IngredientRepository
    ) { }

    getAll(page: number = 0) {
        const skipValue = page * 10;
        return this.repository.find({
            order: {
                name: "ASC"
            },
            skip: skipValue,
            take: 10
        });
    }

}
