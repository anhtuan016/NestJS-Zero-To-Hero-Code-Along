import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { AuthCredientialDto } from './dto/auth-crededential.dto';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('signup')
    signUp(@Body() cred: AuthCredientialDto) {
        return this.authService.signUp(cred);
    }
    @Post('login')
    login(@Body() cred: AuthCredientialDto) {
        return this.authService.login(cred);
    }

    @Get('/test')
    @UseGuards(JwtAuthGuard)
    test(@GetUser() user: User) {
        return user;
    }
}
