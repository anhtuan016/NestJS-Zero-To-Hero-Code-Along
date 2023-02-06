import { JwtPayload } from './jwt-payload.interface';
import { AuthCredientialDto } from './dto/auth-crededential.dto';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    async signUp(cred: AuthCredientialDto): Promise<User> {
        return this.userRepository.signUp(cred);
    }

    async login(cred: AuthCredientialDto): Promise<{ accessToken: string }> {
        const username = await this.userRepository.validateUserAndPassword(cred);
        const token: JwtPayload = {
            username
        };
        const accessToken = this.jwtService.sign(token);
        return { accessToken };

    }
}
