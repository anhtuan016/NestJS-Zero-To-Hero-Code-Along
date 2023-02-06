import { AuthCredientialDto } from './dto/auth-crededential.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    async signUp(credential: AuthCredientialDto): Promise<User> {
        return await this.save({
            username: credential.username,
            password: credential.password
        });
    }

    async validateUserAndPassword(credential: AuthCredientialDto): Promise<string> {
        const user: User = await this.findOne({
            where: {
                username: credential.username,
                password: credential.password
            }
        })
        if (!user) {
            throw new UnauthorizedException("Invalid Credential");
        }
        return user.username;
    }
}