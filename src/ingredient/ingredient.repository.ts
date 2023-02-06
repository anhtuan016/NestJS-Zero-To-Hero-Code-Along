import { TIngredient } from '../entities/TIngredient.entity';
import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
@Injectable()
export class IngredientRepository extends Repository<TIngredient>{
    constructor(dataSource: DataSource){
        super(TIngredient, dataSource.createEntityManager());
    }
}