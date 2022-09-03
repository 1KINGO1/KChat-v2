import { DbService } from '../db/db.service';
import CreateUser from './dto/CreateUser';
import { AuthService } from './auth.service';
import VerifyToken from './dto/VerifyToken';
import Login from './dto/Login';
export declare class AuthController {
    private dbService;
    private authService;
    constructor(dbService: DbService, authService: AuthService);
    login({ login, password }: Login, res: any): Promise<void>;
    verifyToken({ token: tokenBody }: VerifyToken, req: any, res: any): Promise<void>;
    createUser(data: CreateUser): Promise<{
        err: boolean;
        message: unknown;
        data: any;
    }>;
}
