import { DbService } from '../db/db.service';
import CreateUserDto from './dto/CreateUserDto';
import { AuthService } from './auth.service';
import VerifyTokenDto from './dto/VerifyTokenDto';
export declare class AuthController {
    private dbService;
    private authService;
    constructor(dbService: DbService, authService: AuthService);
    login({ login, password }: CreateUserDto, res: any): Promise<void>;
    verifyToken({ token: tokenBody }: VerifyTokenDto, req: any, res: any): Promise<void>;
    createUser(data: CreateUserDto): Promise<{
        err: boolean;
        message: unknown;
    }>;
}
