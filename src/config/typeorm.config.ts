import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions =  {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1',
    database: 'hnag',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: false,
    autoLoadEntities: true
}